package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.war.ScoreEventListener;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterScore extends EventMulticasterBase<ScoreEventListener> {
    public ScoreEventListener proxy;
    public EventMulticasterScore() {
        proxy = new MulticasterHandler();
    }


    private class MulticasterHandler implements ScoreEventListener  {
		@Override
		public void scoreChanged(String name, float addedValue, int groupIndex, int subIndex) {
        	for (Object mListener : mListenersArr) {
                ((ScoreEventListener)mListener).scoreChanged(name, addedValue, groupIndex, subIndex);
			}
		}
        
    }



}