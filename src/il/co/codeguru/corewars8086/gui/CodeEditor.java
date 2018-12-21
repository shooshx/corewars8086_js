package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import elemental2.dom.EventListener;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.gui.asm_parsers.GasListParser;
import il.co.codeguru.corewars8086.gui.asm_parsers.IListParser;
import il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser;
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
import il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils;


import java.util.*;

public class CodeEditor implements CompetitionEventListener, MemoryEventListener, IBreakpointCheck
{
    private HTMLElement asm_output, opcodes_edit, asm_linenums, asm_show, debug_area, editor_bottom;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;

    private boolean m_isDebugMode = false;
    private MemoryEventListener.EWriteState m_memWriteState = MemoryEventListener.EWriteState.INIT;
    private ArrayList<PlayersPanel.Breakpoint> m_breakpoints = null;

    public static final int CODE_ARENA_OFFSET = 0x10000;

    private RealModeMemoryImpl m_mem = null;
    // competitionEventListener
    @Override
    public void onWarPreStartClear() {}
    @Override
    public void onWarStart() {
        m_mem = m_competition.getCurrentWar().getMemory();

    }
    @Override
    public void onWarEnd(int reason, String winners, boolean inDebug) {
        //m_mem = null;
    }
    @Override
    public void onRound(int round) {}
    @Override
    public void onWarriorBirth(Warrior w) {}
    @Override
    public void onWarriorDeath(Warrior warrior, String reason) {

    }
    @Override
    public void onCompetitionStart() {}
    @Override
    public void onCompetitionEnd() {}
    @Override
    public void onPaused() {}
    @Override
    public void onNoneAlive() {}
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
        int absAddr = address.getLinearAddress();
        if (absAddr < War.ARENA_SEGMENT*RealModeAddress.PARAGRAPH_SIZE || absAddr >= War.ARENA_SEGMENT*RealModeAddress.PARAGRAPH_SIZE + War.ARENA_SIZE)
            return;
        int ipInsideArena = absAddr - 0x1000 *0x10; // arena * paragraph
        final int cIpInsideArea = ipInsideArena;

        int page = ipInsideArena / PAGE_SIZE;
        if (page < 0 || page >= m_pages.length)
            return;

        m_pages[page].isDirty = true;

        DbgLine existing = m_dbglines[ipInsideArena];

        if (existing == m_fillCmd) {
            setByte(ipInsideArena, value);
        }
        else  {
            // find where this opcode starts
            while (m_dbglines[ipInsideArena] == null)
                --ipInsideArena;

            do {
                // rewriting only a single opcode so its not possible to cross to a new opcode which will need reparsing
                setByte(ipInsideArena, m_mem.readByte(ipInsideArena + CODE_ARENA_OFFSET));
                ++ipInsideArena;
            } while (ipInsideArena < 0x10000 && m_dbglines[ipInsideArena] == null);
        }

