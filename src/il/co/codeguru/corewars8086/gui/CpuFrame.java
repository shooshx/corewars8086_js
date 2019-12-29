package il.co.codeguru.corewars8086.gui;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.war.Competition;
import il.co.codeguru.corewars8086.war.CompetitionEventListener;
import il.co.codeguru.corewars8086.war.War;

import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.war.Warrior;

import java.util.Dictionary;
import java.util.HashMap;
//import java.awt.Font;
//import java.awt.GridLayout;
//import java.awt.event.ActionEvent;
//import java.awt.event.ActionListener;

//import javax.swing.JButton;
//import javax.swing.JComboBox;
//import javax.swing.JFrame;
//import javax.swing.JOptionPane;
//import javax.swing.JPanel;
//import javax.swing.JTextArea;


public class CpuFrame  implements CompetitionEventListener, MemoryEventListener {

	//private War currentWar;
	private CompetitionWindow m_mainwnd;
	private String m_currentWarriorLabel = null;
	private int m_currentWarriorIndex = -1; // faster to use index than label during debug

	private Competition competition;
	private int m_base = 16;


	private RegisterField regAX, regBX, regCX, regDX,
			regSI, regDI, regBP, regSP,
			regIP, regCS, regDS, regSS,
			regES, regE, regF;

	private FlagFields flagOF, flagDF, flagIF, flagTF,
			flagSF, flagZF, flagAF, flagPF,
			flagCF;

	private HTMLElement cpuPanel;

	public MemRegionView stackView;
	public MemRegionView sharedMemView;

	public void setVisible(boolean v) {
		if (v)
			cpuPanel.style.display = "";
		else
			cpuPanel.style.display = "none";
	}

	public void setSelectedPlayer(String playerLabel, boolean isDebugMode) {
		m_currentWarriorLabel = playerLabel;
		m_currentWarriorIndex = -1; // invalidate

		if (isDebugMode) {
			// need to do this first so that reading the registers would put this ss:sp in the right place
			initMemRegions(false);
			updateFields();
			resetChanged();
		}
	}


	public int regChanged_callback(String name, String value) {
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return 1;

		CpuState state = currentWar.getWarriorByLabel(m_currentWarriorLabel).getCpuState();

		int v;

		value = value.trim();
		if (value.length() > 2 && value.charAt(0) == '0' && value.charAt(1) == 'x')
			value = value.substring(2);

		try {
			if (m_base == 10)
				v = Integer.parseInt(value, 10);
			else
				v = Integer.parseInt(value, 16);
		} catch (NumberFormatException e) {
			m_mainwnd.errorPreventsStep(true, "Register value parse error");
			return (m_base == 10) ? -2000000 : -1000000;
		}
		if (v < 0 || v > 0xffff) {
			m_mainwnd.errorPreventsStep(true, "Register value out out range");
			return -3000000;
		}
		m_mainwnd.errorPreventsStep(false, null);

		short sv = (short) v;

		switch (name) {
			case "AX":
				state.setAX(sv);
				break;
			case "BX":
				state.setBX(sv);
				break;
			case "CX":
				state.setCX(sv);
				break;
			case "DX":
				state.setDX(sv);
				break;

			case "SI":
				state.setSI(sv);
				break;
			case "DI":
				state.setDI(sv);
				break;
			case "BP":
				state.setBP(sv);
				break;
			case "SP":
				state.setSP(sv);
				stackView.moveToLine(RealModeAddress.linearAddress(state.getSS(), sv));
				break;

			case "IP":
				state.setIP(sv);
				changedCSIP();
				break;
			case "CS":
				state.setCS(sv);
				changedCSIP();
				break;
			case "DS":
				state.setDS(sv);
				break;
			case "SS":
				state.setSS(sv);
				stackView.moveToLine(RealModeAddress.linearAddress(sv, state.getSP()));
				break;
			case "ES":
				state.setES(sv);
				break;

			case "Energy":
				state.setEnergy(sv);
				break;
			case "Flags":
				state.setFlags(sv);
				updateFlagBoxes(state);
				break;
		}

		// reeval watch - might change depending on the register that just changed
		m_stateAccess.state = state;
		for (WatchEntry entry : m_watches.values()) {
			entry.evalAndDisplay();
		}

		return v;
	}

