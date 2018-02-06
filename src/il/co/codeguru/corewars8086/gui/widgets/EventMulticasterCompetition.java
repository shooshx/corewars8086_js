package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.war.CompetitionEventListener;
import il.co.codeguru.corewars8086.war.Warrior;

import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterCompetition extends EventMulticasterBase {
    

    

    public  Object getProxy() {
        if ( mProxy == null ) {
            mProxy = new MulticasterHandler();
        }
        return mProxy;
    }


    private class MulticasterHandler implements CompetitionEventListener {

		@Override
		public void onWarStart() {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarStart();
			}
            isCasting = false;
            addWaiting();			
		}

		@Override
		public void onWarEnd(int reason, String winners) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarEnd(reason, winners);
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onRound(int round) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onRound(round);
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onWarriorBirth(Warrior w) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarriorBirth(w);
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onWarriorDeath(String warriorName, String reason) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarriorDeath(warriorName, reason);
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onCompetitionStart() {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onCompetitionStart();
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onCompetitionEnd() {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onCompetitionEnd();
			}
            isCasting = false;
            addWaiting();				
		}

		@Override
		public void onEndRound() {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onEndRound();
			}
            isCasting = false;
            addWaiting();				
		}
        
    }



}