package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Disassembler;
import il.co.codeguru.corewars8086.war.*;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Vector;

public class CodeEditor implements CompetitionEventListener, MemoryEventListener
{
    private HTMLElement asm_output, opcodes_edit, asm_linenums, asm_show, debug_area;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;
    private boolean m_isDebugMode = false;
    private MemoryEventListener.EWriteState m_memWriteState = MemoryEventListener.EWriteState.INIT;

    // competitionEventListener
    @Override
    public void onWarStart() {}
    @Override
    public void onWarEnd(int reason, String winners) {}
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
            //byteline.binOpcode = new byte[1];
            //byteline.binOpcode[0] = War.ARENA_BYTE;
        }
        m_singleByte[val] = byteline;
        return byteline;
    }

    private void setByte(int address, byte value) {
        DbgLine dbgline = getSingleByteLine(value);
        m_dbglines[address] = dbgline;
        int page = address / PAGE_SIZE;
        if (page == m_atScrollP1 || page == m_atScrollP1) {
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

        int linearAddress = address.getLinearAddress();
        RealModeMemoryImpl mem = m_competition.getCurrentWar().getMemory();
        do {
            setByte(ipInsideArena, mem.readByte(linearAddress));
            ++ipInsideArena;
            ++linearAddress;
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
        String opcode = "";
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


    public static class DbgLine {
        String text; // includes the command and any comment lines after it
        //byte[] binOpcode;
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

    public void spacedHex(String s, LstLine lstline) {
        StringBuilder bs = new StringBuilder();
        int digitCount = 0;
        boolean doingDigits = s.length() > 0 && isHexDigit(s.charAt(0)); // if it's not a hex number thing, don't do any spacing (resb 4)
        for(int i = 0; i < s.length(); ++i) {
            char c = s.charAt(i);
            if (digitCount == 7*2) {
                // don't add more than 7 bytes of opcode to not overflow the field size
                bs.append("&#x2026;"); // ellipsis
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
        lstline.opcode = bs.toString();
        lstline.opcodesCount = digitCount / 2;
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
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (charsBeforeCode < 22)
                            ++charsBeforeCode; // take anything as long as its in the field size of the opcode. need this sinc resb adds spaces
                        else if (c == ' ') {
                            spacedHex(line.substring(opcodeStart, j), l);
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
                        break;
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
                // it's a continuation line of the previous line. ignore it and do nothing with the opcode
                // at this point the opcode would be too long to be displayed in the opcodes display so we don't need to bother concatenating it there
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
    private ArrayList<Integer> m_lineOffsets = new ArrayList<Integer>();

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
            if (ec == 'e')
                e.classList.add("edit_error");
            else
                e.classList.add("edit_warning");

        }


    }


    private void makeLineNums(String intext, StringBuilder lineNumText)
    {
        m_lineOffsets.clear();

        int lineCount = 1;
        for (int i = 0; i < intext.length(); ++i) {
            if (intext.charAt(i) == '\n') {
                lineNumText.append(lineCount);
                lineNumText.append("\n");
                ++lineCount;
                m_lineOffsets.add(i);
            }
        }
        m_lineOffsets.add(intext.length());  // last line needs the cursor after the last character

        lineNumText.append(lineCount);
        lineNumText.append("\n");
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

        String intext = asm_edit.value;
        setText(intext, m_playersPanel);
        m_playersPanel.updateText(intext);

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
        // assemble
        int retcode = run_nasm("player.asm", intext, "player.lst");
        String stdout = get_stdout();


        StringBuilder lineNumText = new StringBuilder();
        makeLineNums(intext, lineNumText);
        asm_linenums.innerHTML = lineNumText.toString();

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

        byte[] buf = read_file_bin_arr("player"); // TBD check max size
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

                msg = Integer.toString(atLstLine+1) + ": Although this is a legal x86 opcode, codewars8086 does not support it line ";
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
            }

            for(LstLine lstline : code.lines)
            {
                if (lstline.address == -1) {
                    assert last_dbgline != null: "Unexpected blank prev line";
                    last_dbgline.text += "<div class='dbg_comment_line'>      <span class='dbg_opcodes'></span>" + lstline.code + "</div>";
                }
                else {
                    int loadAddr = lstline.address + playerLoadOffset;
                    DbgLine dbgline = new DbgLine();
                    String opcode = lstline.opcode;

                    dbgline.text = "<span class='dbg_opcodes'>" + opcode + "</span>" + lstline.code;

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
        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(addr));
        if (dbgline == null) {
            dline.style.display = "none";
            return;
        }

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

    public void updateDebugLine() {
        int ipInsideArena = getCurrentWarriorIp();
        if (ipInsideArena == -1)
            return;

        if (ipInsideArena == m_lastDbgAddr)
            return;
        if (m_lastDbgElement != null)
            m_lastDbgElement.classList.remove("current_dbg");

        if (m_dbglines[ipInsideArena] == null) {

        }

        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(ipInsideArena));
        dline.classList.add("current_dbg");
        m_lastDbgElement = dline;
        m_lastDbgAddr = ipInsideArena;
    }


    public void scrollToCodeInEditor(boolean defer) {
        int ipInsideArena = getCurrentWarriorIp();
        if (ipInsideArena == -1)
            return;

        scrollToAddr(ipInsideArena, defer);

    }

    // scroll triggers request for update of range of addresses
    //  for each line,

    //    check if core content matches line content



    public void setDebugMode(boolean v) {
        if (v) {
            asm_output.style.display = "none";
            asm_edit.style.display= "none"; // just the textarea
            editor_title.readOnly = true;

            initDebugAreaLines();
            scrollToCodeInEditor(true); // defer scrolling since we want to do this only after all sizes are correct and everything shown
        }
        else {
            asm_output.style.display = "";
            asm_edit.style.display = "";
            editor_title.readOnly = false;
        }
        m_isDebugMode = v;

    }

}