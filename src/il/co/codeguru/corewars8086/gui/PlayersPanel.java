package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Int8ArrayNative;
import com.google.gwt.typedarrays.shared.ArrayBuffer;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.war.*;
import org.eclipse.jdt.internal.compiler.codegen.IntegerCache;

import java.util.ArrayList;

public class PlayersPanel
{
    public enum EWarriorType {
        SINGLE,
        TWO_IDENTICAL,
        TWO_DIFFERENT
    }

    public static class Breakpoint {
        public Breakpoint(int _lineNum) {
            lineNum = _lineNum;
            //arenaAddr = _arenaAddr;
        }
        public int lineNum; // 1 based line number, -1 means there's no line number (debug only breakpoint)
        //public int arenaAddr; // breakpoints addd
    }

    public static class Code {
        public Code(PlayerInfo p, int idx) {
            player = p;
            index = idx;
            label = p.label + Integer.toString(idx); // p.label is a single letter, index is 0 or 1
            breakpoints = new ArrayList<Breakpoint>();
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
        public String label; // the label of the player + the index of the warrior (0,1), for instance A0, A1
        public String asmText = "";
        public byte[] bin = null;  // can be null if last output was empty
        public boolean lastCompileOk = true;
        public ArrayList<CodeEditor.LstLine> lines; //managed by the editor
        public boolean startAddrRandom = true;
        public String startAddress = "A000"; // from UI, as given from the input, may fail to parse address
        public ArrayList<Breakpoint> breakpoints;

    }

    public static class PlayerInfo {
        public PlayerInfo(String lbl, String ttl) {
            label = lbl;
            title = ttl;
            code[0] = new Code(this,0);
            code[1] = new Code(this,1);
        }

        public String getName() {
            return title;
        }
        public void setWType(EWarriorType v) {
            wtype = v;
        }
        public int activeCodes() {
            return (wtype == EWarriorType.SINGLE) ? 1:2;
        }

        public boolean isEnabled = true; // the checkbox next to the player
        public String label;  // 'A', 'B' etc, the string on the elements of the player
        public String title;  // 'Player A'
        public Code[] code = new Code[2];
        public EWarriorType wtype = EWarriorType.SINGLE;
    }

    private CompetitionWindow m_mainWnd;
    private ArrayList<PlayerInfo> m_players = new ArrayList<PlayerInfo>();
    private Code m_inEditor = null; // point to the above ArrayList
    private boolean m_isDebugMode = false;


    public PlayersPanel(CompetitionWindow mainWnd) {
        m_mainWnd = mainWnd;

        //addPlayerBtn = (HTMLElement)DomGlobal.document.getElementById("addPlayerBtn");

        exportMethods();
        //Console.log( findPlayer("bla") == null ? "null":"not-null");
    }

    // http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJSNI.html
    public native void exportMethods() /*-{
        var that = this
        $wnd.j_srcSelectionChanged = $entry(function(s,i) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_srcSelectionChanged(Ljava/lang/String;I)(s,i) });
        $wnd.j_addPlayer =    $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_addPlayer(Ljava/lang/String;Ljava/lang/String;)(a,b) });
        $wnd.j_removePlayer = $entry(function(s) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_removePlayer(Ljava/lang/String;)(s) });
        $wnd.j_changedWType = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_changedWType(Ljava/lang/String;Ljava/lang/String;)(a,b) });
        $wnd.j_updateTitle = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_updateTitle(Ljava/lang/String;Ljava/lang/String;)(a,b) });
        $wnd.j_demoDebugPlayers = $entry(function() { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_demoDebugPlayers()() });
        $wnd.j_loadAddrChanged = $entry(function(s,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_loadAddrChanged(Ljava/lang/String;Z)(s,b) });
        $wnd.j_loadBinary      = $entry(function(b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_loadBinary(Lcom/google/gwt/typedarrays/shared/ArrayBuffer;)(b) });
        $wnd.j_enablePlayer    = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_enablePlayer(Ljava/lang/String;Z)(a,b) });
        $wnd.j_getCurrentName  = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_getCurrentName()() });
        $wnd.j_getCurrentBin  = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.PlayersPanel::j_getCurrentBin()() });
    }-*/;

