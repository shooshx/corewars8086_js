package il.co.codeguru.corewars8086.gui;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.war.Competition;
import il.co.codeguru.corewars8086.war.CompetitionEventListener;
import il.co.codeguru.corewars8086.war.War;

import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.war.Warrior;
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


public class CpuFrame /*extends JFrame*/ implements CompetitionEventListener {
	
	//private War currentWar;
	private CompetitionWindow m_mainwnd;
	private String m_currentWarriorLabel;
	private int m_currentWarriorIndex = -1; // faster to use index than label during debug
	
	private Competition competition;
	private int m_base = 16;
	

	private RegisterField regAX,regBX,regCX,regDX,
						regSI,regDI,regBP,regSP,
						 regIP,regCS,regDS,regSS,
						 regES,regE, regF;
	
	private FlagFields flagOF,flagDF,flagIF,flagTF,
						flagSF,flagZF,flagAF,flagPF,
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

	public void setSelectedPlayer(String playerLabel) {
		m_currentWarriorLabel = playerLabel;
		m_currentWarriorIndex = -1; // invalidate

		// need to do this first so that reading the registers would put this ss:sp in the right place
		initMemRegions(false);
		updateFileds();

	}




	public int regChanged_callback(String name, String value)
	{
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
		}
		catch(NumberFormatException e) {
			m_mainwnd.errorPreventsStep(true, "Register value parse error");
			return (m_base == 10) ? -2 : -1;
		}
		if (v < 0 || v > 0xffff) {
			m_mainwnd.errorPreventsStep(true, "Register value out out range");
			return -3;
		}
		m_mainwnd.errorPreventsStep(false, null);

		short sv = (short)v;

		switch(name) {
			case "AX": state.setAX(sv); break;
			case "BX": state.setBX(sv); break;
			case "CX": state.setCX(sv); break;
			case "DX": state.setDX(sv); break;

			case "SI": state.setSI(sv); break;
			case "DI": state.setDI(sv); break;
			case "BP": state.setBP(sv); break;
			case "SP": state.setSP(sv); stackView.moveToLine(RealModeAddress.linearAddress(state.getSS(), sv)); break;

			case "IP": state.setIP(sv); m_mainwnd.m_codeEditor.updateDebugLine(); break;
			case "CS": state.setCS(sv); m_mainwnd.m_codeEditor.updateDebugLine(); break;
			case "DS": state.setDS(sv); break;
			case "SS": state.setSS(sv); stackView.moveToLine(RealModeAddress.linearAddress(sv, state.getSP())); break;
			case "ES": state.setES(sv); break;

			case "Energy": state.setEnergy(sv); break;
			case "Flags": state.setFlags(sv); updateFlagBoxes(state); break;
		}
		return 1;
	}


	public void updateFlagBoxes(CpuState state) {
		flagOF.setValue( state.getOverflowFlag());
		flagDF.setValue( state.getDirectionFlag() );
		flagIF.setValue( state.getInterruptFlag() );
		flagTF.setValue( state.getTrapFlag() );
		flagSF.setValue( state.getSignFlag() );
		flagZF.setValue( state.getZeroFlag() );
		flagAF.setValue( state.getAuxFlag() );
		flagPF.setValue( state.getParityFlag() );
		flagCF.setValue( state.getCarryFlag() );
	}

	public void flagChanged_callback(String name, boolean v)
	{
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;

		CpuState state = currentWar.getWarriorByLabel(m_currentWarriorLabel).getCpuState();

		switch(name) {
		case "OF": state.setOverflowFlag(v); break;
		case "DF": state.setDirectionFlag(v); break;
		case "IF": state.setInterruptFlag(v); break;
		case "TF": state.setTrapFlag(v); break;
		case "SF": state.setSignFlag(v); break;
		case "ZF": state.setZeroFlag(v); break;
		case "AF": state.setAuxFlag(v); break;
		case "PF": state.setParityFlag(v); break;
		case "CF": state.setCarryFlag(v); break;
		}
		regF.setValue( state.getFlags());
	}

	public CpuFrame(Competition c, CompetitionWindow mainwnd)
	{
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
	}

	public native void exportMethods() /*-{
        var that = this
        $wnd.j_setRegistersBase = $entry(function(b) { that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_setRegistersBase(I)(b) });
        $wnd.j_watchEval = $entry(function(s) { return that.@il.co.codeguru.corewars8086.gui.CpuFrame::j_watchEval(Ljava/lang/String;)(s) });

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
	}
	
	public void updateFileds(){
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;
		if (m_currentWarriorIndex == -1) {
			m_currentWarriorIndex = currentWar.getWarriorByLabel(m_currentWarriorLabel).m_myIndex;
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

	}

	ExpressionParser m_parser = new ExpressionParser();
	String j_watchEval(String s) {
		try {
			int v = m_parser.eval(s);
			return Integer.toString(v);
		} catch (Exception e) {
			Console.log("Watch parse error: " + e.toString());
			return "Error: " + e.toString();
		}
	}


	// set the mem regions with the correct address region and values
	// force if we must reread the memory in a new battle (don't keep the old one but it may have the same regions)
	void initMemRegions(boolean force)
	{
		War currentWar = competition.getCurrentWar();
		if (currentWar == null)
			return;

		Warrior warrior = currentWar.getWarriorByLabel(m_currentWarriorLabel);

		stackView.initMemRegion(warrior.m_stackWritableRegion, currentWar.getMemory(), force);
		sharedMemView.initMemRegion(warrior.m_sharedWritableRegion, currentWar.getMemory(), force);
	}



	@Override
	public void onWarStart() {
		m_currentWarriorIndex = -1; // invalidate

		initMemRegions(true);
	}

	@Override
	public void onWarEnd(int reason, String winners) {
		m_currentWarriorIndex = -1;
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
	public void onWarriorDeath(String warriorName, String reason) {
	}
	@Override
	public void onCompetitionStart() {
	}
	@Override
	public void onCompetitionEnd() {
	}

	@Override
	public void onEndRound() {
		this.updateFileds();
	}

}
