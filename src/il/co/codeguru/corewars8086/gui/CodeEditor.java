package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.war.Competition;
import il.co.codeguru.corewars8086.war.War;
import il.co.codeguru.corewars8086.war.Warrior;
import il.co.codeguru.corewars8086.war.WarriorRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Vector;

public class CodeEditor
{
    private HTMLElement asm_output, opcodes_edit, asm_linenums, asm_show;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;

    public static class LstLine {
        int lineNum = -1;
        int address = -1;
        String addressStr = "";
        String opcode = "";
        String code = "";
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
        byte[] binOpcode;
    }
    private DbgLine[] m_dbglines;

    public static class PageInfo {
        boolean isDirty;
        int startAddr;
        int endAddr;
    }
    private PageInfo[] m_pages; // marks when a page of 500 addresses should be redrawn in the next required time

    private ArrayList<LstLine> m_currentListing;
    public PlayersPanel m_playersPanel = null;
    private Competition m_competition = null;

    private static native int PAGE_SIZE() /*-{
        return $wnd.PAGE_SIZE
    }-*/;

    public CodeEditor(Competition competition) {
        m_competition = competition;
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
        int pageSize = PAGE_SIZE();
        m_pages = new PageInfo[ (War.ARENA_SIZE / pageSize) + 1 ];
        for(int i = 0; i < m_pages.length; ++i) {
            PageInfo pi = new PageInfo();
            m_pages[i] = pi;
            pi.isDirty = true;
            pi.startAddr = i * pageSize;
            pi.endAddr = Math.min( (i + 1) * pageSize, War.ARENA_SIZE);
        }

        exportMethods();
    }

    public native void exportMethods() /*-{
        var that = this
        $wnd.j_renderIfDirty = $entry(function(i) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_renderIfDirty(I)(i) });
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
                        if (isHexDigit(c)) {
                            state = Field.OPCODE;
                            opcodeStart = j;
                        }
                        else
                            state = Field.PARSE_ERR;
                        break;
                    case OPCODE:
                        if (c == ' ') {
                            l.opcode = line.substring(opcodeStart, j);
                            state = Field.SPACE_BEFORE_CODE;
                            ++charsBeforeCode;
                        }
                        else if (!isHexDigit(c) && c != '[' && c != ']' && c != '(' && c != ')')
                            state = Field.PARSE_ERR;
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
            else if (l.lineNum != lineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum) + " at " + Integer.toString(lineIndex));
                return false;
            }

            ++lineIndex;

            m_currentListing.add(l);
            opcodesText.append(l.opcode);
            opcodesText.append("\n");

        }

        // if text doen't end with new line, delete the one added to opcodes
        //if (asmtext.charAt(asmtext.length() - 1) != '\n')
         //   opcodesText.deleteCharAt(opcodesText.length() - 1);

        return true;
    }

    // given a line number (starting 0), give the offset in the input text the line ends
    // this is a member in order to avoid reallocating it every time
    // this is used for knowing how many lines there are and placing double click cursor
    private ArrayList<Integer> m_lineOffsets = new ArrayList<Integer>();


    // returns the input asm text, with added formatting for error and warning lines
    private void parseStdout(String stdoutText, String asmText, StringBuilder asmColored, StringBuilder stdoutShorten)
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
        char[] errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

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
                            if (!(lineType == 'w' && errLines[lineNum] == 'e')) // not the case where an 'w' overwrites a 'e'
                                errLines[lineNum] = lineType;
                        }
                        break;
                    }
                }
            }
            if (lineNum == -1) {
                Console.log("Failed parsing error stdout");
                asmColored.append(asmText);
                return;
            }

            stdoutShorten.append("<div class='stdout_line_" + lineType + "' ondblclick='asm_cursorToLine(" +
                                   Integer.toString(m_lineOffsets.get(lineNum)) +")'>");
            stdoutShorten.append(line.substring(firstColon + 1));
            stdoutShorten.append("</div>");
            //if (i < lines.length - 1)
            //    stdoutShorten.append('\n');
        }


        int asmIndex = 0;
        int countNL = 0;

        for(int lineNum = 0; lineNum < errLines.length; ++lineNum)
        {
            char ec = errLines[lineNum];
            if (ec == 0)
                continue;
            // add to asmText
            int searchStart = asmIndex;
            while (asmIndex < asmText.length() && countNL < lineNum) {
                if (asmText.charAt(asmIndex) == '\n')
                    ++countNL;
                ++asmIndex;
            }

            asmColored.append(asmText.substring(searchStart, asmIndex));
            if (ec == 'e')
                asmColored.append("<span class='edit_error' id='mark_line_");
            else
                asmColored.append("<span class='edit_warning' id='mark_line_");
            asmColored.append(lineNum);
            asmColored.append("'>");

            searchStart = asmIndex;
            while (asmIndex < asmText.length() && asmText.charAt(asmIndex) != '\n')
                ++asmIndex;

            asmColored.append(asmText.substring(searchStart, asmIndex));
            asmColored.append("</span>");

        }
        asmColored.append(asmText.substring(asmIndex)); // add all remaining ending texr

        //if (asmColored.charAt(asmColored.length() - 1) == '\n')
        //    asmColored.append("&nbsp;"); // html doesn't show last <br> without any chars after it

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

    public void asm_edit_changed()
    {
        if (entered)
            return;
        entered = true;

        String intext = asm_edit.value;
        setText(intext, m_playersPanel);
        m_playersPanel.updateText(intext);

        entered = false;
    }

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


        if (!stdout.isEmpty())
        {   // add coloring to the text
            StringBuilder asmColored = new StringBuilder();
            StringBuilder stdoutShorten = new StringBuilder(); // removes the file name from the start of the lines
            parseStdout(stdout, intext, asmColored, stdoutShorten);

            String s = asmColored.toString();
            asm_show.innerHTML = s;

            asm_output.innerHTML = stdoutShorten.toString();
        }
        else {
            asm_show.innerHTML = intext; // clear all line marking
            setInnerText(asm_output, "");
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

        if (playersPanel != null)
            playersPanel.updateAsmResult(true, buf, m_currentListing);

    }

    private static native void scrollToAddr(int addr) /*-{
        $wnd.deferredEditorToAddress = addr
    }-*/;

