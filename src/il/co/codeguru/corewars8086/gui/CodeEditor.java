package il.co.codeguru.corewars8086.gui;


import elemental2.dom.*;
import il.co.codeguru.corewars8086.gui.widgets.Console;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Vector;

public class CodeEditor
{
    private HTMLElement asm_edit, asm_output, opcodes_edit, asm_linenums;

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
        asm_edit = (HTMLElement)DomGlobal.document.getElementById("asm_edit");
        asm_output = (HTMLElement)DomGlobal.document.getElementById("asm_output");
        opcodes_edit = (HTMLElement)DomGlobal.document.getElementById("opcodes_edit");
        asm_linenums = (HTMLElement)DomGlobal.document.getElementById("asm_linenums");

        asm_edit.addEventListener("input", (event) -> {
            asm_edit_changed();
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
    private boolean parseLst(String lsttext, StringBuilder opcodesText, StringBuilder lineNumText)
    {
        String[] lines = lsttext.split("\\n");
        m_currentListing.clear();

        int lineIndex = 1; // does not increment in warning lines
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
                        else if (!isHexDigit(c) && c != '[' && c != ']')
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
            lineNumText.append(lineIndex);
            lineNumText.append("<br>");

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


    // returns the input asm text, with added formatting for error and warning lines
    private String parseStdout(String stdoutText, String asmText)
    {
        String[] lines = stdoutText.split("\\n");
        StringBuilder asmColored = new StringBuilder();
        // warning come before errors so we can't assume the line numbers are ascending
        // so we need to save all the line nums, sort and then go over from start to end of the text

        int countAllNL = 1; // +1 for the last line with no \n
        for (int i = 0; i < asmText.length(); ++i) {
            if (asmText.charAt(i) == '\n')
                ++countAllNL;
        }

        // have a potential ErrLine for every line in the asm text. this war there's no need to sort
        // and there is only one entry per line, error trumps warning
        char[] errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            int firstColon = -1;
            int lineNum = -1;
            // find first and second columns chars
            for(int j = 0 ; j < line.length(); ++j) {
                if (line.charAt(j) == ':') {
                    if (firstColon == -1)
                        firstColon = j;
                    else {
                        lineNum = Integer.parseInt(line.substring(firstColon + 1, j));
                        lineNum -= 1; // read numbers are 1 based
                        if (j + 2 < line.length()) {
                            assert lineNum < countAllNL : "unexpected lineNum";
                            char ec = line.charAt(j + 2); // +2 for a space and then the first letter of 'error' or 'warning'
                            if (!(ec == 'w' && errLines[lineNum] == 'e')) // not the case where an 'w' overwrites a 'e'
                                errLines[lineNum] = ec;
                        }
                        break;
                    }
                }
            }
            if (lineNum == -1) {
                Console.log("Failed parsing error stdout");
                return asmText;
            }
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
                asmColored.append("<span class='edit_error'>");
            else
                asmColored.append("<span class='edit_warning'>");

            searchStart = asmIndex;
            while (asmIndex < asmText.length() && asmText.charAt(asmIndex) != '\n')
                ++asmIndex;

            asmColored.append(asmText.substring(searchStart, asmIndex));
            asmColored.append("</span>");

        }
        asmColored.append(asmText.substring(asmIndex)); // add all remaining ending texr
        String s = asmColored.toString();
        s = s.replace("\n", "<br>");

        return s;
    }

    private static native int getSelectionRangeCount() /*-{
        return $wnd.getSelection().rangeCount
    }-*/;

    private static native Node getSelectionNode() /*-{
        return $wnd.getSelection().getRangeAt(0).startContainer
    }-*/;
    private static native int getSelectionOffset() /*-{
        return $wnd.getSelection().getRangeAt(0).startOffset
    }-*/;

    private static native int setCaret(Node node, int offset) /*-{
        var range = $wnd.document.createRange();
        range.setStart(node, offset);
        range.collapse(true);
        var sel = $wnd.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }-*/;


    // find the index of the caret in the text
    // go over the content and sum up the text
    // yes, this is ugly.
    private int caretPositionInText()
    {
        int count = getSelectionRangeCount();
        if (count == 0) {
            return -1;
        }
        Node selNode = getSelectionNode();
        int selOffset = getSelectionOffset();
        int atOffset = 0;

        // if we're in the edit node, that means we're in a new empty line
        // the number is the could of child element up to where we are
        // enumerate these elements and find the text caret position
        if (selNode == asm_edit)
        {
            for(int j = 0; j < selOffset; ++j) {
                Node nj = asm_edit.childNodes.getAt(j);
                if (nj instanceof Text)
                    atOffset += ((Text)nj).length;
                else if (nj instanceof HTMLBRElement)
                    atOffset += 1;
                else if (nj instanceof HTMLElement) { // if it's a span, need to count everything that's in there
                    for(int k = 0; k < nj.childNodes.length; ++k) {
                        Node nk = nj.childNodes.getAt(k);
                        if (nk instanceof Text) {
                            atOffset += ((Text)nk).length;
                        }
                        else if (nk instanceof HTMLBRElement) {
                            atOffset += 1; // \n
                        }
                        else
                            assert false : "unexpected element in a span5";
                    }
                }
                else
                    assert false : "than wtf is it";
            }
            return atOffset;
        }

        // otherwise, search were we are among the children of the edit box
        for(int i = 0; i < asm_edit.childNodes.length; ++i)
        {
            Node n = asm_edit.childNodes.getAt(i);
            if (n == selNode)
            { // reached the node we are it, now check where we are inside it. if the node is not a text node, the could is counting elements
              // we can't be inside a <br> so that's not an option here
                if (n instanceof Text) {
                    atOffset += selOffset;
                }
                else if (n instanceof HTMLElement) { // we're in a span, check how far
                    for(int j = 0; j < selOffset; ++j) {
                        Node nj = n.childNodes.getAt(j);
                        if (nj instanceof Text)
                            atOffset += ((Text)nj).length;
                        else if (nj instanceof HTMLBRElement)
                            atOffset += 1;
                        else
                            assert false : "unexpected element in a span1";
                    }
                }
                else
                    assert false : "unexpected element3";
                return atOffset;
            }
            if (n instanceof Text) {
                atOffset += ((Text)n).length;
            }
            else if (n instanceof HTMLBRElement) {
                atOffset += 1; // \n
            }
            else if (n instanceof HTMLElement)
            {   // we're in an element, just enumerate everything in it
                // this is the easiest way to do this in this stupid language
                // no need for deeper recursion since the text generation does not produce deeper elements
                for(int ii = 0; ii < n.childNodes.length; ++ii) {
                    Node nn = n.childNodes.getAt(ii);
                    if (nn == selNode) {
                        assert nn instanceof Text : "unexpected element in a span2";;  // a span cannot have any more internal stuff
                        atOffset += selOffset;
                        return atOffset;
                    }
                    if (nn instanceof Text) {
                        atOffset += ((Text)nn).length;
                    }
                    else if (nn instanceof HTMLBRElement) {
                        atOffset += 1; // \n
                    }
                }
            }
        }
        return -1;
    }

    // same thing but in reverse
    private void setCaretTextPos(int pos)
    {
        int atOffset = 0;
        for(int i = 0; i < asm_edit.childNodes.length; ++i) {
            Node n = asm_edit.childNodes.getAt(i);
            if (n instanceof Text) {
                int len = ((Text)n).length;
                if (pos >= atOffset && pos <= atOffset + len) {
                    setCaret(n, pos - atOffset);
                    return;
                }
                atOffset += len;
            }
            else if (n instanceof HTMLBRElement) {
                atOffset += 1; // \n
                if (atOffset == pos) {
                    setCaret(asm_edit, i + 1); // after element index inside the editor (+1 since it needs to count of elements)
                    return;
                }
            }
            else if (n instanceof HTMLElement) { // it's a color span
                for(int ii = 0; ii < n.childNodes.length; ++ii)
                {
                    Node nn = n.childNodes.getAt(ii);
                    assert nn instanceof Text : "unexpected element in span4"; // text generation only puts text in spans
                    int len = ((Text)nn).length;
                    if (pos >= atOffset && pos <= atOffset + len) {
                        setCaret(nn, pos - atOffset);
                        return;
                    }
                    atOffset += len;
                }
            }
        }
    }


    private static native String innerText(HTMLElement elem) /*-{
        return elem.innerText
    }-*/;
    private static native void setInnerText(HTMLElement elem, String text)/*-{
        elem.innerText = text
    }-*/;

    public void asm_edit_changed()
    {
       // int count = getSelectionRangeCount();
       // Console.log("rangeCount2=" + Integer.toString(count));

        String intext = innerText(asm_edit);
        setText(intext);
        m_playersPanel.updateText(intext);
    }

    public void setText(String intext)
    {
        if (intext.isEmpty()) {
            asm_output.innerHTML = "";
            opcodes_edit.innerHTML = "";
            asm_edit.innerHTML = "";
            //Console.log("~Empty input");
            return;
        }
        intext = intext.replace('\u00A0', ' '); // no-break-space
        int retcode = run_nasm("player1.asm", intext, "player1.lst");
        String stdout = get_stdout();
        setInnerText(asm_output, stdout); // could be just warnings

        int caretPos = caretPositionInText();
        if (!stdout.isEmpty())
        {   // add coloring to the text
            asm_edit.innerHTML = parseStdout(stdout, intext);
        }
        else {
            setInnerText(asm_edit, intext); // clear all line marking
        }
        if (caretPos != -1)
            setCaretTextPos(caretPos);


        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            opcodes_edit.innerHTML = linesAsInput(intext); // don't want the opcodes edit to scroll unexpectedly so put there enough lines
            Console.log("~Assembler error");
            return;
        }

        String output = read_file("player1.lst");
        if (output.isEmpty()) {
            m_currentListing.clear();
            opcodes_edit.innerHTML = linesAsInput(intext);;
            Console.log("~Empty output");
            return;
        }

        StringBuilder opcodesText = new StringBuilder();
        StringBuilder lineNumText = new StringBuilder();
        boolean ok = parseLst(output, opcodesText, lineNumText);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.log("listing parsing error");
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();
        asm_linenums.innerHTML = lineNumText.toString();
        //Console.log("~OK");

    }




}