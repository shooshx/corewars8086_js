package il.co.codeguru.corewars8086.gui;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
//import il.co.codeguru.corewars8086.utils.EventMulticaster;
import il.co.codeguru.corewars8086.utils.Unsigned;
import il.co.codeguru.corewars8086.war.*;

//import java.awt.*;
//import java.awt.event.ActionEvent;
//import java.awt.event.ActionListener;
import java.util.Enumeration;

//import javax.swing.*;
//import javax.swing.event.ChangeEvent;
//import javax.swing.event.ChangeListener;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.jsadd.Format;


/**
 * The main GUI class for core-wars. 
 * The frame includes:
 * <ul>
 * <li> Canvas for showing the memory
 * <li> a list of warrior names
 * <li> messaging area
 * <li> start/stop buttons
 * <li> speed slider
 * </ul>
 * 
 * @author BS
 */
public class WarFrame extends JComponent implements MemoryEventListener,  CompetitionEventListener
{

	/** the canvas which show the core war memory area */
    public Canvas warCanvas;

    /** the message area show misc. information about the current fight */
    private JTextArea messagesArea;

    /** Holds the current round number */
    private int nRoundNumber;

    public CpuFrame cpuframe;
	public JButton btnPause;
    public JButton btnSingleRound;
    

    public JSlider speedSlider;

    private final Competition competition;

    //private MemoryFrame memory_frame;
    
    private CompetitionWindow mainWnd;