    private static native double getTime() /*-{
        return Date.now()
    }-*/;

    public void setTitle(String s) {
        editor_title.value = s;
    }

    private static final int OPCODES_PAD = 18;

    private void initDebugAreaLines()
    {
        War war = m_competition.getCurrentWar();

        //double _start = getTime();

        DbgLine fillCmd = new DbgLine();
        fillCmd.text = "CC  " + Format.padding(OPCODES_PAD-2,' ') + "int 3";;
        fillCmd.binOpcode = new byte[1];
        fillCmd.binOpcode[0] = War.ARENA_BYTE;

        for(int addr = 0; addr < War.ARENA_SIZE; ++addr) {
            m_dbglines[addr] = fillCmd;
        }

        //double _setup = getTime();
        //Console.log("cc-setup " + Double.toString(_setup - _start));


        int inEditorAddr = -1;
        for(int i = 0; i < war.getNumWarriors(); ++i)
        {
            Warrior w = war.getWarrior(i);
            int loadOffset = w.getLoadOffsetInt();

            PlayersPanel.Code code = m_playersPanel.findCode(w.getLabel());

            if (code == m_playersPanel.getCodeInEditor())
                inEditorAddr = loadOffset;

            DbgLine last_dbgline = null;
            //HTMLElement last_dline = null;

            if (code.lines.get(0).address == -1) { // comment or label on the first line, need to belong to the address before first
                int befFirst = loadOffset - 1;
                if (m_dbglines[befFirst] != null) {
                    last_dbgline = m_dbglines[befFirst];
                    if (last_dbgline.binOpcode[0] == War.ARENA_BYTE) { // it's the shared DbgLine from above, make a copy of it since we don't want to change it
                        DbgLine copy = new DbgLine();
                        copy.text = last_dbgline.text;
                        copy.binOpcode = last_dbgline.binOpcode;
                        last_dbgline = copy;
                    }
                }
                else {
                    last_dbgline = new DbgLine();
                    last_dbgline.text = "";
                    m_dbglines[befFirst] = last_dbgline;
                }
                //last_dline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(befFirst));
            }

            for(LstLine lstline : code.lines)
            {
                if (lstline.address == -1) {
                    assert last_dbgline != null: "Unexpected blank prev line";
                    last_dbgline.text += "\n" + Format.padding(4+2+2+OPCODES_PAD,  ' ') + lstline.code;
                    //last_dline.innerHTML += "\n" + Format.padding(4+2+2+OPCODES_PAD,  ' ') + lstline.code;
                }
                else {
                    int loadAddr = lstline.address + loadOffset;
                    DbgLine dbgline = new DbgLine();
                    String opcode = lstline.opcode;

                    dbgline.text = opcode + "  " + Format.padding(OPCODES_PAD-opcode.length(),' ') + lstline.code;

                    int opcodesNumsCount = 0;
                    for(int j = 0; j < opcode.length(); ++j)
                        if (isHexDigit(opcode.charAt(j))) // opcode can have things line [],() skipped
                            ++opcodesNumsCount;
                    // count how many bytes in the opcode
                    int opcodesCount = opcodesNumsCount / 2;
                    dbgline.binOpcode = new byte[opcodesCount];
                    assert lstline.address + opcodesCount <= code.bin.length;
                    // copy the binary of this line to dbgline for later comparison when stepping
                    for(int j = 0; j < opcodesCount; ++j) {
                        dbgline.binOpcode[j] = code.bin[lstline.address + j];
                    }
                    m_dbglines[loadAddr] = dbgline;

                    //HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(loadAddr));
                    //dline.innerHTML = Format.hex(loadAddr, 4) + "  " + dbgline.text;

                    last_dbgline = dbgline;
                    //last_dline = dline;


                }

            }
        }

        //double _done = getTime();
        //Console.log("done " + Double.toString(_done - _setup));

        if (inEditorAddr != -1)
            scrollToAddr(inEditorAddr);

    }

    // from javascript scroll of debug area
    public void j_renderIfDirty(int pagenum)
    {
        PageInfo page = m_pages[pagenum];
        if (!page.isDirty)
             return;
        for(int addr = page.startAddr; addr < page.endAddr; ++addr)
        {
            DbgLine dbgline = m_dbglines[addr];
            HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(addr));
            if (dbgline == null) {
                dline.style.display = "none";
                continue;
            }

            dline.innerHTML = Format.hex4(addr) + "  " + dbgline.text;
            dline.removeAttribute("style");

            for(int j = 1; j < dbgline.binOpcode.length; ++j) {
                HTMLElement adline = (HTMLElement)DomGlobal.document.getElementById("d" + Integer.toString(addr + j));
                adline.style.display = "none";
                m_dbglines[addr + j] = null;
            }
        }
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
        }
        else {
            asm_output.style.display = "";
            asm_edit.style.display = "";
            editor_title.readOnly = false;
        }

    }

}