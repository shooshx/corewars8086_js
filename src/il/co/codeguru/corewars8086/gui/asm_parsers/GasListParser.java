package il.co.codeguru.corewars8086.gui.asm_parsers;


import elemental2.dom.DocumentFragment;
import il.co.codeguru.corewars8086.gui.CodeEditor;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.war.WarriorRepository;

import java.util.ArrayList;

public class GasListParser implements IListParser {

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
    
    @Override
    public boolean parseLst(String lsttext, StringBuilder opcodesText, ArrayList<CodeEditor.LstLine> m_currentListing)
    {
        Console.log(lsttext);

        String[] lines = lsttext.split("\\n");

        int lineIndex = 1; // does not increment in warning lines that appear in the listing file
        CodeEditor.LstLine prevLine = null;
        int totalOpcodeCount = 0;
        for(int i = 0; i < lines.length; ++i)
        {
            String line = lines[i];
            Field state = Field.START_SPACE;
            CodeEditor.LstLine l = new CodeEditor.LstLine();

            int indexStart = 0, addressStart = 0, opcodeStart = 0;
            int charsBeforeCode = 0; // number of characters after the space after address and before the code. used fo not missing indentation
            for(int j = 0; j < line.length(); ++j)
            {
                char c = line.charAt(j);
                switch(state) {
                    case START_SPACE:
                        if (TextUtils.isDigit(c)) {
                            indexStart = j;
                            state = Field.INDEX;
                        }
                        else if (line.equals("NO DEFINED SYMBOLS")) {
                            return true; // signifies the end of the actual opcode listing
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

                        state = Field.OPCODE;
                        opcodeStart = j;

                        break;
                    case OPCODE:
                        boolean islast = (j == line.length() - 1);
                        if (c == '*') {
                            state = Field.WARNING;
                        }
                        else if (!islast && charsBeforeCode < 8)
                            ++charsBeforeCode; // take anything as long as its in the field size of the opcode. need this sinc resb adds spaces
                        else if (c == '\t' || islast) { // continueation lines of a string definition end in the middle of the opcode field.

                            l.fullOpcode = line.substring(opcodeStart, j);
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
                        else if (c != ' ' || charsBeforeCode == 9) {
                            state = Field.CODE;
                            l.code = line.substring(j);
                        }
                        else
                            ++charsBeforeCode;
                        break;
                    case CODE:
                        break; // don't care about the code part, we already have that from the input
                    case PARSE_ERR:
                        Console.log("ERROR: parsing list file! " + Integer.toString(i) + ":" + Integer.toString(j) + "\n" + lsttext);
                        return false;
                } // switch
                if (state == Field.WARNING)
                    break; // stop parsing line
            } // for j in line chars
            if (state == Field.WARNING)
                continue; // skip this line
            if (l.lineNum > lineIndex)
            {  // this can happen if there is a \ at the end of a line, extending it to the next line
                // so the next line doesn't exist in the line count, we need to just skip it in the output
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
                prevLine.opcodesCount = TextUtils.countDigits(prevLine.fullOpcode) / 2;
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

        return true;        
        

    }

    @Override
    public char[] parseStdout(String stdoutText, DocumentFragment asmElem, StringBuilder stdoutShorten, ArrayList<Integer> m_lineOffsets) {
        return new char[0];
    }
}