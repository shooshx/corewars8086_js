package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.war.CompetitionEventListener;
import il.co.codeguru.corewars8086.war.Warrior;

import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterCompetition extends EventMulticasterBase<CompetitionEventListener>
{
    public CompetitionEventListener debugProxy, competeProxy;

    public EventMulticasterCompetition() {
        debugProxy = new DebugHandler();
        competeProxy = new CompeteHandler();
    }

    private class CompeteHandler extends DebugHandler {

        @Override
        public void onRound(int round) {
        }
        @Override
        public void onEndRound() {
        }
    }


    private class DebugHandler implements CompetitionEventListener {

        @Override
        public void onWarPreStartClear() {
            for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarPreStartClear();
            }
        }

		@Override
		public void onWarStart() {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarStart();
			}
		}

		@Override
		public void onWarEnd(int reason, String winners) {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarEnd(reason, winners);
			}
		}

		@Override
		public void onRound(int round) {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onRound(round);
			}
		}

		@Override
		public void onWarriorBirth(Warrior w) {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarriorBirth(w);
			}
		}

		@Override
		public void onWarriorDeath(Warrior warrior, String reason) {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onWarriorDeath(warrior, reason);
			}
		}

		@Override
		public void onCompetitionStart() {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onCompetitionStart();
			}
		}

		@Override
		public void onCompetitionEnd() {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onCompetitionEnd();
			}
		}

		@Override
		public void onEndRound() {
			for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onEndRound();
			}
		}

        @Override
        public void onPaused() {
            for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onPaused();
            }
        }

        @Override
        public void onNoneAlive() {
            for (Object mListener : mListenersArr) {
                ((CompetitionEventListener)mListener).onNoneAlive();
            }
        }
    }



}