package il.co.codeguru.corewars8086.gui;


import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.gui.widgets.Console;

import java.util.ArrayList;

class PlayersPanel
{
    public enum EWarriorType {
        SINGLE,
        TWO_IDENTICAL,
        TWO_DIFFERENT
    }
    public static class Code {
        public Code(String pn, int idx) {
            playerName = pn;
            index = idx;
        }

        public String playerName; // name of the player we are in
        public int index; // 0 or 1 - there are two snippets per player
        public String name; // name of this code snippet (name on the button)
        public String asmText = "";
        public byte[] bin = new byte[0];
    }

    public static class PlayerInfo {
        public PlayerInfo(String nm) {
            name = nm;
            code[0] = new Code(nm, 0);
            code[1] = new Code(nm,1);
        }

        public String name;  // A for 'Player A'
        public Code[] code = new Code[2];
        public EWarriorType wtype = EWarriorType.SINGLE;
    }

    private CodeEditor m_codeEditor;
    private ArrayList<PlayerInfo> m_players = new ArrayList<PlayerInfo>();
    private Code m_inEditor = null; // point to the above ArrayList

    public PlayersPanel(CodeEditor editor) {
        m_codeEditor = editor;

        exportMethods();
        Console.log( findPlayer("bla") == null ? "null":"not-null");
    }

    // http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJSNI.html
    public native void exportMethods() /*-{
        var that = this
        $wnd.j_srcSelectionChanged = $entry(function(s,i) {that.@il.co.codeguru.corewars8086.gui.PlayersPanel::srcSelectionChanged(Ljava/lang/String;I)(s,i) });
        $wnd.j_addPlayer =    $entry(function(a,b,c) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::addPlayer(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)(a,b,c) });
        $wnd.j_removePlayer = $entry(function(s) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::removePlayer(Ljava/lang/String;)(s) });
    }-*/;

    public PlayerInfo findPlayer(String name) {
        //Console.log("###" + Integer.toString(m_players.size()));
        for(PlayerInfo p : m_players) {
            if (p.name.equals(name))
                return p;
        }
        return null;
    }


    public void addPlayer(String name, String codeName1, String codeName2) {
        if (name == null)
            return;
        if (findPlayer(name) != null)
            throw new RuntimeException("name already taken" + name);
        PlayerInfo p = new PlayerInfo(name);
        p.code[0].name = codeName1;
        p.code[1].name = codeName2;
        m_players.add(p);
        Console.log("Added " + name + " " + Integer.toString(m_players.size()));
    }
    public void removePlayer(String name) {
        for(PlayerInfo p : m_players) {
            if (name.equals(p.name)) {
                m_players.remove(p);
                Console.log("Removed " + name + " " + Integer.toString(m_players.size()));
                return;
            }
        }
        throw new RuntimeException("player not found" + name);
    }


    public void srcSelectionChanged(String name, int num) {
        Console.log("~~~~" + name + Integer.toString(num));

        PlayerInfo p = findPlayer(name);
        m_inEditor = null;
        if (p == null)
            return;
        m_inEditor = p.code[num - 1];
        m_codeEditor.setText(m_inEditor.asmText);
        m_codeEditor.setTitle(m_inEditor.name);
    }

    // from CodeEditor
    public void updateText(String text) {
        if (m_inEditor == null)
            return;
        m_inEditor.asmText = text;
    }

    public void updateTitle(String v) {
        if (m_inEditor == null)
            return;
        m_inEditor.name = v;

        //sel_code_lbl_w1_pA
        String buttonId = "sel_code_lbl_w" + Integer.toString(m_inEditor.index + 1) + "_p" + m_inEditor.playerName;
        HTMLElement buttonLabel = (HTMLElement) DomGlobal.document.getElementById(buttonId);

        buttonLabel.innerHTML = v;
    }

}