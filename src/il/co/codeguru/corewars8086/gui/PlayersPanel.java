package il.co.codeguru.corewars8086.gui;


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
        public String asmText = "";
        public byte[] bin = new byte[0];
    }

    public static class PlayerInfo {
        public PlayerInfo(String nm) {
            name = nm;
            code[0] = new Code();
            code[1] = new Code();
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
        $wnd.j_addPlayer =    $entry(function(s) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::addPlayer(Ljava/lang/String;)(s) });
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


    public void addPlayer(String name) {
        if (name == null)
            return;
        if (findPlayer(name) != null)
            throw new RuntimeException("name already taken" + name);
        m_players.add(new PlayerInfo(name));
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
    }

    // from CodeEditor
    public void updateText(String text) {
        if (m_inEditor == null)
            return;
        m_inEditor.asmText = text;
    }

}