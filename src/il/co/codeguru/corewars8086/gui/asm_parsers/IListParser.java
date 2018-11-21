package il.co.codeguru.corewars8086.gui.asm_parsers;

import elemental2.dom.DocumentFragment;
import il.co.codeguru.corewars8086.gui.CodeEditor;

import java.util.ArrayList;

public interface IListParser {
    boolean parseLst(String lsttext, StringBuilder opcodesText, ArrayList<CodeEditor.LstLine> m_currentListing);
    char[] parseStdout(String stdoutText, DocumentFragment asmElem, StringBuilder stdoutShorten, ArrayList<Integer> m_lineOffsets);
}