	public void changedCSIP() {
		m_mainwnd.m_codeEditor.onEndRound(); // redraw the ip indicator

		m_mainwnd.battleFrame.onEndRound(); // make it redraw ip pointers.

	}

	public void onMemoryWrite(RealModeAddress address, byte value) {
		for (WatchEntry entry : m_watches.values()) {
			entry.evalAndDisplay();
		}
	}

	public void onWriteState(MemoryEventListener.EWriteState state) {
	}

	public void updateFlagBoxes(CpuState state) {
		flagOF.setValue(state.getOverflowFlag());
		flagDF.setValue(state.getDirectionFlag());
		flagIF.setValue(state.getInterruptFlag());
		flagTF.setValue(state.getTrapFlag());
		flagSF.setValue(state.getSignFlag());
		flagZF.setValue(state.getZeroFlag());
		flagAF.setValue(state.getAuxFlag());
		flagPF.setValue(state.getParityFlag());
		flagCF.setValue(state.getCarryFlag());
	}

	public void flagChanged_callback(String name, boolean v) {
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;

		CpuState state = currentWar.getWarriorByLabel(m_currentWarriorLabel).getCpuState();

		switch (name) {
			case "OF":
				state.setOverflowFlag(v);
				break;
			case "DF":
				state.setDirectionFlag(v);
				break;
			case "IF":
				state.setInterruptFlag(v);
				break;
			case "TF":
				state.setTrapFlag(v);
				break;
			case "SF":
				state.setSignFlag(v);
				break;
			case "ZF":
				state.setZeroFlag(v);
				break;
			case "AF":
				state.setAuxFlag(v);
				break;
			case "PF":
				state.setParityFlag(v);
				break;
			case "CF":
				state.setCarryFlag(v);
				break;
		}
		regF.setValue(state.getFlags());
	}

	public CpuFrame(Competition c, CompetitionWindow mainwnd) {
		exportMethods();
		m_mainwnd = mainwnd;

		this.competition = c;

		cpuPanel = (HTMLElement) DomGlobal.document.getElementById("cpuPanel");


		regAX = new RegisterField("AX", this);
		regBX = new RegisterField("BX", this);
		regCX = new RegisterField("CX", this);
		regDX = new RegisterField("DX", this);

		regSI = new RegisterField("SI", this);
		regDI = new RegisterField("DI", this);
		regBP = new RegisterField("BP", this);
		regSP = new RegisterField("SP", this);

		regIP = new RegisterField("IP", this);
		regCS = new RegisterField("CS", this);
		regDS = new RegisterField("DS", this);
		regSS = new RegisterField("SS", this);
		regES = new RegisterField("ES", this);
		regE = new RegisterField("Energy", this);
		regF = new RegisterField("Flags", this);

		//Flags

		flagOF = new FlagFields("OF", this);
		flagDF = new FlagFields("DF", this);
		flagIF = new FlagFields("IF", this);
		flagTF = new FlagFields("TF", this);
		flagSF = new FlagFields("SF", this);
		flagZF = new FlagFields("ZF", this);
		flagAF = new FlagFields("AF", this);
		flagPF = new FlagFields("PF", this);
		flagCF = new FlagFields("CF", this);

		stackView = new MemRegionView("stackList", "mk");
		sharedMemView = new MemRegionView("sharedMemList", "mh");

		m_parser.m_stateAccess = m_stateAccess;
	}

	public native void exportMethods() /*-{
        var that = this
        $wnd.j_setRegistersBase = $entry(function(b) { that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_setRegistersBase(I)(b) });
        $wnd.j_watchTextChanged = $entry(function(s,i) { return that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_watchTextChanged(Ljava/lang/String;I)(s,i) });
        $wnd.j_addWatch = $entry(function(i) { return that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_addWatch(I)(i) });
        $wnd.j_delWatch = $entry(function(i) { return that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_delWatch(I)(i) });

	}-*/;

