package il.co.codeguru.corewars8086.gui;


import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.gui.widgets.Console;

import java.util.ArrayList;

public class PlayersPanel
{
    public enum EWarriorType {
        SINGLE,
        TWO_IDENTICAL,
        TWO_DIFFERENT
    }
    public static class Code {
        public Code(PlayerInfo p, int idx) {
            player = p;
            index = idx;
            label = p.label + Integer.toString(idx);
        }
        public String getName() {
            return name;
        }
        public byte[] getBin() {
            return bin;
        }
        public String getLabel() { return label; }

        public PlayerInfo player; // reference back to the player this is in
        public int index; // 0 or 1 - there are two snippets per player
        public String name; // name of this code snippet (name on the button)
        public String label; // the label of the player + the index of the warrior, for instance A0, A1
        public String asmText = "";
        public byte[] bin = null;  // can be null if last output was empty
        public boolean lastCompileOk = true;
    }

    public static class PlayerInfo {
        public PlayerInfo(String lbl, String ttl) {
            label = lbl;
            title = ttl;
            code[0] = new Code(this, 0);
            code[1] = new Code(this,1);
        }

        public String getName() {
            return title;
        }
        public void setWType(EWarriorType v) {
            wtype = v;
            activeCodes = (v == EWarriorType.SINGLE) ? 1:2;
        }

        public boolean isEnabled = true; // the checkbox next to the player TBD
        public String label;  // 'A', 'B' etc, the string on the elements of the player
        public String title;  // 'Player A'
        public Code[] code = new Code[2];
        public EWarriorType wtype = EWarriorType.SINGLE;
        public int activeCodes = 1; // depends on wtype
    }

    private CompetitionWindow m_mainWnd;
    private ArrayList<PlayerInfo> m_players = new ArrayList<PlayerInfo>();
    private Code m_inEditor = null; // point to the above ArrayList
    private HTMLElement addPlayerBtn;

    public PlayersPanel(CompetitionWindow mainWnd) {
        m_mainWnd = mainWnd;

        addPlayerBtn = (HTMLElement)DomGlobal.document.getElementById("addPlayerBtn");

        exportMethods();
        //Console.log( findPlayer("bla") == null ? "null":"not-null");
    }

    // http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJSNI.html
    public native void exportMethods() /*-{
        var that = this
        $wnd.j_srcSelectionChanged = $entry(function(s,i) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::srcSelectionChanged(Ljava/lang/String;I)(s,i) });
        $wnd.j_addPlayer =    $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::addPlayer(Ljava/lang/String;Ljava/lang/String;)(a,b) });
        $wnd.j_removePlayer = $entry(function(s) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::removePlayer(Ljava/lang/String;)(s) });
        $wnd.j_changedWType = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::changedWType(Ljava/lang/String;Ljava/lang/String;)(a,b) });
        $wnd.j_demoDebugPlayers = $entry(function() { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_demoDebugPlayers()() });
    }-*/;

    public PlayerInfo findPlayer(String label) {
        //Console.log("###" + Integer.toString(m_players.size()));
        for(PlayerInfo p : m_players) {
            if (p.label.equals(label))
                return p;
        }
        return null;
    }

    public void j_demoDebugPlayers() {
        m_inEditor = m_players.get(1).code[0];
        m_inEditor.asmText = "start:\ninc ax\njmp start";
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);

        m_inEditor = m_players.get(0).code[0];
        m_inEditor.asmText = "start:\ninc cx\njmp start";
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);

    }


    // from js
    public void addPlayer(String label, String title) {
        if (label == null)
            return;
        if (findPlayer(label) != null)
            throw new RuntimeException("label already taken " + label);
        PlayerInfo p = new PlayerInfo(label, title);
        String tu = title.replace(' ', '_');
        p.code[0].name = tu + "1";
        p.code[1].name = tu + "2";
        m_players.add(p);
        Console.log("Added " + label + " " + Integer.toString(m_players.size()));
    }
    // from js
    public void removePlayer(String label) {
        for(PlayerInfo p : m_players) {
            if (label.equals(p.label)) {
                m_players.remove(p);
                Console.log("Removed " + label + " " + Integer.toString(m_players.size()));
                return;
            }
        }
        throw new RuntimeException("player not found" + label);
    }

    // from js
    public void srcSelectionChanged(String label, int num) {
        //Console.log("~~~~" + label + Integer.toString(num));

        PlayerInfo p = findPlayer(label);
        m_inEditor = null;
        if (p == null)
            return;
        m_inEditor = p.code[num - 1];
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, null); // don't pass playerPanel since we don't want it to return update to us
        m_mainWnd.battleFrame.cpuframe.setSelectedPlayer(m_inEditor.getLabel());
    }

    public void changedWType(String label, String v) {
        PlayerInfo p = findPlayer(label);
        p.setWType(EWarriorType.valueOf(v));

        reWriteButtonsLabels(p);
    }


    private void reWriteButtonsLabels(PlayerInfo p)
    {
        String vu = p.title.replace(' ', '_');

        // maintain the convention for naming the warriors of a player
        switch(p.wtype) {
        case SINGLE:
            p.code[0].name = vu;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_p" + p.label)).innerHTML = vu;
            break;
        case TWO_IDENTICAL:
            String vup = vu + "1,2";
            p.code[0].name = vup;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_p" + p.label)).innerHTML = vup;
            break;
        case TWO_DIFFERENT:
            String vu1 = vu + "1", vu2 = vu + "2";
            p.code[0].name = vu1;
            p.code[1].name = vu2;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_p" + p.label)).innerHTML = vu1;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w2_p" + p.label)).innerHTML = vu2;
            break;
        }
    }

    public Code[] getFiles() {
        int count = 0;
        for(PlayerInfo p: m_players)
            count += p.activeCodes;

        int i = 0;
        Code[] c = new Code[count];
        for(PlayerInfo p: m_players) {
            c[i++] = p.code[0];
            if (p.wtype != EWarriorType.SINGLE)
                c[i++] = p.code[1];
        }

        return c;
    }

    public Code[] getZombies() {
        return null;
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

        m_inEditor.player.title = v;

        String pt = m_inEditor.player.label;
        ((HTMLElement)DomGlobal.document.getElementById("player_name_lbl_p" + pt)).innerHTML = v;

        reWriteButtonsLabels(m_inEditor.player);
    }

    public void updateAsmResult(boolean compileOk, byte[] binbuffer)
    {
        if (m_inEditor == null)
            return;
        m_inEditor.bin = binbuffer;
        m_inEditor.lastCompileOk = compileOk;
    }

    public boolean checkPlayersReady()
    {
        if (m_players.size() == 0) {
            Console.error("No players added");
            return false;
        }

        int countEnabled = 0;
        for(int i = 0; i < m_players.size(); ++i) {
            PlayerInfo p = m_players.get(i);
            if (!p.isEnabled)
                continue;
            ++countEnabled;
            for(int ci = 0; ci < p.activeCodes; ++ci) {
                Code c = p.code[ci];
                if (!c.lastCompileOk) {
                    Console.error("Errors in code " + c.getName() + " of player " + p.getName());
                    return false;
                }
                if (c.getBin() == null || c.getBin().length == 0) {
                    Console.error("No code in " + c.getName() + " of player " + p.getName());
                    return false;
                }
            }
        }
        if (countEnabled == 0) {
            Console.error("No enabled players");
            return false;
        }

        return true;
    }

    public void setDebugMode(boolean v) {

        if (v) {
            addPlayerBtn.style.display = "none";
        }
        else {
            addPlayerBtn.style.display = "";
        }
    }

}