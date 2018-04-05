package il.co.codeguru.corewars8086.war;

import il.co.codeguru.corewars8086.memory.MemoryEventListener;
//import il.co.codeguru.corewars8086.utils.EventMulticaster;

import java.io.IOException;
import il.co.codeguru.corewars8086.gui.widgets.*;


public class Competition {

    /** Maximum number of rounds in a single war. */
    public final static int MAX_ROUND = 200000;
    private static final String SCORE_FILENAME= "scores.csv";

    private CompetitionIterator competitionIterator;

    private EventMulticasterCompetition competitionEventCaster;
    private EventMulticasterMemory memoryEventCaster;
    public CompetitionEventListener competitionEventListener;
    private MemoryEventListener memoryEventListener;

    private WarriorRepository warriorRepository;

    private War currentWar;

    private int warsPerCombination= 20;


    private int speed;  // while debugging. 0 means 1 step each frame, >0 means how many steps to make each frame, <0 means how many frames to skip between steps
    //private static final long DELAY_UNIT = 200;
    
    private long seed = 0;

    public boolean globalPause = false;

    // continue state between animation frames
    public static class CompState {
        public enum State {
            NONE,
            RUN_WAR,
            RUN_ROUND
        } 
        public State state = State.NONE; 
        public int warIndex = 0;
        public boolean startPaused;
        public boolean isInDebugger; // should we return after each round or after each war for a UI update. also activates breakpoints
        public int round;
        public boolean abort = false;
        public int waitedFrames = 0; // how many frames we just waited for negative speed
    }
    public CompState compState;

    public Competition() throws IOException {
        warriorRepository = new WarriorRepository();

        competitionEventCaster = new EventMulticasterCompetition();
        competitionEventListener = (CompetitionEventListener) competitionEventCaster.getProxy();
        memoryEventCaster = new EventMulticasterMemory();
        memoryEventListener = (MemoryEventListener) memoryEventCaster.getProxy();
        speed = 0;
    }

    // return true if need to continue after
    public boolean continueRun(boolean stillAnimateRound) throws Exception
    {
        if (globalPause)
            return false;
        if (compState.abort) {
            Console.log("Abort");
            doneWar();
            return false;
        }
        if (compState.state == CompState.State.RUN_WAR)
        {
            if (compState.warIndex < warsPerCombination) 
            {
                startWar( warriorRepository.createGroupList(competitionIterator.next()) );
                compState.state = CompState.State.RUN_ROUND;
                boolean wasStartPaused = compState.startPaused;
                compState.startPaused = false; // start paused only applies to the first war
                return !wasStartPaused;
            }
            else {
                // done competition
                competitionEventListener.onCompetitionEnd();
                warriorRepository.saveScoresToFile(SCORE_FILENAME);
                compState = null;
                return false;
            }
        }
        else if (compState.state == CompState.State.RUN_ROUND)
        {
            //compState.isInDebugger = stillAnimateRound; // this is never false in the current GUI, this was just a confusing option
            int needMore = 1;
            if (compState.isInDebugger) {
                int stepsCount = 1;
                if (!currentWar.isSingleRound()) { // speed doesn't do anyhthing when clicking single step
                    if (speed > 1)
                        stepsCount = speed;
                    else if (speed < 0) {
                        if (compState.waitedFrames > 0) {
                            --compState.waitedFrames;
                            stepsCount = 0;
                        }
                        else { // == 0
                            compState.waitedFrames = -speed;
                            stepsCount = 1;
                        }
                    }
                }
                while (needMore == 1 && stepsCount > 0) {
                    needMore = runRound();
                    --stepsCount;
                }
            }
            else {
                do {
                    needMore = runRound();
                } while (needMore == 1);
            }

            if (needMore == 0) { // we return false due to being paused
                competitionEventListener.onPaused();
                return false;
            }
            else if (needMore == -1) {
                doneWar();
                compState.state = CompState.State.RUN_WAR;
                return false;
            }
            return true; // what's left is that it's equal to 1
        }
        return false;
    }

