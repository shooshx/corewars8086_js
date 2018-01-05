package il.co.codeguru.corewars8086.gui;


import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.gui.widgets.Console;

import java.util.ArrayList;

public class CodeEditor
{
    private HTMLElement asm_edit, asm_output, opcodes_edit;

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


    public CodeEditor() {
        asm_edit = (HTMLElement)DomGlobal.document.getElementById("asm_edit");
        asm_output = (HTMLElement)DomGlobal.document.getElementById("asm_output");
        opcodes_edit = (HTMLElement)DomGlobal.document.getElementById("opcodes_edit");

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

    private String parseLst(String lsttext, String asmtext)
    {
        String[] lines = lsttext.split("\\n");
        m_currentListing.clear();
        StringBuilder opcodesText = new StringBuilder();

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
                        return null;
                } // switch
                if (state == Field.WARNING)
                    break; // stop parsing line
            } // for j in line chars
            if (state == Field.WARNING)
                continue; // skip this line
            if (l.lineNum != lineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum));
                return null;
            }
            ++lineIndex;
            m_currentListing.add(l);
            opcodesText.append(l.opcode);
            opcodesText.append("<br>");
        }

        // if text doen't end with new line, delete the one added to opcodes
        //if (asmtext.charAt(asmtext.length() - 1) != '\n')
         //   opcodesText.deleteCharAt(opcodesText.length() - 1);

        return opcodesText.toString();
    }

    private static native String innerText(HTMLElement elem) /*-{
        return elem.innerText
    }-*/;

    public void asm_edit_changed() {
        if (asm_edit.innerHTML.isEmpty()) {
            asm_output.innerHTML = "";
            opcodes_edit.innerHTML = "";
            Console.log("~Empty input");
            return;
        }

        int retcode = run_nasm("player1.asm", innerText(asm_edit), "player1.lst");
        String stdout = get_stdout();
        asm_output.innerHTML = stdout; // could be just warnings

        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            opcodes_edit.innerHTML = "";
            Console.log("~Assembler error");
            return;
        }

        String output = read_file("player1.lst");
        if (output.isEmpty()) {
            m_currentListing.clear();
            opcodes_edit.innerHTML = "";
            Console.log("~Empty output");
            return;
        }

        String opcodes = parseLst(output, asm_edit.innerHTML);
        if (opcodes == null) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.log("listing parsing error");
            return;
        }
        opcodes_edit.innerHTML = opcodes;
        Console.log("~OK");

    }

}