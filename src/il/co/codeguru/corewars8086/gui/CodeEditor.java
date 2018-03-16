package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import elemental2.dom.EventListener;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.gui.widgets.ActionEvent;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.gui.widgets.JButton;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Disassembler;
import il.co.codeguru.corewars8086.war.*;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import java.util.*;

public class CodeEditor implements CompetitionEventListener, MemoryEventListener
{
    private HTMLElement asm_output, opcodes_edit, asm_linenums, asm_show, debug_area, editor_bottom;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;

    private boolean m_isDebugMode = false;
    private MemoryEventListener.EWriteState m_memWriteState = MemoryEventListener.EWriteState.INIT;
    private ArrayList<PlayersPanel.Breakpoint> m_breakpoints = null;

    public static final int CODE_ARENA_OFFSET = 0x10000;

    private byte[] m_mem = null;
    // competitionEventListener
    @Override
    public void onWarStart() {
        m_mem = m_competition.getCurrentWar().getMemory().m_data;
    }
    @Override
    public void onWarEnd(int reason, String winners) {
        m_mem = null;
    }
    @Override
    public void onRound(int round) {}
    @Override
    public void onWarriorBirth(Warrior w) {}
    @Override
    public void onWarriorDeath(String warriorName, String reason) {}
    @Override
    public void onCompetitionStart() {}
    @Override
    public void onCompetitionEnd() {}
    @Override
    public void onEndRound() {
        updateDebugLine();

    }

    DbgLine getSingleByteLine(byte bval) {
        int val = bval & 0xff; // to unsigned int
        DbgLine byteline = m_singleByte[val];
        if (byteline == null) {
            byteline = new DbgLine();
            String hexVal = Format.hex2(val);
            byteline.text = "<span class='dbg_opcodes'>" + hexVal + "</span>db " + hexVal + "h";
            byteline.flags = FLAG_UNPARSED;
            //byteline.binOpcode = new byte[1];
            //byteline.binOpcode[0] = War.ARENA_BYTE;
        }
        m_singleByte[val] = byteline;
        return byteline;
    }

    private void setByte(int address, byte value) {
        DbgLine dbgline = getSingleByteLine(value);
        m_dbglines[address] = dbgline;
        renderLineIfInView(address, dbgline);
    }

    private void renderLineIfInView(int address, DbgLine dbgline) {
        int page = address / PAGE_SIZE;
        if (page == m_atScrollP1 || page == m_atScrollP2) {
            renderLine(address, dbgline);
        }
    }

    // MemoryEventListener
    @Override
    public void onMemoryWrite(RealModeAddress address, byte value)
    {
        // don't rewrite lines if we're in the stage of putting warriors in memory
        if (m_memWriteState != EWriteState.RUN)
            return;
        int ipInsideArena = address.getLinearAddress() - 0x1000 *0x10; // arena * paragraph

        int page = ipInsideArena / PAGE_SIZE;
        if (page < 0 || page >= m_pages.length)
            return;

        m_pages[page].isDirty = true;

        DbgLine existing = m_dbglines[ipInsideArena];

        if (existing == m_fillCmd) {
            setByte(ipInsideArena, value);
            return;
        }
        else if (existing == null) {
            // find where this opcode starts
            --ipInsideArena;
            while (m_dbglines[ipInsideArena] == null)
                --ipInsideArena;
        }

        //RealModeMemoryImpl mem = m_competition.getCurrentWar().getMemory();
        do {
            // rewriting only a single opcode so its not possible to cross to a new opcode which will need reparsing
            setByte(ipInsideArena, m_mem[ipInsideArena + CODE_ARENA_OFFSET]);
            ++ipInsideArena;
        } while (m_dbglines[ipInsideArena] == null);
    }

    @Override
    public void onWriteState(EWriteState state) {
        m_memWriteState = state;
    }



    public static class LstLine {
        int lineNum = -1;
        int address = -1;
        String addressStr = "";
        String opcode = "";  // for display
        String fullOpcode = ""; // for knowing the real length
        String code = "";
        int opcodesCount = 0; // number of bytes in my opcode, without brackets and spaces
    }
    enum Field {
        START_SPACE,
        INDEX,
        SINGLE_SPACE_AFTER_INDEX,
        SPACE_BEFORE_CODE,
        ADDRESS,
        SPACE_AFTER_ADDRESS,
        OPCODE,
        WARNING,
        CODE,
        PARSE_ERR
    };

    public static final int FLAG_UNPARSED = 1;  // means this is a DbgLine of a value written by a warrior and not yet parsed by the disassembler
    public static final int FLAG_DEFINE_CODE = 2; // line that came from the user typed text that defines a number (db 123)
    public static final int FLAG_HAS_COMMENT = 4; // This DbgLine has comment lines after the first code line so when highlighting this line, need to highlight dfXXXXX instead of dXXXXX
    public static final int FLAG_BREAKPOINT = 8;

    public static class DbgLine {
        String text; // includes the command and any comment lines after it
        //byte[] binOpcode;
        int flags = 0;
    }
    private DbgLine[] m_dbglines;

    public static class PageInfo {
        boolean isDirty;
        int startAddr;
        int endAddr;
    }
    private PageInfo[] m_pages; // marks when a page of 500 addresses should be redrawn in the next required time
    private int m_atScrollP1 = -1, m_atScrollP2 = -1;
    private DbgLine[] m_singleByte = new DbgLine[256]; // hold lines with db XXh for memory write events

    private ArrayList<LstLine> m_currentListing;
    public PlayersPanel m_playersPanel = null;
    private Competition m_competition = null;
    private int PAGE_SIZE = _PAGE_SIZE();

