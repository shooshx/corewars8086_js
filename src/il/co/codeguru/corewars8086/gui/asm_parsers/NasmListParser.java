package il.co.codeguru.corewars8086.gui.asm_parsers;


import elemental2.dom.DocumentFragment;
import elemental2.dom.Element;
import il.co.codeguru.corewars8086.gui.CodeEditor;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.war.WarriorRepository;

import java.util.ArrayList;

public class NasmListParser implements IListParser{

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

    // examples of edge cases:
    // macro expansion line
    //     13 00000000 B83412              <1> mov ax, 0x1234

    // jmp short 0xfa 
    //      1 00000000 EB(FA)                  JMP SHORT 0xFA

    // mov ax,\
    //     cx
    // TBD 


    // runs a state machine that parses the .lst files
    public boolean parseLst(String lsttext, StringBuilder opcodesText, ArrayList<CodeEditor.LstLine> m_currentListing)
    {
        String[] lines = lsttext.split("\\n");

        int expectedLineIndex = 1; // does not increment in warning lines that appear in the listing file
        CodeEditor.LstLine prevLine = null;
        int totalOpcodeCount = 0;
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            Field state = Field.START_SPACE;
            CodeEditor.LstLine l = new CodeEditor.LstLine();

            int indexStart = 0, addressStart = 0, opcodeStart = 0;
            int charsBeforeCode = 0; // number of characters after the space after address and before the code. used fo not missing indentation
            boolean hasMacroLevel = false; // a macro level field looks like <1> and indicates we don't want to connect several lines that appear in the same line number
            for(int j = 0; j < line.length(); ++j)
            {
                char c = line.charAt(j);
                switch(state) {
                    case START_SPACE:
                        if (TextUtils.isDigit(c)) {
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
                        else if (!TextUtils.isDigit(c))
                            state = Field.PARSE_ERR;
                        break;
                    case SINGLE_SPACE_AFTER_INDEX:
                        if (c == ' ') {
                            state = Field.SPACE_BEFORE_CODE;
                            charsBeforeCode = -9; // account for not having an address
                        }
                        else if (TextUtils.isHexDigit(c)) {
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
                        else if (!TextUtils.isHexDigit(c))
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
                        if (c == '>' && charsBeforeCode == 21)
                            hasMacroLevel = true;  // tri brackets any other place may be a pointer?
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (!islast && charsBeforeCode < 22)
                            ++charsBeforeCode; // take anything as long as its in the field size of the opcode. need this since resb adds spaces
                        else if (c == ' ' || islast) { // continueation lines of a string definition end in the middle of the opcode field.
                            //spacedHex(, l);
                            l.fullOpcode = line.substring(opcodeStart, j);
                            if (hasMacroLevel)
                                l.fullOpcode = removeMacroLevel(l.fullOpcode);
                            l.opcode = TextUtils.spacedHex(l.fullOpcode);
                            l.opcodesCount = TextUtils.countDigits(l.fullOpcode) / 2;
                            totalOpcodeCount += l.opcodesCount;
                            if (totalOpcodeCount > WarriorRepository.MAX_WARRIOR_SIZE)
                                return true; // is going to fail later in setText we check here just for not getting stuch in a long loop
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
                
            if (l.lineNum > expectedLineIndex)
            {  // this can happen if there is a \ at the end of a line, extending it to the next line
                // so the next line doesn't exist in the line count, we need to just skip it in the output
                // this can happen for multiple consecutive lines
                while (l.lineNum != expectedLineIndex) {
                    opcodesText.append("\n");
                    ++expectedLineIndex;
                }
            }
            else if (prevLine != null && l.lineNum == prevLine.lineNum) {
                if (!hasMacroLevel) {
                    // it's a continuation line of the previous line. we need to concatenate to get the full opcode in order to know its size
                    // happens with string definition db "abcdefgh"
                    prevLine.fullOpcode += l.fullOpcode;
                    prevLine.opcodesCount = TextUtils.countDigits(prevLine.fullOpcode) / 2;
                    // no need to update the display opcode because its already too long
                    continue;
                }
            }
            else if (l.lineNum != expectedLineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum) + " at " + Integer.toString(expectedLineIndex));
                return false;
            }

            if (!hasMacroLevel)
                ++expectedLineIndex;

            m_currentListing.add(l);
            if (!hasMacroLevel) {
                // don't want to add macro expansion to the text displayed when editing since that would cause the lines to misalign.
                // the line that instantiates the macro is added as it doesn't have < in it
                opcodesText.append(l.opcode);
                opcodesText.append("\n");
            }

            prevLine = l;
        }


        // if text doen't end with new line, delete the one added to opcodes
        //if (asmtext.charAt(asmtext.length() - 1) != '\n')
        //   opcodesText.deleteCharAt(opcodesText.length() - 1);

        return true;
    }

    // opcode line "B83412              <1>", remove the last bit
    private static String removeMacroLevel(String s)
    {
        if (s.charAt(s.length()-1) != '>')
            return s;
        int i = s.length() - 2;
        while (i > 0 && s.charAt(i) != '<')
            --i;
        return s.substring(0, i);
    }


    // returns the input asm text, with added formatting for error and warning lines
    public char[] parseStdout(String stdoutText, DocumentFragment asmElem, StringBuilder stdoutShorten, ArrayList<Integer> m_lineOffsets)
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
        char[] m_errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

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
                Console.log(stdoutText);
                return m_errLines;
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

            Element e = TextUtils.DocumentFragment_getElementById(asmElem, "mline_" + Integer.toString(lineNum+1));
            if (e == null)
                continue; // can happen with some strange case of dz... ? could not reproduce but it happened
            if (ec == 'e')
                e.classList.add("edit_error");
            else
                e.classList.add("edit_warning");

        }

        return m_errLines;


    }


}