	public void j_setRegistersBase(int base) {
		m_base = base;
		regAX.setBase(base);
		regBX.setBase(base);
		regCX.setBase(base);
		regDX.setBase(base);
		regSI.setBase(base);
		regDI.setBase(base);
		regBP.setBase(base);
		regSP.setBase(base);
		regIP.setBase(base);
		regCS.setBase(base);
		regDS.setBase(base);
		regSS.setBase(base);
		regES.setBase(base);
		regE.setBase(base);
		regF.setBase(base);
		// setBase already updates the value if that's ok

		for (WatchEntry entry : m_watches.values()) {
			entry.base = base;
			entry.evalAndDisplay();
		}
	}

	public void resetChanged() {
		regAX.resetChanged();
		regBX.resetChanged();
		regCX.resetChanged();
		regDX.resetChanged();
		regSI.resetChanged();
		regDI.resetChanged();
		regBP.resetChanged();
		regSP.resetChanged();
		regIP.resetChanged();
		regCS.resetChanged();
		regDS.resetChanged();
		regSS.resetChanged();
		regES.resetChanged();
		regE.resetChanged();
		regF.resetChanged();

		flagOF.resetChanged();
		flagDF.resetChanged();
		flagIF.resetChanged();
		flagTF.resetChanged();
		flagSF.resetChanged();
		flagZF.resetChanged();
		flagAF.resetChanged();
		flagPF.resetChanged();
		flagCF.resetChanged();
	}

	
	public void updateFields(){
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;
		if (m_currentWarriorIndex == -1) {
			Warrior w = currentWar.getWarriorByLabel(m_currentWarriorLabel);
			if (w == null) // warrior disabled
				return;
			m_currentWarriorIndex = w.m_myIndex;
		}

		//CpuState state = currentWar.getWarrior(dropMenu.getSelectedIndex()).getCpuState();
		CpuState state = currentWar.getWarrior(m_currentWarriorIndex).getCpuState();

		regAX.setValue( state.getAX());
		regBX.setValue( state.getBX());
		regCX.setValue( state.getCX());
		regDX.setValue( state.getDX());
		regSI.setValue( state.getSI());
		regDI.setValue( state.getDI());
		regBP.setValue( state.getBP());
		regSP.setValue( state.getSP());
		regIP.setValue( state.getIP());
		regCS.setValue( state.getCS());
		regDS.setValue( state.getDS());
		regSS.setValue( state.getSS());
		regES.setValue( state.getES());
		regE.setValue( state.getEnergy());
		regF.setValue( state.getFlags());
		
		updateFlagBoxes(state);
		stackView.moveToLine(RealModeAddress.linearAddress(state.getSS(), state.getSP()));

		// update watches;
		m_stateAccess.state = state;
		for (WatchEntry entry : m_watches.values()) {
            entry.evalAndDisplay();
		}

	}




	private static class StateAccess implements ExpressionParser.IStateAccess {
		public CpuState state;
		public RealModeMemoryImpl memory;

		@Override
		public short getRegisterValue(String name) throws Exception{
		    if (state == null) {
		        throw new Exception("invalid state");
            }
			switch (name) {
				case "AX": return state.getAX();
				case "AL": return state.getAL();
				case "AH": return state.getAH();

				case "BX": return state.getBX();
				case "BL": return state.getBL();
				case "BH": return state.getBH();

				case "CX": return state.getCX();
				case "CL": return state.getCL();
				case "CH": return state.getCH();

				case "DX": return state.getDX();
				case "DL": return state.getDL();
				case "DH": return state.getDH();

				case "SI": return state.getSI();
				case "DI": return state.getDI();
				case "BP": return state.getBP();
				case "SP": return state.getSP();
				case "IP": return state.getIP();
				case "CS": return state.getCS();
				case "DS": return state.getDS();
				case "SS": return state.getSS();
				case "ES": return state.getES();

				case "ENERGY": return state.getEnergy();
				case "FLAGS": return state.getFlags();
			}
			throw new Exception("unknown register name " + name); // should not happen since we check before
		}

		@Override
		public int getIdentifierValue(String name) throws Exception {
		    throw new Exception("unknown identifier " + name);
		}