    private static native int _PAGE_SIZE() /*-{
        return $wnd.PAGE_SIZE
    }-*/;

    public CodeEditor(Competition competition)
    {
        m_competition = competition;
        m_competition.addCompetitionEventListener(this);
        m_competition.addMemoryEventLister(this);

        asm_edit = (HTMLTextAreaElement)DomGlobal.document.getElementById("asm_edit");
        asm_show = (HTMLElement)DomGlobal.document.getElementById("asm_show");
        asm_output = (HTMLElement)DomGlobal.document.getElementById("asm_output");
        editor_bottom = (HTMLElement)DomGlobal.document.getElementById("editor_bottom");
        opcodes_edit = (HTMLElement)DomGlobal.document.getElementById("opcodes_edit");
        asm_linenums = (HTMLElement)DomGlobal.document.getElementById("asm_linenums");
        editor_title = (HTMLInputElement)DomGlobal.document.getElementById("editor_title");

        asm_edit.addEventListener("input", (event) -> {
            asm_edit_changed();
        });

        editor_title.addEventListener("input", (event) -> {
            m_playersPanel.updateTitle(editor_title.value);
        });

        m_dbglines = new DbgLine[War.ARENA_SIZE];

        m_pages = new PageInfo[ (War.ARENA_SIZE / PAGE_SIZE) + 1 ];
        for(int i = 0; i < m_pages.length; ++i) {
            PageInfo pi = new PageInfo();
            m_pages[i] = pi;
            pi.isDirty = true;
            pi.startAddr = i * PAGE_SIZE;
            pi.endAddr = Math.min( (i + 1) * PAGE_SIZE, War.ARENA_SIZE);
        }

        exportMethods();

    }

    public native void exportMethods() /*-{
        var that = this
        $wnd.j_renderIfDirty = $entry(function(i) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_renderIfDirty(I)(i) });
        $wnd.j_setScrollAt = $entry(function(i,j) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_setScrollAt(II)(i,j) });
    }-*/;

    private static native int run_nasm(String asmname, String text, String lstname)     /*-{
        $wnd.FS.writeFile(asmname, text, { encoding:'utf8' })
        $wnd.g_outputText = ''
        var ret_code = $wnd.run_nasm(asmname, lstname)
        return ret_code
    }-*/;
    private static native String read_file(String name) /*-{
        return $wnd.FS.readFile(name, { encoding: 'utf8' })
    }-*/;

    private static native Uint8ArrayNative read_file_bin(String name) /*-{
        return $wnd.FS.readFile(name, { encoding: 'binary' })
    }-*/;

    private static byte[] read_file_bin_arr(String name) {
        Uint8ArrayNative arr = read_file_bin(name);
        byte[] buf = new byte[arr.length()];
        for(int i = 0; i < arr.length(); ++i)
            buf[i] = (byte)arr.get(i);
        return buf;
    }

    private static native String get_stdout() /*-{
        return $wnd.g_outputText
    }-*/;

    private static final String SPACE_FOR_HEX = "&#x202f;";

    // hex field in the opcode can have all sorts of brackets and -. need to know how many just digits
    public int countDigits(String s) {
        boolean doingDigits = s.length() > 0 && isHexDigit(s.charAt(0)); // see below 'nesb 4'
        if (!doingDigits)
            return 0; // not supported yet
        int count = 0;
        for(int i = 0; i < s.length(); ++i) {
            char c = s.charAt(i);
            if (isHexDigit(c)) {
                ++count;
            }
        }
        return count;
    }

    public String spacedHex(String s)
    {
        // find how many spaces from the end should be trimmed
        // spaces appear at the end since we take everything in the code area of the lst
        int upto = s.length() - 1;
        for(; upto >= 0; --upto) {
            if (s.charAt(upto) != ' ')
                break;
        }
        StringBuilder bs = new StringBuilder();
        int digitCount = 0;
        boolean doingDigits = s.length() > 0 && isHexDigit(s.charAt(0)); // if it's not a hex number thing, don't do any spacing (resb 4)

        for(int i = 0; i <= upto; ++i) {
            char c = s.charAt(i);
            if (digitCount == 7*2) {
                // don't add more than 7 bytes of opcode to not overflow the field size
                bs.append(SPACE_FOR_HEX); // ellipsis
                break;
            }
            if (doingDigits && isHexDigit(c)) {
                if ((digitCount % 2) == 0 && digitCount > 0)
                    bs.append("&#x202f;"); // thin space
                ++digitCount;
            }
            else if (c == '<') {
                bs.append("&lt;");
                continue;
            }
            else if (c == '>') {
                bs.append("&gt;");
                continue;
            }
            bs.append(c);
        }
        return bs.toString();
    }

    private static boolean isDigit(char c) {
        return c >= '0' && c <= '9';
    }
    private static boolean isHexDigit(char c) {
        return (c >= '0' && c <= '9') || (c >= 'A' && c <= 'F'); // lst output only has upcase hex digits
    }

