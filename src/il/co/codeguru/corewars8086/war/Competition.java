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
    private CompetitionEventListener competitionEventListener;
    private MemoryEventListener memoryEventListener;

    private WarriorRepository warriorRepository;

    private War currentWar;

    private int warsPerCombination= 20;

    private int speed;
    public static final int MAXIMUM_SPEED = -1;
    private static final long DELAY_UNIT = 200;
    
    private long seed = 0;

    private boolean abort;


    private static class CompState {
        public enum State {
            NONE,
            RUN_WAR,
            RUN_ROUND
        } 
        public State state = State.NONE; 
        public int warIndex = 0;
        public boolean startPaused;
        public boolean animateRound; // should we return after each round or after each war for a UI update
        public int round;
    }
    private CompState compState;

    public Competition() throws IOException {
        warriorRepository = new WarriorRepository();

        competitionEventCaster = new EventMulticasterCompetition();
        competitionEventListener = (CompetitionEventListener) competitionEventCaster.getProxy();
        memoryEventCaster = new EventMulticasterMemory();
        memoryEventListener = (MemoryEventListener) memoryEventCaster.getProxy();
        speed = MAXIMUM_SPEED;
        abort = false;
    }

    // return true if need to continue after
    public boolean continueRun(boolean stillAnimateRound) throws Exception
    {
        if (compState.state == CompState.State.RUN_WAR) 
        {
            if (compState.warIndex < warsPerCombination) 
            {
                boolean needMore = startWar( warriorRepository.createGroupList(competitionIterator.next()) );
                if (abort) {
                    Console.log("Abort");
                    return false;
                }
                if (needMore) {
                    compState.state = CompState.State.RUN_ROUND;
                }
                return true;
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
            compState.animateRound = stillAnimateRound;
            boolean needMore = false;
            if (compState.animateRound) {
                needMore = runRound();
                if (!needMore && currentWar.isPaused()) { // did we return false due to being paused?
                    return false;
                }

            }
            else {
                do {
                    needMore = runRound();
                } while (needMore);
            }

            if (!needMore) {
                doneWar();
                compState.state = CompState.State.RUN_WAR;
                return true;
            }
            return true;
        }
        return false;
    }

    public boolean runCompetition(int warsPerCombination, int warriorsPerGroup, boolean startPaused, boolean animateRound) throws Exception 
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
        compState.animateRound = animateRound;
        return true;
    }

    public int getTotalNumberOfWars() {
        return (int) competitionIterator.getNumberOfItems() * warsPerCombination;
    }

    // return true if need another round
    public boolean runRound() 
    {
        competitionEventListener.onRound(compState.round);

        competitionEventListener.onEndRound();

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
        if (currentWar.isPaused()) {
            Console.log("pause");
            return false;
        }

        //Single step run - stop next time
        if (currentWar.isSingleRound())
            currentWar.pause();

        if (currentWar.isOver()) {
            //Console.log("isOver");
            return false;
        }

        currentWar.nextRound(compState.round);

        ++compState.round;
        //if (compState.round % 100 == 0)
        //    Console.log("round " + Integer.toString(compState.round));
        return compState.round < MAX_ROUND;
    }

    // return true if needs another round
    public boolean startWar(WarriorGroup[] warriorGroups) throws Exception 
    {
        //Console.log("runWar");
        currentWar = new War(memoryEventListener, competitionEventListener, compState.startPaused);
        int war = 0;
        currentWar.setSeed(this.seed + war);
        competitionEventListener.onWarStart();
        currentWar.loadWarriorGroups(warriorGroups);
        compState.round = 0;
        return true;
    }

    public void doneWar() 
    {
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

    /**
     * Set the speed of the competition, wither MAX_SPEED or a positive integer 
     * when 1 is the slowest speed
     * @param speed
     */
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getSpeed() {
        return speed;
    }

    public void setAbort() {
        this.abort = true;
    }
    
    
    public War getCurrentWar(){
    	return currentWar;
    }
    
    public void setSeed(long seed){
    	this.seed = seed;
    }
    
}