		@Override
		public int getMemory(int addr, int seg, int size) throws Exception {
			short sseg = (short)seg;
			if (seg == -1)
				sseg = state.getDS();
			int linaddr = RealModeAddress.linearAddress(sseg, (short)addr);
			if (size == 1)
				return memory.readByte(linaddr) & 0xff;
			else
				return memory.readWord(new RealModeAddress(linaddr)) & 0xffff;
		}

	}

	class WatchEntry {
		public ExpressionParser.INode root;
		public HTMLElement resultElem;
		boolean isValid = false;
        int base = 16;

        public void setResult(int v) {
            String sv;
            if (base == 16)
                sv = Format.hex4(v);
            else
                sv = Integer.toString(v);
            setResult(sv);
        }

		public void setResult(String v) {
            Format.setInnerText(resultElem, v);
            resultElem.title = v; // tooltip also shows the same text in case it is obscured
        }

        public void evalAndDisplay() {
            if (!isValid)
                return;
            try {
                int res = root.eval();
                setResult(res);
            } catch (Exception e) {
                Console.log("watch error: " + e.getMessage());
                setResult("Error: " + e.getMessage());
            }
        }
	}

	HashMap<Integer, WatchEntry> m_watches = new HashMap<>();
	StateAccess m_stateAccess = new StateAccess();
	ExpressionParser m_parser = new ExpressionParser();

	void j_addWatch(int watchId) {
        WatchEntry entry = new WatchEntry();
        m_watches.put(watchId, entry);
        entry.resultElem = (HTMLElement)DomGlobal.document.getElementById("watch" + Integer.toString(watchId) + "_val" );
        assert entry.resultElem != null : "did not find watch result element";
        Console.debug("Watchs: " + Integer.toString(m_watches.size()));
    }

    void j_delWatch(int watchId) {
        m_watches.remove(watchId);
    }

    boolean onlySpaces(String s) {
	    for(int i = 0; i < s.length(); ++i) {
	        char c = s.charAt(i);
	        if (c != ' ')
	            return false;
        }
	    return true;
    }

    // returns true if string is not empty or only spaces
	boolean j_watchTextChanged(String s, int watchId)
    {
        WatchEntry entry = m_watches.get(watchId);
        assert entry != null : "did not find watch";
        if (onlySpaces(s)) {
            entry.isValid = false;
            entry.setResult("");
            return false;
        }

        entry.isValid = false;
		try {
			entry.root = m_parser.eval(s);
			entry.isValid = true;
		}
		catch (Exception e) { // might be an exception from ast eval which doesn't make the watch not valid
			Console.debug("Watch parse error: " + e.getMessage());
            entry.setResult("Error: " + e.getMessage());
		}
		entry.evalAndDisplay();

		return true;
	}


	// set the mem regions with the correct address region and values
	// force if we must reread the memory in a new battle (don't keep the old one but it may have the same regions)
	void initMemRegions(boolean force)
	{
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;

		Warrior warrior = currentWar.getWarriorByLabel(m_currentWarriorLabel);
		if (warrior == null) // if currently selected warrior is disabled
			return;

		stackView.initMemRegion(warrior.m_stackWritableRegion, currentWar.getMemory(), force);
		sharedMemView.initMemRegion(warrior.m_sharedWritableRegion, currentWar.getMemory(), force);

		m_stateAccess.memory = currentWar.getMemory();
	}

	@Override
	public void onWarPreStartClear() {}


	@Override
	public void onWarStart() {
		m_currentWarriorIndex = -1; // invalidate

		initMemRegions(true);

	}

	@Override
	public void onWarEnd(int reason, String winners, boolean inDebug) {
		//m_currentWarriorIndex = -1;
	}

	@Override
	public void onRound(int round) {
	}

	@Override
	public void onWarriorBirth(Warrior w) {
	}
	@Override
	public void onPaused() {}
	@Override
	public void onNoneAlive() {}


	@Override
	public void onWarriorDeath(Warrior warrior, String reason) {
	}
	@Override
	public void onCompetitionStart() {
	}
	@Override
	public void onCompetitionEnd() {
	}

	@Override
	public void onEndRound() {
		this.updateFields();
	}

}