    // runs a state machine that parses the .lst files
    private boolean parseLst(String lsttext, StringBuilder opcodesText)
    {
        String[] lines = lsttext.split("\\n");
        m_currentListing = new ArrayList<LstLine>();

        int lineIndex = 1; // does not increment in warning lines that appear in the listing file
        LstLine prevLine = null;
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            Field state = Field.START_SPACE;
            LstLine l = new LstLine();

            int indexStart = 0, addressStart = 0, opcodeStart = 0;
            int charsBeforeCode = 0; // number of characters after the space after address and before the code. used fo not missing indentation
            for(int j = 0; j < line.length(); ++j)
            {
                char c = line.charAt(j);
                switch(state) {
                    case START_SPACE:
                        if (isDigit(c)) {
                            indexStart = j;
                            state = Field.INDEX;
                        }
                        else if (c != ' ')
                            state = Field.PARSE_ERR;
                        break;
                    case INDEX:
                        if (c == ' ') {
                            state = Field.SINGLE_SPACE_AFTER_INDEX;
                            l.lineNum = Integer.parseInt(line.substring(indexStart,j));
                            // check the line number only at the end in order to sip warnings
                        }
                        else if (!isDigit(c))
                            state = Field.PARSE_ERR;
                        break;
                    case SINGLE_SPACE_AFTER_INDEX:
                        if (c == ' ') {
                            state = Field.SPACE_BEFORE_CODE;
                            charsBeforeCode = -9; // account for not having an address
                        }
                        else if (isHexDigit(c)) {
                            addressStart = j;
                            state = Field.ADDRESS;
                        }
                        else
                            state = Field.PARSE_ERR;
                        break;
                    case ADDRESS:
                        if (c == ' ') {
                            state = Field.SPACE_AFTER_ADDRESS;
                            l.addressStr = line.substring(addressStart, j);
                            l.address = Integer.parseInt(l.addressStr, 16);
                        }
                        else if (!isHexDigit(c))
                            state = Field.PARSE_ERR;
                        break;
                    case SPACE_AFTER_ADDRESS:
                        //if (isHexDigit(c)) {
                        state = Field.OPCODE;
                        opcodeStart = j;
                        //}
                        //else
                        //    state = Field.PARSE_ERR;
                        break;
                    case OPCODE:
                        boolean islast = (j == line.length() - 1);
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (!islast && charsBeforeCode < 22)
                            ++charsBeforeCode; // take anything as long as its in the field size of the opcode. need this sinc resb adds spaces
                        else if (c == ' ' || islast) { // continueation lines of a string definition end in the middle of the opcode field.
                            //spacedHex(, l);
                            l.fullOpcode = line.substring(opcodeStart, j);
                            l.opcode = spacedHex(l.fullOpcode);
                            l.opcodesCount = countDigits(l.fullOpcode) / 2;
                            state = Field.SPACE_BEFORE_CODE;
                            ++charsBeforeCode;
                        }
                        else
                            ++charsBeforeCode;
                        break;
                    case SPACE_BEFORE_CODE:
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (c != ' ' || charsBeforeCode == 23) {
                            state = Field.CODE;
                            l.code = line.substring(j);
                        }
                        else
                            ++charsBeforeCode;
                        break;
                    case CODE:
                        break; // don't care about the code part, we already have that from the input
                    case PARSE_ERR:
                        Console.log("ERROR: parsing list file!\n" + lsttext);
                        return false;
                } // switch
                if (state == Field.WARNING)
                    break; // stop parsing line
            } // for j in line chars
            if (state == Field.WARNING)
                continue; // skip this line
            if (l.lineNum > lineIndex)
            {  // this can happen if there is a \ at the end of a line, extending it to the next line
               // so the next line doesn't exist in the line count, we need to just skit it in the output
                // this can happe for multiple consecutive lines
                while (l.lineNum != lineIndex) {
                    opcodesText.append("\n");
                    ++lineIndex;
                }
            }
            else if (prevLine != null && l.lineNum == prevLine.lineNum) {
                // it's a continuation line of the previous line. we need to concatenate to get the full opcode in order to know its size
                // happens with string definition db "abcdefgh"
                prevLine.fullOpcode += l.fullOpcode;
                prevLine.opcodesCount = countDigits(prevLine.fullOpcode) / 2;
                // no need to update the display opcode because its already too long
                continue;
            }
            else if (l.lineNum != lineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum) + " at " + Integer.toString(lineIndex));
                return false;
            }

            ++lineIndex;

            m_currentListing.add(l);
            opcodesText.append(l.opcode);
            opcodesText.append("\n");

            prevLine = l;
        }

        // if text doen't end with new line, delete the one added to opcodes
        //if (asmtext.charAt(asmtext.length() - 1) != '\n')
         //   opcodesText.deleteCharAt(opcodesText.length() - 1);

        return true;
    }


    private static native Element DocumentFragment_getElementById(DocumentFragment df, String id) /*-{
        return df.getElementById(id)
    }-*/;


    // given a line number (starting 0), give the offset in the input text the line ends
    // this is a member in order to avoid reallocating it every time
    // this is used for knowing how many lines there are and placing double click cursor
    private ArrayList<Integer> m_lineOffsets = null;

    // for each line, if there's an error 'e' or warning 'w' on it
    // referenced later when we add more warnings
    private char[] m_errLines = null;

    // returns the input asm text, with added formatting for error and warning lines
    private void parseStdout(String stdoutText, DocumentFragment asmElem, StringBuilder stdoutShorten)
    {
        String[] lines = stdoutText.split("\\n");
        // warning come before errors so we can't assume the line numbers are ascending
        // so we need to save all the line nums, sort and then go over from start to end of the text

     /*   int countAllNL = 1; // +1 for the last line with no \n
        for (int i = 0; i < asmText.length(); ++i) {
            if (asmText.charAt(i) == '\n')
                ++countAllNL;
        }*/
        int countAllNL = m_lineOffsets.size();

        // have a potential char for every line in the asm text. this way there's no need to sort
        // and there is only one entry per line, error trumps warning
        // used for determining the color of a line
        m_errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

        // go over stdout, find out which lines need marking
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            int firstColon = -1;
            int lineNum = -1; // this would be zero based
            char lineType = 0;
            // find first and second columns chars
            for(int j = 0 ; j < line.length(); ++j) {
                if (line.charAt(j) == ':') {
                    if (firstColon == -1)
                        firstColon = j;
                    else {
                        lineNum = Integer.parseInt(line.substring(firstColon + 1, j));
                        lineNum -= 1; // read numbers are 1 based
                        if (j + 2 < line.length()) { // sanity check on the line length
                            assert lineNum < countAllNL : "unexpected lineNum";
                            lineType = line.charAt(j + 2); // +2 for a space and then the first letter of 'error' or 'warning'
                            if (!(lineType == 'w' && m_errLines[lineNum] == 'e')) // not the case where an 'w' overwrites a 'e'
                                m_errLines[lineNum] = lineType;
                        }
                        break;
                    }
                }
            }
            if (lineNum == -1) {
                Console.log("Failed parsing error stdout");
                return;
            }

            stdoutShorten.append("<div class='stdout_line_" + lineType + "' ondblclick='asm_cursorToLine(" +
                                   Integer.toString(m_lineOffsets.get(lineNum)) +")'>");
            stdoutShorten.append(line.substring(firstColon + 1));
            stdoutShorten.append("</div>");
            //if (i < lines.length - 1)
            //    stdoutShorten.append('\n');
        }


        for(int lineNum = 0; lineNum < m_errLines.length; ++lineNum)
        {
            char ec = m_errLines[lineNum];
            if (ec == 0)
                continue;

            Element e = DocumentFragment_getElementById(asmElem, "mline_" + Integer.toString(lineNum+1));
            if (e == null)
                continue; // can happen with some strange case of dz... ? could not reproduce but it happened
            if (ec == 'e')
                e.classList.add("edit_error");
            else
                e.classList.add("edit_warning");

        }


    }

    static native int asm_edit_selectionStart() /*-{
        return $wnd.asm_edit.selectionStart
    }-*/;
    static native int asm_edit_selectionEnd() /*-{
        return $wnd.asm_edit.selectionEnd
    }-*/;
    static native int asm_edit_setSelection(int start, int end) /*-{
        $wnd.asm_edit.selectionStart = start
        $wnd.asm_edit.selectionEnd = end
    }-*/;





    private void setLineNumBreakpoint(int lineNum, boolean v) {
        Element e = DomGlobal.document.getElementById("ln" + Integer.toString(lineNum));
        if (v)
            e.classList.add("edit_breakpoint");
        else
            e.classList.remove("edit_breakpoint");
    }

    private void toggleBreakpointEdit(int atline, boolean addTextSentinel)
    {
        int atindex = atline - 1; // 0 base index
        if (atindex < 0 || atindex >= m_currentListing.size()) {
            Console.error("addBreakpointEdit invalid line " + Integer.toString(atline));
            return;
        }

       // LstLine line = m_currentListing.get(atindex);
        //line.hasBreakpoint = !line.hasBreakpoint;

        PlayersPanel.Breakpoint found = null;
        for(PlayersPanel.Breakpoint b: m_breakpoints)
            if (b.lineNum == atline) {
                found = b;
                break;
            }

        setLineNumBreakpoint(atline, found == null);
        if (found != null)
            m_breakpoints.remove(found);
        else
            m_breakpoints.add(new PlayersPanel.Breakpoint(atline));


    }


    private DocumentFragment makeLineNums(String intext)
    {
        DocumentFragment lndf = DomGlobal.document.createDocumentFragment();
        // make a new one each time since the old one is kept around for breakpoints line reference
        m_lineOffsets = new ArrayList<Integer>();

        EventListener clicker = new EventListener() {
            @Override
            public void handleEvent(Event event) {
                Element e = (Element)event.target;
                //Console.log(e.innerHTML);
                toggleBreakpointEdit( Integer.parseInt(e.innerHTML), true);
            }
        };

        int lineCount = 1;
        for (int i = 0; i <= intext.length(); ++i)
        {
            // need line number after with each new line and at the end
            if (i == intext.length() || intext.charAt(i) == '\n')
            {
                Element e = DomGlobal.document.createElement("div");
                e.addEventListener("click", clicker);
                e.setAttribute("id", "ln" + Integer.toString(lineCount));
                e.appendChild(DomGlobal.document.createTextNode(Integer.toString(lineCount)));
                lndf.appendChild(e);


                ++lineCount;
                m_lineOffsets.add(i);
            }
        }
        m_lineCount = lineCount - 1; // we started from 1

        return lndf;
    }



    private static native String innerText(HTMLElement elem) /*-{
        return elem.innerText
    }-*/;
    private static native void setInnerText(HTMLElement elem, String text)/*-{
        elem.innerText = text
    }-*/;

    private boolean entered = false;

    private void asm_edit_changed()
    {
        if (entered)
            return;
        entered = true;

        int prevLineCount = m_lineCount; // next line is going to change this
        ArrayList<Integer> prevLiveOffsets = m_lineOffsets;

        String intext = asm_edit.value;
        setText(intext, m_playersPanel);
        // update breakpoints only if there was an editing change (and not when switching displayed code)
        updateBreakpoints(prevLiveOffsets, prevLineCount);
        m_playersPanel.updateText(intext); // tell the players database that this player has a new text

        entered = false;
    }

    // return new lines the same number as the input text
    private String linesAsInput(String text)
    {
        StringBuilder opcodesText = new StringBuilder();
        for(int i = 0; i < text.length(); ++i)
        {
            char c = text.charAt(i);
            if (c == '\n')
                opcodesText.append("<br>");
        }
        return opcodesText.toString();
    }

    // from PlayersPanel
    public void playerSelectionChanged(PlayersPanel.Code incode, PlayersPanel callback)
    {
        asm_edit.value = incode.asmText;
        editor_title.value = incode.player.title;
        setText(incode.asmText, callback);

        // remove prev code breakpoints, add breakpoints of current one
        // set them in the editor even if we're in debug mode
        if (m_breakpoints != null) // will be null on the first time
            for(PlayersPanel.Breakpoint b: m_breakpoints)
                setLineNumBreakpoint(b.lineNum, false);
        m_breakpoints = incode.breakpoints;
        for(PlayersPanel.Breakpoint b: m_breakpoints)
            setLineNumBreakpoint(b.lineNum, true);

        if (m_isDebugMode) {
            updateDebugLine();
            scrollToCodeInEditor(false);
        }
    }

    private DocumentFragment htmlizeText(String intext)
    {
        DocumentFragment df = DomGlobal.document.createDocumentFragment();
        int lastFound = -1;
        int found = intext.indexOf('\n', 0);
        int lineNum = 1;
        while (found != -1) {
            if (found != lastFound + 1) { // not an empty line
                Element e = DomGlobal.document.createElement("span");
                e.setAttribute("id", "mline_" + Integer.toString(lineNum));
                String ss = intext.substring(lastFound + 1, found + 1);  // +1 to include the NL that is there
                Text t = DomGlobal.document.createTextNode(ss);
                e.appendChild(t);
                df.appendChild(e);
            }
            else {
                Text t = DomGlobal.document.createTextNode("\n");
                df.appendChild(t);
            }
            lastFound = found;
            found = intext.indexOf('\n', found+1);
            ++lineNum;
        }

        // take care of the last line that might not end with NL
        if (lastFound != intext.length() - 1)  // if it does end with NL, don't bother with the last empty line
        {
            Element e = DomGlobal.document.createElement("span");
            e.setAttribute("id", "mline_" + Integer.toString(lineNum));
            String ss = intext.substring(lastFound + 1);
            Text t = DomGlobal.document.createTextNode(ss);
            e.appendChild(t);
            df.appendChild(e);
        }
        return df;
    }


    private static native int saved_selectionStart() /*-{
        return $wnd.saved_selectionStart
    }-*/;
    private static native int saved_selectionEnd() /*-{
        return $wnd.saved_selectionEnd
    }-*/;
    private static native String saved_keydown() /*-{
        return $wnd.saved_keydown
    }-*/;


    //a
    //b
    //c

    // used for dececting if lines were added or removed
    int m_lineCount = 0;

    private void updateBreakpoints(ArrayList<Integer> prevLineOffsets, int prevLineCount)
    {
        if (m_breakpoints == null || m_breakpoints.size() == 0)
            return;
        int selStart = saved_selectionStart();
        int selEnd = saved_selectionEnd();
        String keydown = saved_keydown();

        // for every breakpoint decide if it should be moved or deleted
        ListIterator<PlayersPanel.Breakpoint> it = m_breakpoints.listIterator();
        while(it.hasNext())
        {
            PlayersPanel.Breakpoint br = it.next();
            int lineStartIndex = 0; // the case for lineNum==1
            assert br.lineNum > 0: "unexpected breakpoint line number";
            if (br.lineNum != 1) // -1 to make it 0 based, -1 because we want where the previous line ends, +1 to move past the NL
                lineStartIndex = prevLineOffsets.get(br.lineNum - 1 - 1) + 1;

            int lineNLIndex = prevLineOffsets.get(br.lineNum - 1); // -1 make it 0 based

            if (selStart != selEnd && (selStart < lineStartIndex && selEnd > lineStartIndex  // removed the before the start of the line, including the start
                                   ||  selStart >= lineStartIndex && selEnd > lineNLIndex ))  // removed from the middle of the line, passed the end of it
            { // removing the whole line
                // no need to remove markers because we just made a new line numbers column
                it.remove();
                continue;
            }

            // if it's not the above case, we don't care about anything that doesn't change the line count
            if  (prevLineCount != m_lineCount)
            {
                // if we backspaced on a breakpoint,  need to remove it
                // need to happen in normal caret, no selection and the backspace on the line of the breakpoint
                if (selStart == selEnd && selStart == lineStartIndex && keydown == "Backspace") {
                    it.remove();
                    continue;
                }
                // if we removed lines before this breakpoint line, move it up
                if (selStart <= lineStartIndex && selEnd <= lineStartIndex) {
                    br.lineNum += m_lineCount - prevLineCount;
                    setLineNumBreakpoint(br.lineNum, true);
                }
            }

            setLineNumBreakpoint(br.lineNum, true);

        }
    }


    // inspired by https://github.com/kazzkiq/CodeFlask.js#usage which also writes all the dome in every key press
    public void setText(String intext, PlayersPanel playersPanel)
    {
        if (intext.isEmpty()) {
            asm_output.innerHTML = "";
            opcodes_edit.innerHTML = "";
            asm_show.innerHTML = "";
            asm_linenums.innerHTML = "1";
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null, null);
            //Console.log("~Empty input");
            return;
        }


        intext = intext.replace('\u00A0', ' ') // no-break-space coming from html
                       .replace("&", "&amp;")  // other stuff coming from textarea we don't want to pass to html
                       .replace("<", "&lt;")
                       .replace(">", "&gt;");
                // we want the markes to appear in the html for debugging but not in the nasm input
        String nasm_intext = intext;
        // assemble
        int retcode = run_nasm("player.asm", nasm_intext, "player.lst");
        String stdout = get_stdout();


        // this updates m_lineOffsets and m_lineCount
        DocumentFragment lineNumDf = makeLineNums(intext);
        asm_linenums.innerHTML = "";
        asm_linenums.appendChild(lineNumDf);


        DocumentFragment df = null;
        if (!stdout.isEmpty())
        {   // add coloring to the text
            StringBuilder stdoutShorten = new StringBuilder(); // removes the file name from the start of the lines

            df = htmlizeText(intext);
            parseStdout(stdout, df, stdoutShorten);

            asm_show.innerHTML = "";
            asm_show.appendChild(df);

            asm_output.innerHTML = stdoutShorten.toString();
        }
        else {
            asm_show.innerHTML = intext; // clear all line marking
            setInnerText(asm_output, "");

            m_errLines = null;
        }


        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            opcodes_edit.innerHTML = linesAsInput(intext); // this is needed because x-scroll hiding relies on the opcode pane to be full
            Console.error("~Assembler error");
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, null, null);
            //setBreakpoints(textBreakpoints); // there isn't going to be a new listing, make the breakpoints marking now
            return;
        }

        String output = read_file("player.lst");
        if (output.isEmpty()) {
            m_currentListing.clear();
            opcodes_edit.innerHTML = linesAsInput(intext);;
            Console.log("~Empty output");
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null, null);
            return;
        }

        StringBuilder opcodesText = new StringBuilder();
        boolean ok = parseLst(output, opcodesText);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.error("listing parsing error"); // should not happen
            m_playersPanel.updateAsmResult(false, null, null);
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();
        //Console.log("~OK");



        byte[] buf = read_file_bin_arr("player");
        if (buf.length > WarriorRepository.MAX_WARRIOR_SIZE) {
            Console.error("Code is longer than the maximum allowed " + Integer.toString(WarriorRepository.MAX_WARRIOR_SIZE) + " bytes");
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, buf, null);
            return;
        }

        df = checkDisasmLines(buf, m_currentListing, df, intext);


        if (playersPanel != null)
            playersPanel.updateAsmResult(true, buf, m_currentListing);

    }

    private boolean isDefineCode(String code) {
        int start = -1, end = -1;
        for(int i = 0; i < code.length(); ++i) {
            char c = code.charAt(i);
            if (start == -1) {
                if (c > 32) // what about entering nbsp from keyboard? (persian?)
                    start = i;
            }
            else {
                if (c <= 32) {
                    end = i;
                    break;
                }
            }
        }
        if (start == -1 || end == -1)
            return false; // didn't find the command it may be an argument less command
        String cmd = code.substring(start, end).toLowerCase();
        char s = 0;
        if (cmd.length() == 2 && cmd.charAt(0) == 'd')
            s = cmd.charAt(1);
        if (cmd.length() == 4 && cmd.charAt(0) == 'r' && cmd.charAt(1) == 'e' && cmd.charAt(2) == 's')
            s = cmd.charAt(3);

        if (s == 'b' || s == 'w' || s == 'd' || s == 'q' || s == 't' || s == 'o' || s == 'y' || s == 'z')
            return true;

        return false;
    }

    // check opcodes that are emitten are supported by codewars8086 and issue warnings if not
    private DocumentFragment checkDisasmLines(byte[] binbuf, ArrayList<LstLine> listing, DocumentFragment asmElem, String intext)
    {
        int ptr = 0;
        Disassembler dis = new Disassembler(binbuf, 0, binbuf.length);
        int atLstLine = 0;

        while(ptr < binbuf.length)
        {
            String msg = null;
            LstLine lstline = null;

            try {
                while (atLstLine < listing.size() && listing.get(atLstLine).opcodesCount == 0) // skip comment lines
                    ++atLstLine;
                if (atLstLine == listing.size()) {
                    Console.error("unexpected reached end of listing " + Integer.toString(atLstLine+1));
                    break;
                }
                lstline = listing.get(atLstLine);

                if (isDefineCode(lstline.code)) {  // don't want to check disassembled opcodes on lines that just define data
                    dis.skipBytes(lstline.opcodesCount);
                }
                else {
                    String asm = dis.nextOpcode();
                    int len = dis.lastOpcodeSize();

                    if (len != lstline.opcodesCount) {
                        Console.error("disassembled wrong number of bytes " + Integer.toString(atLstLine+1));
                        break;
                    }
                }

            }
            catch(Disassembler.DisassemblerLengthException e) {
                msg = Integer.toString(atLstLine+1) + ": not enough bytes to parse"; // can happen if we db 09h for example, or just 'rep'
                //break;
            }
            catch(Disassembler.DisassemblerException e) {
                msg = Integer.toString(atLstLine+1) + ": Although this is a legal x86 opcode, codewars8086 does not support it";
                int eptr = dis.getPointer() - 1;
                if (eptr >= 0 && eptr < binbuf.length)
                    msg += ", opcode = 0x" + Format.hex2(binbuf[eptr] & 0xff);
                //break; // no way to recover
            }
            catch(RuntimeException e) {
                Console.error("failed parsing binbuf RuntimeException"); // this should not happen. only happens for missing cases
                break; // no way to recover, we don't know the size of the opcode
            }

            if (msg != null)
            {
                //Console.error(msg);
                // if m_errLines is null it means there are no errors or warnings so we're good
                if (m_errLines == null || atLstLine < m_errLines.length && m_errLines[atLstLine] == 0) // it exists and there isn't an something already there
                {
                    if (asmElem == null) {
                        asmElem = htmlizeText(intext);
                        asm_show.innerHTML = "";
                        asm_show.appendChild(asmElem); // this is somewhat replicated code from above that there's no easy way to avoid it
                    }
                    Element e = DomGlobal.document.getElementById("mline_" + Integer.toString(atLstLine+1));
                    if (e == null) {
                        Console.error("did not find line?");
                        return asmElem;
                    }
                    e.classList.add("edit_warning");

                    Element omsgdiv = DomGlobal.document.createElement("div");
                    omsgdiv.classList.add("stdout_line_w");

                    if (atLstLine < m_lineOffsets.size()) {
                        omsgdiv.setAttribute("ondblclick","asm_cursorToLine(" + Integer.toString(m_lineOffsets.get(atLstLine)) + ")");
                    }
                    Text omsgtxt = DomGlobal.document.createTextNode(msg);
                    omsgdiv.appendChild(omsgtxt);

                    asm_output.appendChild(omsgdiv);
                }

            }

            ++atLstLine;
            ptr += lstline.opcodesCount;
            dis.setPointer(ptr);

        }



        return asmElem;
    }


    // defer if we're inside setDebugMode
    private static native void scrollToAddr(int addr, boolean defer) /*-{
        if (defer)
            $wnd.deferredEditorToAddress = addr
        else {
            $wnd.scrollToAddr(addr)
        }
    }-*/;

    private static native double getTime() /*-{
        return Date.now()
    }-*/;

    public void setTitle(String s) {
        editor_title.value = s;
    }

    DbgLine m_fillCmd;

    private void initDebugAreaLines()
    {
        War war = m_competition.getCurrentWar();

        //double _start = getTime();

        if (m_fillCmd == null) {
            m_fillCmd = new DbgLine();
            m_fillCmd.text = "<span class='dbg_backfill'><span class='dbg_opcodes'>CC</span>int 3</span>";;
            //m_fillCmd.binOpcode = new byte[1];
            //m_fillCmd.binOpcode[0] = War.ARENA_BYTE;
        }

        for(int addr = 0; addr < War.ARENA_SIZE; ++addr) {
            m_dbglines[addr] = m_fillCmd;
        }
        for(PageInfo p: m_pages)
            p.isDirty = true;

        //double _setup = getTime();
        //Console.log("cc-setup " + Double.toString(_setup - _start));


        //int inEditorAddr = -1;
        for(int i = 0; i < war.getNumWarriors(); ++i)
        {
            Warrior w = war.getWarrior(i);
            int playerLoadOffset = w.getLoadOffsetInt();

            PlayersPanel.Code code = m_playersPanel.findCode(w.getLabel());

            DbgLine last_dbgline = null;
            int last_address = 0;

            if (code.lines.get(0).address == -1) { // comment or label on the first line, need to belong to the address before first
                int befFirst = playerLoadOffset - 1;
                if (m_dbglines[befFirst] != null) {
                    last_dbgline = m_dbglines[befFirst];
                    if (last_dbgline == m_fillCmd) { // it's the shared DbgLine from above, make a copy of it since we don't want to change it
                        DbgLine copy = new DbgLine();
                        copy.text = last_dbgline.text;
                        //copy.binOpcode = last_dbgline.binOpcode;
                        last_dbgline = copy;
                        m_dbglines[befFirst] = last_dbgline;
                    }
                }
                else {
                    last_dbgline = new DbgLine();
                    last_dbgline.text = "";
                    m_dbglines[befFirst] = last_dbgline;
                }
                last_address = befFirst;
            }

            for(LstLine lstline : code.lines)
            {
                if (lstline.address == -1) {
                    assert last_dbgline != null: "Unexpected blank prev line";
                    last_dbgline.flags |= FLAG_HAS_COMMENT;
                    //last_dbgline.text = "<div id='df" + Integer.toString(last_address) + "'>" + last_dbgline.text + "</div>";
                    last_dbgline.text += "</div><div class='dbg_comment_line'>      <span class='dbg_opcodes'></span>" + lstline.code + "</div>";
                }
                else {
                    int loadAddr = lstline.address + playerLoadOffset;
                    DbgLine dbgline = new DbgLine();
                    String opcode = lstline.opcode;

                    dbgline.text = "<span class='dbg_opcodes'>" + opcode + "</span>" + lstline.code;
                    if (isDefineCode(lstline.code))
                        dbgline.flags = FLAG_DEFINE_CODE;

                    /*dbgline.binOpcode = new byte[lstline.opcodesCount];
                    assert lstline.address + lstline.opcodesCount <= code.bin.length: "too many opcodes for the program length?";
                    // copy the binary of this line to dbgline for later comparison when stepping
                    for(int j = 0; j < lstline.opcodesCount; ++j) {
                        dbgline.binOpcode[j] = code.bin[lstline.address + j];
                    }*/
                    m_dbglines[loadAddr] = dbgline;

                    last_dbgline = dbgline;

                    for(int j = 1; j < lstline.opcodesCount; ++j) {
                        m_dbglines[loadAddr + j] = null;
                    }
                }

            }
        }


    }

    public void j_setScrollAt(int p1, int p2) {
        //Console.log("~~~~1 bf96 " + m_dbglines[0xbf96].text);
        //Console.log("~~~~1 9f14 " + m_dbglines[0x9f14].text);
        j_renderIfDirty(p1);
        j_renderIfDirty(p2);

        m_atScrollP1 = p1;
        m_atScrollP2 = p2;

        //Console.log("~~~~2 bf96 " + m_dbglines[0xbf96].text);
        //Console.log("~~~~2 9f14 " + m_dbglines[0x9f14].text);
    }

    // dbgline should already be in m_dgblines
    public void renderLine(int addr, DbgLine dbgline) {
        String addrstr = Integer.toString(addr);
        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + addrstr);
        if (dbgline == null) {
            dline.style.display = "none";
            return;
        }

        if ((dbgline.flags & FLAG_HAS_COMMENT) != 0) // this div tag is closed inside dbgline.text before the comment starts
            dline.innerHTML = "<div id='df" + addrstr + "'>" + Format.hex4(addr) + "  " + dbgline.text;
        else
            dline.innerHTML = Format.hex4(addr) + "  " + dbgline.text;
        dline.removeAttribute("style");
    }

    // from javascript scroll of debug area
    public void j_renderIfDirty(int pagenum)
    {
        if (pagenum == -1)
            return;
        PageInfo page = m_pages[pagenum];
        if (!page.isDirty)
             return;
        for(int addr = page.startAddr; addr < page.endAddr; ++addr)
        {
            DbgLine dbgline = m_dbglines[addr];
            renderLine(addr, dbgline);
        }
        page.isDirty = false;
    }

    private int m_lastDbgAddr = -1;
    private HTMLElement m_lastDbgElement;

    private int getCurrentWarriorIp() {
        War war = m_competition.getCurrentWar();
        if (war == null)
            return -1;
        String label = m_playersPanel.getCodeInEditor().getLabel();
        CpuState state = war.getWarriorByLabel(label).getCpuState();

        short ip = state.getIP();
        short cs = state.getCS();

        int ipInsideArena = new RealModeAddress(cs, ip).getLinearAddress() - 0x10000;
        return ipInsideArena;
    }

    private void setByteFromMem(int addrInArea) {
        int value = m_mem[addrInArea + CODE_ARENA_OFFSET];
        setByte(addrInArea, (byte)(value & 0xff) );
    }

    public void updateDebugLine() {
        int ipInsideArena = getCurrentWarriorIp();
        if (ipInsideArena == -1)
            return;

        if (ipInsideArena == m_lastDbgAddr)
            return;
        if (m_lastDbgElement != null)
            m_lastDbgElement.classList.remove("current_dbg");

        // the first call to this is before debugMode is started to set the first debug line.
        // in this case we don't want to disassemble since the dbglines have not even been inited yet. sort of a hack.
        if (m_dbglines[ipInsideArena] == null)
        {
            // got to a null line, means this address is hidden and is part of a preceding opcode, first find that
            int opcodeAddr = ipInsideArena;
            while (m_dbglines[opcodeAddr] == null)
                --opcodeAddr;
            // fill the size of this opcode with db lines,
            // do this before disassembly of the IP line to make sure we've erased the old opcode correctly
            //byte[] mem = m_competition.getCurrentWar().getMemory().m_data;
            do {
                setByteFromMem(opcodeAddr);
                ++opcodeAddr;
            } while (m_dbglines[opcodeAddr] == null);
            // disassemble may eat at any of the db's after it, and might also each opcode after that
            disassembleAddr(ipInsideArena + CODE_ARENA_OFFSET, ipInsideArena);
        }
        else {
            DbgLine ipline = m_dbglines[ipInsideArena];
            int flags = m_dbglines[ipInsideArena].flags;
            if ((flags & FLAG_UNPARSED) != 0 || (flags & FLAG_DEFINE_CODE) != 0 ) {
                disassembleAddr(ipInsideArena + CODE_ARENA_OFFSET, ipInsideArena);
            }
        }

        String ider = "d";
        if ( (m_dbglines[ipInsideArena].flags & FLAG_HAS_COMMENT) != 0)
            ider = "df"; // a line with a comment after, don't highlight the entire line, just the first line. df is assured to exist if we have this flag

        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById(ider + Integer.toString(ipInsideArena));
        dline.classList.add("current_dbg");
        m_lastDbgElement = dline;
        m_lastDbgAddr = ipInsideArena;
    }

    private void disassembleAddr(int absaddr, int addrInArea)
    {
        byte[] mem = m_competition.getCurrentWar().getMemory().m_data;
        Disassembler dis = new Disassembler(mem, absaddr, mem.length);
        String text;
        try {
            text = dis.nextOpcode();
        }
        catch(Disassembler.DisassemblerException e) {
            return;
        }
        eraseOpcode(addrInArea); // for example replacing at the start of a long db "ABC"
        int len = dis.lastOpcodeSize();

        DbgLine opline = new DbgLine();
        StringBuilder bs = new StringBuilder();
        for(int i = 0; i < len; ++i) {
            bs.append( Format.hex2(mem[absaddr + i] & 0xff));
            bs.append(SPACE_FOR_HEX);
        }

        opline.text = "<span class='dbg_opcodes'>" + bs.toString() + "</span>" + text;
        m_dbglines[addrInArea] = opline;
        renderLineIfInView(addrInArea, opline);
        for(int i = 1; i < len; ++i) {
            // remove the lines of the bytes after it
            // don't know what opcodes I'm writing so need to make sure it remains consistant
            eraseOpcode(addrInArea + i);
            // this erases one line and possible adds db in the lines after it, this is simple good although it can write several times in the same place
        }
    }

    // erase the opcode in addr, and take care to setByte the bytes after it that are affected
    private void eraseOpcode(int addrInArea) {
        m_dbglines[addrInArea] = null;
        renderLineIfInView(addrInArea, null);
        ++addrInArea;
        while(m_dbglines[addrInArea] == null) {
            setByteFromMem(addrInArea);
            ++addrInArea;
        }
    }


    public void scrollToCodeInEditor(boolean defer) {
        int ipInsideArena = getCurrentWarriorIp();
        if (ipInsideArena == -1) // not in competition
            return;

        scrollToAddr(ipInsideArena, defer);

    }

    // scroll triggers request for update of range of addresses
    //  for each line,

    //    check if core content matches line content



    public void setDebugMode(boolean v) {
        if (v) {
            editor_bottom.style.display = "none";
            asm_edit.style.display= "none"; // just the textarea
            editor_title.readOnly = true;

            initDebugAreaLines();
            scrollToCodeInEditor(true); // defer scrolling since we want to do this only after all sizes are correct and everything shown
        }
        else {
            editor_bottom.style.display = "";
            asm_edit.style.display = "";
            editor_title.readOnly = false;
        }
        m_isDebugMode = v;

    }

}