    public PlayerInfo findPlayer(String label) {
        //Console.log("###" + Integer.toString(m_players.size()));
        for(PlayerInfo p : m_players) {
            if (p.label.equals(label))
                return p;
        }
        return null;
    }


    public Code findCode(String label) {
        // format of code label is for player is PA1,PA2,PB1... and for zombie Z10,Z20..
        PlayerInfo pi = findPlayer(label.substring(0,label.length()-1));
        if (pi == null)
            return null;
        int ci = label.charAt(label.length()-1) - '0';
        return pi.code[ci];
    }

    public native void addPlayerPanel() /*-{
        $wnd.addPlayersPanel();
    }-*/;
    public native void changedWType(String label, String v) /*-{
        $wnd.changedWType(label, v, true);
    }-*/;

    private void demo_simple() {
        m_inEditor = m_players.get(1).code[0];
        m_inEditor.asmText = "start:\ninc cx\njmp start";
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);

        m_inEditor = m_players.get(0).code[0];
        //m_inEditor.asmText = "start:\ninc ax    ;hello\n          ;world\nadd WORD[bx],1234h\nmov ax,5678h\njmp start";
        m_inEditor.asmText = "start:\nmov bx, ax\nadd bx, 12\nloop:\nmov byte[bx],0x11\ninc bx\njmp loop";
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);
    }

    private void demo_like_original() {
        addPlayerPanel(); // this demo has 4 players. initialization of the page adds 2 panels
        addPlayerPanel();

        String shooterCode = " PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n";

        m_inEditor = m_players.get(1).code[0];
        m_inEditor.asmText = shooterCode;
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);
        m_inEditor = m_players.get(1).code[1];
        m_inEditor.asmText = shooterCode;
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);
        m_inEditor.player.wtype = EWarriorType.TWO_DIFFERENT;
        updateTitle("shooterA");
        changedWType(m_inEditor.player.label, "TWO_DIFFERENT");

        m_inEditor = m_players.get(2).code[0];
        m_inEditor.asmText = shooterCode;
        m_inEditor.player.wtype = EWarriorType.SINGLE;
        updateTitle("shooterB");
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);

        m_inEditor = m_players.get(3).code[0];
        m_inEditor.asmText = shooterCode;
        m_inEditor.player.wtype = EWarriorType.SINGLE;
        updateTitle("shooterC");
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);


        // the one that is selected at the end
        String bimpCode = "PUSH DS\nPOP ES\nXCHG DI, AX\nADD WORD DI, 0xC\nMOV SI, DI\nADD WORD SI, 0xA\nSTD\nDEC DI\nDEC DI\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nINC DI\nINC DI\nJMP DI\n";
        m_inEditor = m_players.get(0).code[0];
        updateTitle("bimp");
        m_inEditor.asmText = bimpCode;
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);
        m_inEditor = m_players.get(0).code[1];
        m_inEditor.asmText = bimpCode;
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, this);
        m_inEditor.player.wtype = EWarriorType.TWO_DIFFERENT;
        changedWType(m_inEditor.player.label, "TWO_DIFFERENT");
        m_inEditor = m_players.get(0).code[0];
    }

    public void j_demoDebugPlayers() {
        demo_like_original();
    }

    public native void setButtonColor(String color, String label) /*-{
        // label looks like pC0
        var player_letter = label[1]
        var codenum = label[2]
        var id = ""
        if (label[0] == 'p')
            id = "sel_code_lbl_w" + (parseInt(codenum) + 1) + "_p" + player_letter
        else if (label[0] == 'z')
            id = "player_name_lbl_z" + player_letter
        //console.log("~~", label, id)
        var e = $wnd.document.getElementById(id)
        if (e === null) {
            console.error("did not find element", id, label)
            return
        }
        e.style.boxShadow = "inset " + color + " 0px -1px 5px, inset " + color + " 0px 1px 5px"
    }-*/;


    // from js
    public void j_addPlayer(String label, String title) {
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

    public native void setPressedCodeBut(String label, int num) /*-{
        var idd = "sel_code_w" + num + "_" + label
        //console.log("~~" + idd)
        $wnd.document.getElementById(idd).checked = true;
    }-*/;

    public void setSelectedCode(String label, int code_num) {
        setPressedCodeBut(label, code_num);
        j_srcSelectionChanged(label, code_num);
    }


    // from js
    public void j_removePlayer(String label) {
        for(PlayerInfo p : m_players) {
            if (label.equals(p.label)) {
                m_players.remove(p);
                Console.log("Removed " + label + " " + Integer.toString(m_players.size()));
                if (m_inEditor.player == p && m_players.size() > 0) { // removing currently selected player
                    setSelectedCode(m_players.get(0).label, 1);
                }
                return;
            }
        }
        throw new RuntimeException("player not found" + label);
    }

    public void j_enablePlayer(String label, boolean enable) {
        for(PlayerInfo p : m_players) {
            if (label.equals(p.label)) {
                p.isEnabled = enable;
                return;
            }
        }
        throw new RuntimeException("player not found" + label);
    }

    // from js
    // called by button press and also at the very beginning
    public void j_srcSelectionChanged(String playerLabel, int num) {
        //Console.log("~~~~" + label + Integer.toString(num));

        PlayerInfo p = findPlayer(playerLabel);
        m_inEditor = null;
        assert p != null: "did not find player with label " + playerLabel;

        m_inEditor = p.code[num - 1];
        m_mainWnd.m_codeEditor.playerSelectionChanged(m_inEditor, null); // don't pass playerPanel since we don't want it to return update to us
        m_mainWnd.battleFrame.cpuframe.setSelectedPlayer(m_inEditor.getLabel(), m_isDebugMode);

        // in editor view, update the botton load address gui
        updateLoadAddr(m_inEditor.startAddress, m_inEditor.startAddrRandom);

        m_mainWnd.srcSelectionChanged(m_inEditor.getLabel());
    }

    public void j_changedWType(String label, String v) {
        PlayerInfo p = findPlayer(label);
        p.setWType(EWarriorType.valueOf(v));

        reWriteButtonsLabels(p);
    }

    private native void updateLoadAddr(String value, boolean isRand) /*-{
        $wnd.updateLoadAddr(value, isRand);
    }-*/;

    public void j_loadAddrChanged(String value, boolean isRand) {
        if (m_inEditor == null)
            return;
        m_inEditor.startAddrRandom = isRand;
        m_inEditor.startAddress = value;
    }


    private void reWriteButtonsLabels(PlayerInfo p)
    {
        String vu = p.title.replace(' ', '_');

        // maintain the convention for naming the warriors of a player
        switch(p.wtype) {
        case SINGLE:
            p.code[0].name = vu;
            if (p.label.charAt(0) != 'z') { // if it's a zombie, it doesn't have this element and the name was written in my caller
                ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_" + p.label)).innerHTML = vu;
            }
            break;
        case TWO_IDENTICAL:
            String vup = vu + "1,2";
            p.code[0].name = vup;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_" + p.label)).innerHTML = vup;
            break;
        case TWO_DIFFERENT:
            String vu1 = vu + "1", vu2 = vu + "2";
            p.code[0].name = vu1;
            p.code[1].name = vu2;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w1_" + p.label)).innerHTML = vu1;
            ((HTMLElement)DomGlobal.document.getElementById("sel_code_lbl_w2_" + p.label)).innerHTML = vu2;
            break;
        }
    }

    public Code[] getFiles(char prefix) {
        int count = 0;
        for(PlayerInfo p: m_players)
            if (p.label.charAt(0) == prefix)
                count += p.activeCodes();

        int i = 0;
        Code[] c = new Code[count];
        for(PlayerInfo p: m_players) {
            if (p.label.charAt(0) != prefix)
                continue;
            c[i++] = p.code[0];
            if (p.wtype != EWarriorType.SINGLE)
                c[i++] = p.code[1];
        }

        return c;
    }

    public Code[] getFiles() {
        return getFiles('p');
    }

    public Code[] getZombies() {
        return getFiles('z');
    }

    public Code getCodeInEditor() {
        return m_inEditor;
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
        ((HTMLElement)DomGlobal.document.getElementById("player_name_lbl_" + pt)).innerHTML = v;

        reWriteButtonsLabels(m_inEditor.player);
    }

    
    public void j_updateTitle(String label, String v) {
        PlayerInfo p = findPlayer(label);
        p.title = v;

        reWriteButtonsLabels(p);
    }



    public void updateAsmResult(boolean compileOk, byte[] binbuffer, ArrayList<CodeEditor.LstLine> lines)
    {
        if (m_inEditor == null)
            return;
        //Console.log("LINES " + m_inEditor.label + " " + ((lines == null)?"NULL":Integer.toString(lines.size())));
        m_inEditor.bin = binbuffer;
        m_inEditor.lastCompileOk = compileOk;
        m_inEditor.lines = lines;
    }

    public boolean checkPlayersReady()
    {
        if (m_players.size() == 0) {
            Console.err_box("No players added");
            return false;
        }

        int countEnabled = 0;
        for(int i = 0; i < m_players.size(); ++i) {
            PlayerInfo p = m_players.get(i);
            if (!p.isEnabled)
                continue;
            ++countEnabled;

            if (p.wtype == EWarriorType.TWO_IDENTICAL) {
                p.code[1].bin = p.code[0].bin;
                p.code[1].lines = p.code[0].lines;
                p.code[1].lastCompileOk = p.code[0].lastCompileOk;
            }

            for(int ci = 0; ci < p.activeCodes(); ++ci) {
                Code c = p.code[ci];
                if (!c.lastCompileOk) {
                    Console.err_box("Errors in code " + c.getName() + " of player " + p.getName());
                    return false;
                }
                if (c.getBin() == null || c.getBin().length == 0) {
                    Console.err_box("No code in " + c.getName() + " of player " + p.getName());
                    return false;
                }
            }
        }
        if (countEnabled == 0) {
            Console.err_box("No enabled players");
            return false;
        }

        return true;
    }


    private void ensureSelectedPlayerActive() {
        if (m_inEditor.player.isEnabled)
            return;
        // there must be an enabled player since we tested that
        for(int i = 0; i < m_players.size(); ++i) {
            PlayerInfo p = m_players.get(i);
            if (!p.isEnabled)
                continue;
            setSelectedCode(p.label, 1);
            break;
        }
    }

    public void setDebugMode(boolean v) {
        ensureSelectedPlayerActive();
        m_isDebugMode = v;
    }

    public void j_loadBinary(ArrayBuffer buf) {
        int len = buf.byteLength();
        if (len == 0) {
            Console.err_box("loaded file is empty, ignoring");
            return;
        }
        if (len > WarriorRepository.MAX_WARRIOR_SIZE) {
            Console.err_box("loaded file is bigger than the allowed 512 bytes, ignoring");
            //buf = buf.slice(0, WarriorRepository.MAX_WARRIOR_SIZE);
            //len = buf.byteLength();
            return;
        }
        //Console.log("~~~" + buf.byteLength());

        Int8ArrayNative arr = Int8ArrayNative.create(buf);
        byte[] ba = new byte[len];
        for(int i = 0; i < len; ++i)
            ba[i] = arr.get(i);

        m_inEditor.bin = ba;
        m_inEditor.asmText = "";
        m_inEditor.lastCompileOk = true; // it's a binary that means it was compiled
        m_inEditor.breakpoints.clear(); // any breakpoints that were no longer matter

        m_mainWnd.m_codeEditor.loadedNewBinary(m_inEditor, this);

    }

    public String j_getCurrentName() {
        return m_inEditor.getName();
    }

    public byte[] j_getCurrentBin() {
        return m_inEditor.getBin();
    }

}