    public void runCompetition(int warsPerCombination, int warriorsPerGroup, boolean startPaused, boolean isInDebugger) throws Exception
    {
        this.warsPerCombination = warsPerCombination;
        competitionIterator = new CompetitionIterator(warriorRepository.getNumberOfGroups(), warriorsPerGroup);

        // run on every possible combination of warrior groups
        competitionEventListener.onCompetitionStart();
        Console.log("runCompetition " + Integer.toString(warsPerCombination) + " wars");

        compState = new CompState();
        compState.warIndex = 0;
        compState.state = CompState.State.RUN_WAR;
        compState.startPaused = startPaused;
        compState.isInDebugger = isInDebugger;
    }

    public int getTotalNumberOfWars() {
        return (int) competitionIterator.getNumberOfItems() * warsPerCombination;
    }

    // return 1 if need another round, 0 if paused, -1 if we're done
    public int runRound()
    {
        competitionEventListener.onRound(compState.round);

     //moved   competitionEventListener.onEndRound();

        // apply speed limits
    //    if (speed != MAXIMUM_SPEED) {
            // note: if speed is 1 (meaning game is paused), this will
            // always happen
    //        if (compState.round % speed == 0) {
                //Thread.sleep(DELAY_UNIT);
    //        }

    //        if (speed == 1) { // paused
    //            return true;
    //        }
    //    }

        //pause
    //    while (currentWar.isPaused()) {
            //Thread.sleep(DELAY_UNIT); TBD-SHY
    //    }
        //if (currentWar.isPaused()) {
        //    Console.log("currentWar.isPaused");
        //    return 0;
        //}

        //Single step run - stop next time
        //if (currentWar.isSingleRound())
        //   currentWar.pause();

        boolean atBreakpoint = currentWar.nextRound(compState.round);

        if (currentWar.isOver()) {
            Console.log("isOver");
            return -1;
        }

        ++compState.round;

        competitionEventListener.onEndRound();

        //if (compState.round % 100 == 0)
        //    Console.log("round " + Integer.toString(compState.round));
        if (currentWar.isSingleRound() || atBreakpoint) {
            currentWar.pause();
        }
        if (currentWar.isPaused()) {
            return 0;
        }
        if (compState.round >= MAX_ROUND)
            return -1;

        return 1;
    }

    // return true if needs another round
    public void startWar(WarriorGroup[] warriorGroups) throws Exception
    {
        //Console.log("runWar");
        currentWar = new War(memoryEventListener, competitionEventListener, compState.startPaused);
        int war = 0;
        currentWar.setSeed(this.seed + war);
        currentWar.loadWarriorGroups(warriorGroups);
        competitionEventListener.onWarStart();
        compState.round = 0;
    }

    public void doneWar() 
    {
        if (currentWar == null)
            return;
        Console.log("doneWar rounds=" + Integer.toString(compState.round));
        competitionEventListener.onRound(compState.round);

        int numAlive = currentWar.getNumRemainingWarriors();
        String names = currentWar.getRemainingWarriorNames();

        if (numAlive == 1) { // we have a single winner!
            competitionEventListener.onWarEnd(CompetitionEventListener.SINGLE_WINNER, names);
        } else if (compState.round == MAX_ROUND) { // maximum round reached
            competitionEventListener.onWarEnd(CompetitionEventListener.MAX_ROUND_REACHED, names);
        } else { // user abort
            competitionEventListener.onWarEnd(CompetitionEventListener.ABORTED, names);
        }
        currentWar.updateScores(warriorRepository);
        currentWar = null;
        ++compState.warIndex;

    }

    public int getCurrentWarrior() {
        if (currentWar != null) {
            return currentWar.getCurrentWarrior();
        } else {
            return -1;
        }
    }

    public void addCompetitionEventListener(CompetitionEventListener lis) {
        competitionEventCaster.add(lis);
    }

    public void removeCompetitionEventListener(CompetitionEventListener lis) {
    	competitionEventCaster.remove(lis);
    }
    
    public void addMemoryEventLister(MemoryEventListener lis) {
        memoryEventCaster.add(lis);
    }

    public void removeMemoryEventLister(MemoryEventListener lis) {
    	memoryEventCaster.remove(lis);
    }
    
    public WarriorRepository getWarriorRepository() {
        return warriorRepository;
    }


    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getSpeed() {
        return speed;
    }

    public void setAbort() {
        if (compState == null)
            return;
        compState.abort = true;
    }
    
    
    public War getCurrentWar(){
    	return currentWar;
    }
    
    public void setSeed(long seed){
    	this.seed = seed;
    }
    
}