        // if we just edited the byte under the debugger, need to reparse it
        if (cIpInsideArea >= m_lastDbgAddr && cIpInsideArea < m_lastDbgAddrEnd) {
            m_lastDbgAddr = -1; // make it go inside the next function
            updateDebugLine();
        }


    }

    @Override
    public void onWriteState(EWriteState state) {
        m_memWriteState = state;
    }



    public static class LstLine {
        public int lineNum = -1;
        public int address = -1;
        public String addressStr = "";
        public String opcode = "";  // for display
        public String fullOpcode = ""; // for knowing the real length
        public String code = "";
        public int opcodesCount = 0; // number of bytes in my opcode, without brackets and spaces
        public PlayersPanel.Breakpoint tmp_br = null; // used when initializing debug view (doesn't hold info when editing)
    }


    public static final int FLAG_UNPARSED = 1;  // means this is a DbgLine of a value written by a warrior and not yet parsed by the disassembler
    public static final int FLAG_DEFINE_CODE = 2; // line that came from the user typed text that defines a number (db 123)
    public static final int FLAG_HAS_COMMENT = 4; // This DbgLine has comment lines after the first code line so when highlighting this line, need to highlight dfXXXXX instead of dXXXXX

    public static final int FLAG_LSTLINE_MAX = 0x7ff;
    public static final int FLAG_LSTLINE_SHIFT = 16;
    public static final int FLAG_LSTLINE = 0x07ff0000; // 5 - upper 12 bits of the flat is a 1-based line number of the LstLine that created this DbgLine or 0 if there isn't one
    public static final int FLAG_PLAYER_NUM_SHIFT = 27;
    public static final int FLAG_PLAYER_NUM = 0xf8000000; // upper 5 bits is the player number, valid only if there is a non-zero LstLine

    // one such object can appear in multiple addresses for instance the comment int3 line
    public static class DbgLine {
        String text; // includes the command and any comment lines after it
        //byte[] binOpcode;
        int flags = 0;
    }
    private DbgLine[] m_dbglines;  // for every address, the line of display in the debugger panel or null if line is not displayed
    private PlayersPanel.Breakpoint[] m_dbgBreakpoints; // for every address, reference to a Breakpoint object if one exists
                                                        // this is initialized a new every debug session

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
    private IListParser m_listParser;

    // scrol hiding page
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


        //setPlatform("8086");
        //setPlatform("riscv"); // called from CompetitionWindow

    }


    public native void exportMethods() /*-{
        var that = this
        $wnd.j_renderIfDirty = $entry(function(i) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_renderIfDirty(I)(i) });
        $wnd.j_setScrollAt = $entry(function(i,j) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_setScrollAt(II)(i,j) });
        $wnd.j_asm_edit_changed = $entry(function() { that.@il.co.codeguru.corewars8086.gui.CodeEditor::asm_edit_changed()() });
    }-*/;

    private static native int run_assembler(String asmname, String text, String lstname)     /*-{
        $wnd.FS.writeFile(asmname, text, { encoding:'utf8' })
        $wnd.g_outputText = ''
        $wnd.reinitMem()
        var ret_code = $wnd.run_assembler(asmname, lstname)
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


    private static native String js_setPlatform(String plat) /*-{
        if (plat == "8086") {
            $wnd.run_assembler = $wnd.run_nasm
        }
        else if (plat == "riscv") {
            $wnd.run_assembler = $wnd.run_gas
        }
    }-*/;

    public void setPlatform(String plat) {
        if (plat == "8086") {
            m_listParser = new NasmListParser();
        }
        else if (plat == "riscv") {
            m_listParser = new GasListParser();
        }
        js_setPlatform(plat);

    }



    // given a line number (starting 0), give the offset in the input text the line ends
    // this is a member in order to avoid reallocating it every time
    // this is used for knowing how many lines there are and placing double click cursor
    private ArrayList<Integer> m_lineOffsets = null;

    // for each line, if there's an error 'e' or warning 'w' on it
    // referenced later when we add more warnings
    private char[] m_errLines = null;



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

    private void toggleBreakpointEdit(int atline)
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

    private final EventListener m_editBrClickHandler = new EventListener() {
        @Override
        public void handleEvent(Event event) {
            Element e = (Element)event.target;
            //Console.log(e.innerHTML);
            toggleBreakpointEdit( Integer.parseInt(e.innerHTML));
        }
    };


    private DocumentFragment makeLineNums(String intext)
    {
        DocumentFragment lndf = DomGlobal.document.createDocumentFragment();
        // make a new one each time since the old one is kept around for breakpoints line reference
        m_lineOffsets = new ArrayList<Integer>();

        int lineCount = 1;
        for (int i = 0; i <= intext.length(); ++i)
        {
            // need line number after with each new line and at the end
            if (i == intext.length() || intext.charAt(i) == '\n')
            {
                Element e = DomGlobal.document.createElement("div");
                e.addEventListener("click", m_editBrClickHandler);
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



    private boolean entered = false;
    private String m_prevInText = null; // used for breakpoint move analysis

    private void asm_edit_changed()
    {
        if (entered) // edit recursion should not happen because we're not making changes to asm_edit.value;
            return;  // so this probably does nothing but just to be safe...
        entered = true;

        int prevLineCount = m_lineCount; // next line is going to change this
        ArrayList<Integer> prevLiveOffsets = m_lineOffsets;

        String intext = asm_edit.value;
        setText(intext, m_playersPanel);
        // update breakpoints only if there was an editing change (and not when switching displayed code)
        updateBreakpoints(prevLiveOffsets, prevLineCount, m_prevInText);
        m_playersPanel.updateText(intext); // tell the players database that this player has a new text
        m_prevInText = intext;

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

    public void removeCurrentBreakpoints() {
        if (m_breakpoints != null) // will be null on the first time
            for(PlayersPanel.Breakpoint b: m_breakpoints)
                setLineNumBreakpoint(b.lineNum, false);
    }

    // from PlayersPanel
    public void playerSelectionChanged(PlayersPanel.Code incode, PlayersPanel callback)
    {
        // remove the prev code breakpoints before it's lines will be erased by setText
        removeCurrentBreakpoints();

        asm_edit.value = incode.asmText;
        editor_title.value = incode.player.title;
        setText(incode.asmText, callback);

        // add breakpoints of current one
        // set them in the editor even if we're in debug mode
        m_breakpoints = incode.breakpoints;
        for(PlayersPanel.Breakpoint b: m_breakpoints)
            setLineNumBreakpoint(b.lineNum, true);

        if (m_isDebugMode) {
            updateDebugLine();
        }
    }

    private int bin_equal(byte[] a, byte[] b) {
        if (a.length != b.length)
            return -1;
        for(int i = 0; i < a.length; ++i)
            if (a[i] != b[i])
                return i;
        return 0;
    }

    // when the user uploads a new binary file
    public void loadedNewBinary(PlayersPanel.Code incode, PlayersPanel callback)
    {
        if (m_isDebugMode)
            return; // should not happen. can't load new code in debug

        removeCurrentBreakpoints();

        StringBuilder sb = new StringBuilder();
        Disassembler dis = new Disassembler.ArrDisassembler(incode.bin, 0, incode.bin.length);
        int offset = 0;
        try {
            while (offset < incode.bin.length) {
                String text = dis.nextOpcode();
                sb.append(text);
                sb.append("\n");
                int len = dis.lastOpcodeSize();
                offset += len;
            }
        }
        catch(Disassembler.DisassemblerException e) {
            // do nothing
        }

        // if there's anything left at the end that we didn't eat above
        for(;offset < incode.bin.length; ++offset) {
            byte b = incode.bin[offset];
            sb.append("db 0x");
            sb.append(Format.hex2(b & 0xff));  // TBD
            sb.append("\n");
        }
        String text = sb.toString();
        incode.asmText = text;
        asm_edit.value = text;
        byte[] setbin = incode.bin;
        // setting the text will redo the bin according to the disassemler. due to disassembler bugs this may be different
        // than the original, check it
        setText(incode.asmText, callback);

        int neq = bin_equal(setbin, incode.bin);
        if (neq != 0) {
            Console.error("Disassembled code is different from original code at " + Integer.toString(neq));
        }


        // when setting breakpoints, set to this
        m_breakpoints = incode.breakpoints;
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
        var v = $wnd.saved_selectionStart
        // reset it so that we'll know something happened next time
        //$wnd.saved_selectionStart = -1
        return v
    }-*/;
    private static native int saved_selectionEnd() /*-{
        var v = $wnd.saved_selectionEnd
        //$wnd.saved_selectionEnd = -1
        return v
    }-*/;
    private static native String saved_keydown() /*-{
        return $wnd.saved_keydown
    }-*/;


    //a
    //b
    //c
    //d

    // used for dececting if lines were added or removed
    int m_lineCount = 0;

    // this function analyzes the change made by knowing what was selected or where the caret was
    // and how many lines were removed or added in order to move around breakpoints
    // - it doesn't support dragging text that has NL in it (breakpoint doesn't move)
    private void updateBreakpoints(ArrayList<Integer> prevLineOffsets, int prevLineCount, String prevInText)
    {
        if (m_breakpoints == null || m_breakpoints.size() == 0)
            return;
        int selStart = saved_selectionStart();
        int selEnd = saved_selectionEnd();
        String keydown = saved_keydown();

        //if (selStart == -1 || selEnd == -1) {
        //    Console.error("updateBreakpoints without selection");
        //    return; // somehow we got here without knowing what's the selection/caret was. should not happe
        //}  resetting the selection marker was a bad idea since a drag text move does 2 changes immediately one after
        //   the other so the second change doesn't have a selection in

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

            if (selStart != selEnd && (selStart < lineStartIndex && selEnd > lineStartIndex   // removed the before the start of the line, including the start
                                   ||  selStart == lineStartIndex && selEnd > lineNLIndex ))  // removed from the start of the line, passed the end of it
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
                if (selStart == selEnd && selStart == lineStartIndex && (keydown == "Backspace" || keydown == "Delete")) {
                    boolean isLineWithText = false;
                    if (prevInText != null) {
                        for(int i = lineStartIndex; i < lineNLIndex && !isLineWithText; ++i) {
                            char c = prevInText.charAt(i);
                            isLineWithText = (c != ' ' && c != '\n');
                        }
                    }
                    if (!isLineWithText) {
                        it.remove();
                        continue;
                    }
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
        if (intext.charAt(intext.length() - 1) != '\n')
            intext += '\n'; // avoid the warning about last line not ending with newline
        String nasm_intext = intext;
        // assemble
        int retcode = run_assembler("player.asm", nasm_intext, "player.lst");
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
            m_errLines = m_listParser.parseStdout(stdout, df, stdoutShorten, m_lineOffsets);

            asm_show.innerHTML = "";
            asm_show.appendChild(df);

            asm_output.innerHTML = stdoutShorten.toString();
        }
        else {
            asm_show.innerHTML = intext; // clear all line marking
            asm_output.innerHTML = "";

            m_errLines = null;
        }


        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            opcodes_edit.innerHTML = linesAsInput(intext); // this is needed because x-scroll hiding relies on the opcode pane to be full
            Console.error("~Assembler error ret=" + Integer.toString(retcode));
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

        m_currentListing = new ArrayList<CodeEditor.LstLine>();
        boolean ok = m_listParser.parseLst(output, opcodesText, m_currentListing);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.error("listing parsing error"); // should not happen
            m_playersPanel.updateAsmResult(false, null, null);
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();
        //Console.log("~OK");


        byte[] buf = read_file_bin_arr("player");
        //Console.log("Bin len=" + Integer.toString(buf.length));
        if (buf.length > WarriorRepository.MAX_WARRIOR_SIZE) {
            String msg = "Code is longer than the maximum allowed " + Integer.toString(WarriorRepository.MAX_WARRIOR_SIZE) + " bytes";
            Console.error(msg);
            asm_output.innerHTML = "<div class='stdout_line_e'>" + msg + "</div>";
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, buf, null);
            return;
        }

        // TBD-SHY enable with new disassembler
        //df = checkDisasmLines(buf, m_currentListing, df, intext);


        if (playersPanel != null)
            playersPanel.updateAsmResult(true, buf, m_currentListing);

    }

    // check if code text is db ..
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
        Disassembler dis = new Disassembler.ArrDisassembler(binbuf, 0, binbuf.length);

        // process each line independently
        for(int atLstLine = 0; atLstLine < listing.size(); ++atLstLine)
        {
            String msg = null;
            LstLine lstline = listing.get(atLstLine);
            if (lstline.address == -1)
                continue; // not a code line
            if (isDefineCode(lstline.code)) {  // don't want to check disassembled opcodes on lines that just define data
                continue;
            }

            try {
                dis.reset(lstline.address, lstline.address + lstline.opcodesCount);
                String asm = dis.nextOpcode();
                int len = dis.lastOpcodeSize();

                if (len != lstline.opcodesCount) {
                    // can happen with `times 5 inc ax`
                   // String msgtxt = "disassembled wrong number of bytes " + Integer.toString(atLstLine+1);
                   // Console.error(msgtxt);
                }

            }
            catch(Disassembler.DisassemblerLengthException e) {
                msg = Integer.toString(atLstLine+1) + ": not enough bytes to parse"; // can happen if we db 09h for example, or just 'rep'
            }
            catch(Disassembler.DisassemblerException e) {
                msg = Integer.toString(atLstLine+1) + ": Although this is a legal x86 opcode, codewars8086 does not support it";
                int eptr = dis.getPointer() - 1;
                if (eptr >= 0 && eptr < binbuf.length)
                    msg += ", opcode = 0x" + Format.hex2(binbuf[eptr] & 0xff);
            }
            catch(RuntimeException e) {
                Console.error("failed parsing binbuf RuntimeException"); // this should not happen. only happens for missing cases
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


    private void setDbgAddrBreakpoint(int addr, boolean v) {
        Element e = DomGlobal.document.getElementById("da" + Integer.toString(addr));
        if (v)
            e.classList.add("dbg_breakpoint");
        else
            e.classList.remove("dbg_breakpoint");
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
        m_dbgBreakpoints = new PlayersPanel.Breakpoint[War.ARENA_SIZE];

        //int inEditorAddr = -1;
        for(int i = 0; i < war.getNumWarriors(); ++i)
        {
            Warrior w = war.getWarrior(i);
            int playerLoadOffset = w.getLoadOffsetInt(); // in the area segment

            PlayersPanel.Code code = m_playersPanel.findCode(w.getLabel());

            // transfer breakpoints
            assert code.lines != null: "unexpected null lines for code " + code.label + " of player" + code.player.getName();
            for(LstLine lstline : code.lines)
                lstline.tmp_br = null;
            for(PlayersPanel.Breakpoint br : code.breakpoints) {
                assert br.lineNum - 1 < code.lines.size() : "unexpected lineNum in breakpoint";
                code.lines.get(br.lineNum - 1).tmp_br = br;
            }


            DbgLine last_dbgline = null;

            // comment or label on the first line, need to belong to the address before first
            if (code.lines.get(0).address == -1)
            {
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

            for(int lsti = 0; lsti < code.lines.size(); ++lsti)
            {
                LstLine lstline = code.lines.get(lsti);
                if (lstline.address == -1) {
                    assert last_dbgline != null: "Unexpected blank prev line";
                    last_dbgline.flags |= FLAG_HAS_COMMENT;
                    last_dbgline.text += "</div><div class='dbg_comment_line'>      <span class='dbg_opcodes'></span>" + lstline.code + "</div>";
                }
                else {
                    int loadAddr = lstline.address + playerLoadOffset;
                    DbgLine dbgline = new DbgLine();
                    String opcode = lstline.opcode;

                    dbgline.text = "<span class='dbg_opcodes'>" + opcode + "</span>" + lstline.code;
                    if (isDefineCode(lstline.code))
                        dbgline.flags = FLAG_DEFINE_CODE;

                    /*dbgline.binOpcode = new byte[lstline.opcodesCount];  -- binOpcode not needed it seems
                    assert lstline.address + lstline.opcodesCount <= code.bin.length: "too many opcodes for the program length?";
                    // copy the binary of this line to dbgline for later comparison when stepping
                    for(int j = 0; j < lstline.opcodesCount; ++j) {
                        dbgline.binOpcode[j] = code.bin[lstline.address + j];
                    }*/

                    if (lsti <= FLAG_LSTLINE_MAX) {// lines above 2^16 are not tracked... should not come to this but just to be safe
                        dbgline.flags |= ((lsti+1) << FLAG_LSTLINE_SHIFT);
                        dbgline.flags |= (i << FLAG_PLAYER_NUM_SHIFT);
                    }
                    m_dbglines[loadAddr] = dbgline;

                    last_dbgline = dbgline;

                    for(int j = 1; j < lstline.opcodesCount; ++j) {
                        m_dbglines[loadAddr + j] = null;
                    }

                    if (lstline.tmp_br != null)
                        m_dbgBreakpoints[loadAddr] = lstline.tmp_br;

                }

            }


        }


    }

    public void j_setScrollAt(int p1, int p2) {
        j_renderIfDirty(p1);
        j_renderIfDirty(p2);

        m_atScrollP1 = p1;
        m_atScrollP2 = p2;
    }



    // dbgline should already be in m_dgblines
    // dXXXXX is the whole line, possible containing the following comment lines
    // dfXXXXX is just the first line that is not a comment - markable by debugger when stepping
    // daXXXXX is the address of the line (not preset in comment lines)
    public void renderLine(int addr, DbgLine dbgline) {
        String addrstr = Integer.toString(addr);
        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + addrstr);
        if (dbgline == null) {
            dline.style.display = "none";
            return;
        }

        String addrhex = Format.hex4(addr);
        if ((dbgline.flags & FLAG_HAS_COMMENT) != 0) // this div tag is closed inside dbgline.text before the comment starts
            dline.innerHTML = "<div id='df" + addrstr + "'><span id='da" + addrstr + "'>" + addrhex + "</span>  " + dbgline.text;
        else
            dline.innerHTML = "<span id='da" + addrstr + "'>" + addrhex + "</span>  " + dbgline.text;
        dline.removeAttribute("style");

        HTMLElement da = (HTMLElement)DomGlobal.document.getElementById("da" + addrstr);
        da.addEventListener("click", m_dbgBrClickHandler);

        // mark breakpoint?
        PlayersPanel.Breakpoint br = m_dbgBreakpoints[addr];
        if (br != null) {
            setDbgAddrBreakpoint(addr, true);
        }
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

    public boolean shouldBreak(CpuState state)
    {
        int absAddr = RealModeAddress.linearAddress(state.getCS(), state.getIP());
        int arenaAddr = absAddr - CODE_ARENA_OFFSET;
        if (m_dbgBreakpoints[arenaAddr] == null)
            return false;
        return true;
    }

    // called when an address is clicked to add a breakpoint for a line
    // all breakpoints of all players are visible and active
    // breakpoints in the debug view that are in addresses that don't correspond to code lines are transient.
    // they disappear once the debug session is over. They are not saved in the players m_breakpoints since it's unknown what players are they of
    private void toggleBreakpointDbg(int addr)
    {
        PlayersPanel.Breakpoint br = null;
        boolean wasAdded = false;

        if (m_dbgBreakpoints[addr] == null) {
            br = new PlayersPanel.Breakpoint(-1);
            m_dbgBreakpoints[addr] = br;
            wasAdded = true;
        }
        else {
            br = m_dbgBreakpoints[addr];
            m_dbgBreakpoints[addr] = null;
            wasAdded = false;
        }

        War war = m_competition.getCurrentWar();

        DbgLine dbgline = m_dbglines[addr];
        int lsti = (dbgline.flags & FLAG_LSTLINE) >> FLAG_LSTLINE_SHIFT;
        if (lsti >= 1) {
            int playeri = (dbgline.flags & FLAG_PLAYER_NUM) >> FLAG_PLAYER_NUM_SHIFT;
            Warrior warrior = war.getWarrior(playeri);

            PlayersPanel.Code codeObj = m_playersPanel.findCode(warrior.getLabel());

            if (wasAdded) {
                br.lineNum = lsti;
                // check sanity that there isn't a breakpoint in this line
                for(PlayersPanel.Breakpoint exist_br : codeObj.breakpoints)
                    assert exist_br.lineNum != br.lineNum : "Breakpoint of this line already exists! " + Integer.toString(br.lineNum);
                codeObj.breakpoints.add(br);
            }
            else {
                boolean removed = codeObj.breakpoints.remove(br);
                if (!removed)
                    Console.error("removed a breakpoint that did not exist?");
            }

            // add it to the editor as well if needed so it will be visible there when debugging is done
            if (codeObj == m_playersPanel.getCodeInEditor())
                setLineNumBreakpoint(lsti, wasAdded);
        }


        renderLine(addr, dbgline);
    }

    private final EventListener m_dbgBrClickHandler = new EventListener() {
        @Override
        public void handleEvent(Event event) {
            Element e = (Element)event.target;
            //Console.log(e.innerHTML);
            toggleBreakpointDbg( Integer.parseInt(e.innerHTML, 16));
        }
    };

    private int m_lastDbgAddr = -1; // for knowing if we need to move it
    private int m_lastDbgAddrEnd = -1; // end (one after last) of the debugged opcode (for edit handling)
    private HTMLElement m_lastDbgElement;
    private boolean m_lastIsAlive = false;

    private Warrior getCurrentWarrior() {
        War war = m_competition.getCurrentWar();
        if (war == null)
            return null;
        String label = m_playersPanel.getCodeInEditor().getLabel();
        return war.getWarriorByLabel(label);
    }
    private static int getWarrirorIp(Warrior w) {
        if (w == null)
            return -1;
        CpuState state = w.getCpuState();

        short ip = state.getIP();
        short cs = state.getCS();

        int ipInsideArena = RealModeAddress.linearAddress(cs, ip) - CODE_ARENA_OFFSET;
        return ipInsideArena;
    }

    private int getCurrentWarriorIp() {
        return getWarrirorIp(getCurrentWarrior());
    }

    private void setByteFromMem(int addrInArea) {
        int value = m_mem.readByte(addrInArea + CODE_ARENA_OFFSET);
        setByte(addrInArea, (byte)(value & 0xff) );
    }

    public void updateDebugLine() {
        Warrior currentWarrior = getCurrentWarrior();
        if (currentWarrior == null)
            return;
        final int ipInsideArena = getWarrirorIp(currentWarrior);
        final boolean isAlive = currentWarrior.isAlive();

        scrollToAddr(ipInsideArena, false); // make sure to scroll to it even the current line marker is on it
        if (ipInsideArena == m_lastDbgAddr && isAlive == m_lastIsAlive) {
            return; // nothing to do, the line is what we want it to be
        }
        if (m_lastDbgElement != null) // remove the last thing we put there
            m_lastDbgElement.classList.remove(m_lastIsAlive ? "current_dbg" : "current_dbg_dead");

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
        dline.classList.add( isAlive ? "current_dbg" : "current_dbg_dead");
        m_lastDbgElement = dline;
        m_lastDbgAddr = ipInsideArena;
        m_lastDbgAddrEnd = m_lastDbgAddr + 1;
        m_lastIsAlive = isAlive;
        while (m_lastDbgAddrEnd < 0x10000 && m_dbglines[m_lastDbgAddrEnd] == null)
            ++m_lastDbgAddrEnd;

    }

    private void disassembleAddr(int absaddr, int addrInArea)
    {
        Disassembler dis = new Disassembler.NArrDisassembler(m_mem.m_data, absaddr, m_mem.length()); // TBDTBD
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
            bs.append( Format.hex2(m_mem.readByte(absaddr + i) & 0xff));
            bs.append(TextUtils.SPACE_FOR_HEX);
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