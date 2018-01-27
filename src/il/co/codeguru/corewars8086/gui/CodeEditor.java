package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import il.co.codeguru.corewars8086.gui.widgets.Console;
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

    private static class LstLine {
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
    ArrayList<LstLine> m_currentListing = new ArrayList<LstLine>();
    public PlayersPanel m_playersPanel = null;


    public CodeEditor() {
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
    }

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
        m_currentListing.clear();

        int lineIndex = 1; // does not increment in warning lines that appear in the listing file
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            Field state = Field.START_SPACE;
            LstLine l = new LstLine();

            int indexStart = 0, addressStart = 0, opcodeStart = 0;

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
                        if (c == ' ')
                            state = Field.SPACE_BEFORE_CODE;
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
                        }
                        else if (!isHexDigit(c) && c != '[' && c != ']' && c != '(' && c != ')')
                            state = Field.PARSE_ERR;
                        break;
                    case SPACE_BEFORE_CODE:
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (c != ' ') {
                            state = Field.CODE;
                            l.code = line.substring(j);
                        }
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
            if (l.lineNum != lineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum));
                return false;
            }

            ++lineIndex;

            m_currentListing.add(l);
            opcodesText.append(l.opcode);
            opcodesText.append("<br>");

        }

        // if text doen't end with new line, delete the one added to opcodes
        //if (asmtext.charAt(asmtext.length() - 1) != '\n')
         //   opcodesText.deleteCharAt(opcodesText.length() - 1);

        return true;
    }


    // returns the input asm text, with added formatting for error and warning lines
    private void parseStdout(String stdoutText, String asmText, StringBuilder asmColored, StringBuilder stdoutShorten)
    {
        String[] lines = stdoutText.split("\\n");
        // warning come before errors so we can't assume the line numbers are ascending
        // so we need to save all the line nums, sort and then go over from start to end of the text

        int countAllNL = 1; // +1 for the last line with no \n
        for (int i = 0; i < asmText.length(); ++i) {
            if (asmText.charAt(i) == '\n')
                ++countAllNL;
        }

        // have a potential char for every line in the asm text. this way there's no need to sort
        // and there is only one entry per line, error trumps warning
        // used for determining the color of a line
        char[] errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

        // go over stdout, find out which lines need marking
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            int firstColon = -1;
            int lineNum = -1;
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

            stdoutShorten.append("<div class='stdout_line_" + lineType + "' ondblclick='asm_cursorToLine(" + Integer.toString(i) +")'>");
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
        int lineCount = 1;
        for (int i = 0; i < intext.length(); ++i) {
            if (intext.charAt(i) == '\n') {
                lineNumText.append(lineCount);
                lineNumText.append("\n");
                ++lineCount;
            }
        }

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



    // inspired by https://github.com/kazzkiq/CodeFlask.js#usage which also writes all the dome in every key press
    public void setText(String intext, PlayersPanel playersPanel)
    {
        if (intext.isEmpty()) {
            asm_output.innerHTML = "";
            opcodes_edit.innerHTML = "";
            asm_show.innerHTML = "";
            asm_linenums.innerHTML = "1";
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null);
            //Console.log("~Empty input");
            return;
        }
        intext = intext.replace('\u00A0', ' '); // no-break-space coming from html
        // assemble
        int retcode = run_nasm("player.asm", intext, "player.lst");
        String stdout = get_stdout();
        // output of assembler, could be just warnings
        setInnerText(asm_output, stdout);

       // int caretPos = caretPositionInText();
        if (!stdout.isEmpty())
        {   // add coloring to the text
            StringBuilder asmColored = new StringBuilder();
            StringBuilder stdoutShorten = new StringBuilder(); // removes the file name from the start of the lines
            parseStdout(stdout, intext, asmColored, stdoutShorten);

            String s = asmColored.toString();
            //s = s.replace("\n", "<br>");

            asm_show.innerHTML = s;

            asm_output.innerHTML = stdoutShorten.toString();
        }
        else {
            setInnerText(asm_show, intext); // clear all line marking
            setInnerText(asm_output, "");
        }

        StringBuilder lineNumText = new StringBuilder();
        makeLineNums(intext, lineNumText);
        asm_linenums.innerHTML = lineNumText.toString();


       // if (caretPos != -1)
      //      setCaretTextPos(caretPos);


        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            //opcodes_edit.innerHTML = linesAsInput(intext); // don't want the opcodes edit to scroll unexpectedly so put there enough lines
            Console.error("~Assembler error");
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, null);
            return;
        }

        String output = read_file("player.lst");
        if (output.isEmpty()) {
            m_currentListing.clear();
            //opcodes_edit.innerHTML = linesAsInput(intext);;
            Console.log("~Empty output");
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null);
            return;
        }

        StringBuilder opcodesText = new StringBuilder();
        boolean ok = parseLst(output, opcodesText);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.error("listing parsing error"); // should not happen
            m_playersPanel.updateAsmResult(false, null);
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();
        //Console.log("~OK");

        byte[] buf = read_file_bin_arr("player"); // TBD check max size
        if (buf.length > WarriorRepository.MAX_WARRIOR_SIZE) {
            Console.error("Code is longer than the maximum allowed " + Integer.toString(WarriorRepository.MAX_WARRIOR_SIZE) + " bytes");
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, buf);
            return;
        }

        if (playersPanel != null)
            playersPanel.updateAsmResult(true, buf);

    }


    public void setTitle(String s) {
        editor_title.value = s;
    }



}