    public WarFrame(final Competition competition, final CompetitionWindow mainWnd)
    {
        super("CodeGuru Extreme - Session Viewer");

        this.competition = competition;
        this.mainWnd = mainWnd;



        warCanvas = new Canvas("warCanvas");

        // build info zone (message area + buttons)
        messagesArea = new JTextArea("messagesArea", 5, 60);

        HTMLElement speedSliderVal = (HTMLElement)DomGlobal.document.getElementById("speedSliderVal");
        speedSlider = new JSlider("speedSlider", "speedSliderVal");
        speedSlider.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                int s = speedSlider.getValue();
                if (s == 400) {
                    speedSliderVal.innerHTML = "MAX";
                    WarFrame.this.competition.setSpeed(Competition.MAX_SPEED); //exponential speed slider
                    return;
                }
                if (s > 100)
                    s = (int)Math.pow((double)(s - 80.0), 1.5);
                speedSliderVal.innerHTML = Integer.toString(s);
                WarFrame.this.competition.setSpeed(s ); //exponential speed slider
            }
        });
        nRoundNumber = 0;
        
		// Debugger
        cpuframe = new CpuFrame(competition, this.mainWnd);
        competition.addCompetitionEventListener(cpuframe);


		competition.addCompetitionEventListener(this);
		
		btnPause = new JButton("btnPause", "XXPause");
		btnPause.setEnabled(false);
		btnPause.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent arg0) {
			    if (competition.getCurrentWar() == null) // pauses between wars
                {
                    if (competition.globalPause) { // do resume
                        competition.globalPause = false;
                        btnPause.setText("Pause");
                        mainWnd.requestFrame();
                        btnSingleRound.setEnabled(false);
                    }
                    else { // do pause
                        competition.globalPause = true;
                        btnPause.setText("Resume");
                        if (competition.getCurrentWar() != null)
                            btnSingleRound.setEnabled(true);
                    }
                }
                else
                {
                    if (competition.getCurrentWar().isPaused()) {
                        competition.getCurrentWar().resume();
                        btnPause.setText("Pause");
                        mainWnd.requestFrame();
                        btnSingleRound.setEnabled(false);
                    } else {
                        competition.getCurrentWar().pause();
                        btnPause.setText("Resume");
                        btnSingleRound.setEnabled(true);
                    }
                }

			}

		});

		btnSingleRound = new JButton("btnSingleRound", "Single Round");
		btnSingleRound.setEnabled(false);
		btnSingleRound.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent arg0) {
			    if (competition.getCurrentWar() == null) {
			        Console.log("no war");
			        return;
                }
                competition.getCurrentWar().runSingleRound();
                mainWnd.requestFrame(); // request frame but still paused so it'll be just one frame
			}
		});

        // build warrior zone (warrior list + title) 
 
        //nameList.repaint();

    }


    @Override
    public void onPaused() { // this can potentially replace all other places where we do the same thing
        btnPause.setText("Resume");
        btnSingleRound.setEnabled(true);
    }

    /** Add a message to the message zone */
    public void addMessage(String message) {
        messagesArea.append(message + "\n");
        messagesArea.scrollToBottom();
       /* SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                //messagesArea.setCaretPosition(messagesArea.getDocument().getLength());
            }
        });*/
    }

    /** Add a message to the message zone (with round number) */
    public void addMessage(int round, String message) {
        addMessage("[" + round + "] "+ message);
    }	

    @Override
    public void onMemoryWrite(RealModeAddress address, byte value) {
        if (!mainWnd.isBattleShown())
            return; // canvas not shown, no reason to update it

		int ipInsideArena = address.getLinearAddress() - 0x1000 *0x10; // arena * paragraph
		
        if ( address.getLinearAddress() >= War.ARENA_SEGMENT*0x10 && address.getLinearAddress() < 2*War.ARENA_SEGMENT*0x10 )
        {
        	warCanvas.paintPixel(Unsigned.unsignedShort(ipInsideArena), (byte)competition.getCurrentWarrior(), value);
        }
    }

    @Override
    public void onWriteState(EWriteState state) {
    }

    @Override
    public void onWarPreStartClear() {
        warCanvas.clear();
        warCanvas.initStartWar(competition.getCurrentWar());
    }

    /* @see CompetitionEventListener#onWarStart(int) */
    public void onWarStart() {
        addMessage("=== Session started ===");
        if (competition.getCurrentWar().isPaused()){
			btnPause.setText("Resume");
			btnSingleRound.setEnabled(true);
        }
    }

    public void onWarEnd(int reason, String winners, boolean inDebug) {
        /*roundNumber.setText(Integer.toString(nRoundNumber));
        roundNumber.repaint();*/

        if (!inDebug)
            return;

        switch (reason) {
            case SINGLE_WINNER:
                addMessage(nRoundNumber,"Session over: The winner is " + winners + "!");
                break;
            case MAX_ROUND_REACHED:
                addMessage(nRoundNumber,"Maximum round reached: The winners are " + winners + "!");
                break;
            case ABORTED:
                addMessage(nRoundNumber,"Session aborted: The winners are " + winners + "!");
                break;
            default:
                throw new RuntimeException();			
        }

        btnPause.setText("Resume");
        btnSingleRound.setEnabled(true);

        // not disabling since its possible to step more in an ended war until none alive.
        //btnSingleRound.setEnabled(false); // done debugging this session
        //btnPause.setEnabled(false);
        warCanvas.revokeWar();
    }

    @Override
    public void onNoneAlive() {
        addMessage(nRoundNumber, "No players left alive");
        btnSingleRound.setEnabled(false);
        btnPause.setEnabled(false);

    }


    /** @see CompetitionEventListener#onRound(int) */
    public void onRound(int round) {
        if (!mainWnd.isBattleShown())
            return;
    
        nRoundNumber = round;
        /*if ((nRoundNumber % 1000) == 0) {
            roundNumber.setText(Integer.toString(nRoundNumber));
            roundNumber.repaint();
        }*/
        //btnCpuState.setEnabled(true); //in case we open the window during a match
        btnPause.setEnabled(true);
    }	

    /** @see CompetitionEventListener#onWarriorBirth(Warrior) */
    public void onWarriorBirth(Warrior w) {
        addMessage(nRoundNumber, w.getName() + " enters the arena at " + Format.hex4(w.getLoadOffset() & 0xffff));
        //nameListModel.addElement(new WarriorInfo(w.getName()));
    }

    /* @see CompetitionEventListener#onWarriorDeath(String) */
    public void onWarriorDeath(Warrior warrior, String reason) {
        String warriorName = warrior.getName();
        addMessage(nRoundNumber, warriorName + " died due to " + reason + ".");
    /*    Enumeration namesListElements = nameListModel.elements();
        while(namesListElements.hasMoreElements()) {
            WarriorInfo info = (WarriorInfo) namesListElements.nextElement();
            if (info.name.equals(warriorName)) {
                info.alive = false;
                break;
            }
        }

        nameList.repaint();*/
    }


    public void onCompetitionStart() {
    	//btnCpuState.setEnabled(true);
    	btnPause.setEnabled(true);
    }

    public void onCompetitionEnd() {
    	//btnCpuState.setEnabled(false);
    	btnPause.setEnabled(false);
    }	

    class WarriorInfo {
        String name;
        boolean alive;

        public WarriorInfo(String name) {
            this.name= name;
            this.alive = true;
        }

        @Override
        public String toString() {
            return name;
        }

        @Override
        public boolean equals(Object obj) {
            return (obj!=null) && (obj instanceof String) &&
                (((String)obj).equals(name));
        }
    }
    
	@Override
	public void onEndRound() {
        if (!mainWnd.isBattleShown())
            return; // canvas not shown, no reason to update it
        
		this.warCanvas.deletePointers();
		War currentWar = this.competition.getCurrentWar();
		for (int i = 0; i < currentWar.getNumWarriors(); i++)
			if (currentWar.getWarrior(i).isAlive()) {
                Warrior warrior = currentWar.getWarrior(i);
		        CpuState state = warrior.getCpuState();
				short ip = state.getIP();
				short cs = state.getCS();
				
				int ipInsideArena = RealModeAddress.linearAddress(cs, ip) - 0x10000;
				
				this.warCanvas.paintPointer((char) ipInsideArena,(byte) i, warrior.getLabel());
			}
	}



/*	@Override
	public void addressAtMouseLocationRequested(int address) {
		RealModeAddress tmp = new RealModeAddress(War.ARENA_SEGMENT, (short) address);
		byte data = this.competition.getCurrentWar().getMemory().readByte(tmp);

		// Warrior w = this.competition.getCurrentWar().getNumWarriors()

        //this.addressFiled.setText(Integer.toHexString(address).toUpperCase() + ": " + String.format("%02X", data).toUpperCase());
        this.addressFiled.setText(Format.hex2(address) + ": " + Format.hex2((int)data) );
		
/*		if(memory_frame == null || memory_frame.isVisible() == false){
			memory_frame = new MemoryFrame(competition, tmp.getLinearAddress());
			WarFrame.this.competition.addCompetitionEventListener(memory_frame);
		}
		else
			memory_frame.refrash(tmp.getLinearAddress());
			*/
	//}
 
}