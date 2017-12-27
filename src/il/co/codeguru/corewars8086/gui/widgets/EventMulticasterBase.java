package il.co.codeguru.corewars8086.gui.widgets;


import il.co.codeguru.corewars8086.gui.MouseAddressRequest;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterBase {
    
    protected Object mProxy;
    protected Set<Object> mListeners = new HashSet<>(); //new LinkedHashSet<>();
	protected Object[] mListenersArr = new Object[0];
    protected Set<Object> mWaitingListeners = new HashSet<>(); //LinkedHashSet<Object>();
    protected boolean isCasting;


    
    /** Add an event listener to the list.
     */
    public void add(Object pListener) {
    	if (isCasting) {
    		mWaitingListeners .add(pListener);
    	} else {
    		mListeners.add(pListener);
    	}
		mListenersArr = mListeners.toArray(new Object[mListeners.size()]);
    }
    
    /** Remove an event listener from the list.
     */
    public void remove(Object pListener) {
        mListeners.remove(pListener);
		mListenersArr = mListeners.toArray(new Object[mListeners.size()]);
    }

    /** Get the proxy for this event multicaster. This proxy can then be
     * used to broadcast events to all the registered event listeners.
     */
    public Object getProxy() {
        return null;
    }
    

    
    public void addWaiting() {
        if (!mWaitingListeners.isEmpty()) {
            // listeners are waiting to be added, add them after multicasting
            for (Object lis: mWaitingListeners) {
                add(lis);
            }
            mWaitingListeners.clear();
        }	
    }
    

}