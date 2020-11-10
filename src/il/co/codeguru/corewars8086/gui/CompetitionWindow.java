package il.co.codeguru.corewars8086.gui;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.war.*;
import com.google.gwt.animation.client.AnimationScheduler;
import com.google.gwt.user.client.Window;

import il.co.codeguru.corewars8086.gui.widgets.*;
//import java.awt.*;
//import java.awt.event.*;
import java.io.IOException;

import static il.co.codeguru.corewars8086.gui.CompetitionWindow.call_gwtStart;
//import javax.swing.*;

/**
 * @author BS
 */
public class CompetitionWindow extends JFrame
    implements ScoreEventListener, CompetitionEventListener {
	
	private Competition competition;
    private ColumnGraph columnGraph;

    // widgets
    //private JButton runWarButton;
    private JLabel warCounterDisplay;
    //private JCheckBox showBattleCheckBox;
    private boolean m_isBattleShown = false;
    private JTextField battlesPerGroupField;
    //private JTextField warriorsPerGroupField;
    public WarFrame battleFrame;

    private int warCounter;
    private int totalWars;
    //private Thread warThread;
	private boolean inGraphs;

    private static final String SEED_PREFIX = "SEED#";
	private JTextField seed;

    //private JCheckBox startPausedCheckBox;
    private boolean m_isStartPaused = false;

    public CodeEditor m_codeEditor;
    public PlayersPanel m_playersPanel;
    private HTMLElement stepnum;

    public static CompetitionWindow s_instance;
    public static CompetitionWindow getInstance() { return s_instance; }

    public boolean isBattleShown() {
        return m_isBattleShown;
    }

    public CompetitionWindow() throws IOException
    {
        super("CodeGuru Extreme - Competition Viewer");
        getContentPane().setLayout(new BorderLayout());
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        competition = new Competition();
        competition.addCompetitionEventListener(this);
        WarriorRepository warriorRepository = competition.getWarriorRepository();
        warriorRepository.addScoreEventListener(this);
        columnGraph = new ColumnGraph();
        getContentPane().add(columnGraph, BorderLayout.CENTER);
        // -------------
        JPanel controlArea = new JPanel();
        controlArea.setLayout(new BoxLayout(controlArea, BoxLayout.Y_AXIS));
        // -------------- Button Panel
        JPanel buttonPanel = new JPanel();
        //runWarButton = new JButton("runWarButton", "<html><font color=red>Start!</font></html>");
        //runWarButton.addActionListener(this); // triggers actionPerformed
        //buttonPanel.add(runWarButton);
        warCounterDisplay = new JLabel("");
        buttonPanel.add(warCounterDisplay);
        buttonPanel.add(Box.createHorizontalStrut(30));
        /*showBattleCheckBox = new JCheckBox("showBattleCheckBox", "Show session on start");
		showBattleCheckBox.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent arg0) {
                m_isBattleShown = showBattleCheckBox.isSelected();
                Console.log("isBattleShown= " + (m_isBattleShown?"true":"false") );
            }
		});*/
        //buttonPanel.add(showBattleCheckBox);
        
        /*startPausedCheckBox = new JCheckBox("startPausedCheckBox", "Start Paused");
		startPausedCheckBox.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent arg0) {
                m_isStartPaused = startPausedCheckBox.isSelected();
				//if(startPausedCheckBox.isSelected())
				//	showBattleCheckBox.setSelected(true);
			}
		});
		buttonPanel.add(startPausedCheckBox);*/
        
        controlArea.add(buttonPanel);
        // -------------
        controlArea.add(new JSeparator(JSeparator.HORIZONTAL));
        // ------------ Control panel
        JPanel controlPanel = new JPanel();
        controlPanel.setLayout(new FlowLayout());
        controlPanel.add(new JLabel("Survivor groups per session:"));
        
        // If total number of teams is less then four, make it the defauld number
		int numberOfGropus = Math.min(4,
            competition.getWarriorRepository().getNumberOfGroups());
		
        //warriorsPerGroupField = new JTextField(String.format("%d", numberOfGropus), 3); SHY-CHANGED
        //warriorsPerGroupField = new JTextField("warriorsPerGroupField", Integer.toString(numberOfGropus), 3);
		//controlPanel.add(warriorsPerGroupField);
		controlPanel.add(new JLabel("Sessions per groups combination:"));
		battlesPerGroupField = new JTextField("battlesPerGroupField", "100", 4);
		//controlPanel.add(battlesPerGroupField);
		seed = new JTextField("seed", null, 4);
		seed.setText("guru");
		controlPanel.add(new JLabel("seed:"));
		controlPanel.add(seed);
		
		controlArea.add(controlPanel);
        
        // ------------
        getContentPane().add(controlArea, BorderLayout.SOUTH);

        showBattleRoom();

        m_codeEditor = new CodeEditor(competition);
        m_playersPanel = new PlayersPanel(this);
        m_codeEditor.m_playersPanel = m_playersPanel;
        stepnum = (HTMLElement) DomGlobal.document.getElementById("stepnum");

        exportMethods();

        competition.competitionEventCaster.doneAdding();
        competition.memoryEventCaster.doneAdding();

        call_gwtStart();

        /*addWindowListener(new WindowListener() {
            public void windowOpened(WindowEvent e) {}
            public void windowClosing(WindowEvent e) {
                if (warThread!= null) {
                    competition.setAbort();
                }
            }

            public void windowClosed(WindowEvent e) {}
            public void windowIconified(WindowEvent e) {}
            public void windowDeiconified(WindowEvent e) {}
            public void windowActivated(WindowEvent e) {}
            public void windowDeactivated(WindowEvent e) {}
        });*/
    }

    public static native void call_gwtStart() /*-{
        $wnd.gwtStart();
    }-*/;


    public native void exportMethods() 
    /*-{
        var that = this
        $wnd.j_startDebug = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_startDebug()() });
        $wnd.j_stopDebug = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_stopDebug()() });
        $wnd.j_debugUiInited = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_debugUiInited()() });
        $wnd.j_triggerZeroSpeed = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_triggerZeroSpeed()() });
        $wnd.j_startCompete = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_startCompete()() });
        $wnd.j_stopCompete = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_stopCompete()() });
        $wnd.j_getResultTableText = $entry(function() { return that.@il.co.codeguru.corewars8086.gui.CompetitionWindow::j_getResultTableText()() });
    }-*/;

    public boolean j_startDebug()
    {
        inGraphs = false;
        if (!m_playersPanel.checkPlayersReady())
            return false;
        if (!gui_runWar(true, true))
            return false;
        return true;
    }

    public void j_stopDebug()
    {
        inGraphs = false;
        competition.setAbort();
        setDebugMode(false);
    }

    public boolean j_startCompete()
    {
        inGraphs = true;
        if (!m_playersPanel.checkPlayersReady())
            return false;
        if (!gui_runWar(false, false))
            return false;
        return true;
    }
    public void j_stopCompete()
    {
        competition.setAbort();
    }

    public void j_triggerZeroSpeed() {
        competition.setSpeed(0);
        battleFrame.speedSlider.setValue(0);
    }

    public String j_getResultTableText() {
        return columnGraph.getTableText();
    }


    private void outRoundNum() {
        stepnum.innerHTML = (competition.compState == null) ? "[null]":Integer.toString(competition.compState.round);
    }

    public AnimationScheduler.AnimationCallback animCallback = new AnimationScheduler.AnimationCallback() {
        @Override
        public void execute(double timestamp) {
            try {
                callContinueRun();
			} catch (Exception e) {
				Console.log("continueRun EXCEPTION " + e.toString());
				e.printStackTrace();
			}
        }
    };

    private void callContinueRun() throws Exception {
        boolean needMore = competition.continueRun(isBattleShown());
        outRoundNum();
        if (needMore)
            requestFrame();

    }

    public void requestFrame() {
        AnimationScheduler.get().requestAnimationFrame(animCallback);
    }
    
    /**
     * Starts a new war.
     * @return whether or not a new war was started.
     * isInDebug needed for knowing if we want fixed addresses to be used
     */
    public boolean runWar(boolean isInDebug)
    {
        int battlesPerGroup = 0;
        try {
            long seedValue;
            if (seed.getText().startsWith(SEED_PREFIX)){
                seedValue = Long.parseLong(seed.getText().substring(SEED_PREFIX.length()));
            }
            else {
                seedValue = seed.getText().hashCode();
            }
            competition.setSeed(seedValue);
            battlesPerGroup = 0; // in case parseInt fails
            battlesPerGroup = Integer.parseInt(battlesPerGroupField.getText().trim());
          /*  final int warriorsPerGroup = Integer.parseInt(
                warriorsPerGroupField.getText().trim());*/
        } catch (NumberFormatException e2) {
            JOptionPane.showMessageDialog(this, "Error in configuration");
        }
        /*    if (competition.getWarriorRepository().getNumberOfGroups() < warriorsPerGroup) {
                JOptionPane.showMessageDialog(this,
                    "Not enough survivors (got " +
                    competition.getWarriorRepository().getNumberOfGroups() +
                    " but " + warriorsPerGroup + " are needed)");
                return false;
            }*/

        // having numItems and groupSize allows having 4 players and running competitions of just any 3 of them
        // this is hardly useful in reality so I just set it to the same size

        if (battlesPerGroup <= 0) {
            Console.err_box("battles per session needs to be more than 0");
            return false;
        }

        WarriorRepository repo = competition.getWarriorRepository();
        if (!repo.readWarriorFilesFromUI( m_playersPanel.getFiles(), m_playersPanel.getZombies(), isInDebug))
            return false;
        if (inGraphs)
            columnGraph.clear(repo.getWarriorGroups());

        int numOfGroups = repo.getNumberOfGroups();
        if (numOfGroups == 0) {
            Console.err_box("can't run without any warriors"); // TBD-ERRMSG
            return false;
        }

        try {
            competition.runCompetition(battlesPerGroup, numOfGroups, m_isStartPaused, isBattleShown());
            callContinueRun(); // when runWar() returns we want the War object to be already constructured and ready
            if (isBattleShown()) { // add breapointchecked only if we're in debugger
                War war = competition.getCurrentWar();
                war.setBreakpointCheck(m_codeEditor);
                Warrior inEditorWarrior = war.getWarriorByLabel(m_playersPanel.getCodeInEditor().getLabel());
                war.setUiWarrior(inEditorWarrior);
                war.setInDebugger();
            }
            return true;
        }
        catch (Exception e) {
            Console.log("runWar EXCEPTION " + e.toString());
            e.printStackTrace(Console.stream());
        }


        return false;
    }

    public void scoreChanged(String name, float addedValue, int groupIndex, int subIndex) {
        if (inGraphs)
            columnGraph.addToValue(groupIndex, subIndex, addedValue);
    }

    /*public void actionPerformed(ActionEvent e) {
        if (e.getSource() == runWarButton) {
        	showBattleFrameIfNeeded();
        	gui_runWar(null, null);
        }
    }*/


    public void setDebugMode(boolean v) {
        m_codeEditor.setDebugMode(v);
        m_playersPanel.setDebugMode(v);

        battleFrame.cpuframe.setVisible(v);
        if (!v)
            battleFrame.warCanvas.revokeWar();
    }

    public boolean gui_runWar(Boolean isBattleShown, Boolean isStartPaused) {
        if (isBattleShown != null)
            m_isBattleShown = isBattleShown;
        if (isStartPaused != null)
            m_isStartPaused = isStartPaused;
        if (runWar(isBattleShown)) {
            //runWarButton.setEnabled(false);
            if (isBattleShown)
                setDebugMode(true);

            stepnum.innerHTML = "0";
            battleFrame.speedSlider.setValue(0);
            return true;
        }
        return false;
    }

    public void j_debugUiInited() {
        // needs to be after gui was set up and after the editor was scrolled to its starting place and lines rendered
        // this is because if the first line has a comment, dfXXXX is only going to exist once the line is rendered
        competition.competitionEventListener.onEndRound(); // it's like round -1, show the state at the start of the game

        battleFrame.cpuframe.resetChanged();
    }

    @Override
    public void onWarPreStartClear() {}


    public void onWarStart() {

        battleFrame.cpuframe.setVisible(true); // do this here since the messages need to scroll to the bottom and it needs to be visible
    }

    private void showBattleFrameIfNeeded() {
    	//if (showBattleCheckBox.isSelected() && battleFrame == null ) {
    		//showBattleRoom();
    		//showBattleCheckBox.setSelected(false);
    	//}
    }
    
    private void showBattleRoom() {
        battleFrame = new WarFrame(competition, this);

        competition.addMemoryEventLister(battleFrame);
        competition.addMemoryEventLister(battleFrame.cpuframe);
        competition.addCompetitionEventListener(battleFrame);

        competition.addMemoryEventLister(battleFrame.cpuframe.stackView);
        competition.addMemoryEventLister(battleFrame.cpuframe.sharedMemView);

    }

    public void onWarEnd(int reason, String winners, boolean inDebug) {
        warCounter++;
        // this is needed so that we'll be able to recreate the war we just ran in the debugger
        // and for the seed counter to advance beteen competitions
        seed.setText(SEED_PREFIX + competition.getSeed());
        warCounterDisplay.setText("Sessions so far:" + warCounter + " (out of " + totalWars + ")");
        setBattlesRan(Integer.toString(warCounter) + "/" + Integer.toString(totalWars));
    }

    public static native void setBattlesRan(String round) /*-{
        $wnd.battlesRan.innerHTML = round
    }-*/;


    public void onRound(int round) {
    }
    @Override
    public void onPaused() {}
    @Override
    public void onNoneAlive() {}
    public void onWarriorBirth(Warrior w) {}
    public void onWarriorDeath(Warrior warrior, String reason) {}

    public void onCompetitionStart() {
        warCounter = 0;
        totalWars = competition.getTotalNumberOfWars();
		//this.runWarButton.setEnabled(false);
    }

    public static native void jsCompeteFinish() /*-{
        $wnd.competeFinished();
    }-*/;


    public void onCompetitionEnd() {
        warCounterDisplay.setText("The competition is over. " + warCounter + " sessions were run.");
        //warThread = null;
		//this.runWarButton.setEnabled(true);
        //runWarButton.setEnabled(true);
        jsCompeteFinish();
    }
    
	@Override
	public void onEndRound() {
	}

	// when an edit in the registers has parse error
	public void errorPreventsStep(boolean v, String reason) {

        battleFrame.btnPause.setEnabled(!v);
        battleFrame.btnSingleRound.setEnabled(!v);
    }

    // war needs to know which player's breakpoint to check
    public void srcSelectionChanged(String label) {
        War war = competition.getCurrentWar();
        if (war == null)
            return; // not in debug mode
        Warrior warrior = war.getWarriorByLabel(label);
        war.setUiWarrior(warrior);
    }
	
}