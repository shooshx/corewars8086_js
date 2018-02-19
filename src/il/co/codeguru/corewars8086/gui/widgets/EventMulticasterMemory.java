package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterMemory extends EventMulticasterBase {


    public Object getProxy() {
        if ( mProxy == null ) {
            mProxy = new MulticasterHandler();
        }
        return mProxy;
    }
    
    private class MulticasterHandler implements MemoryEventListener {
		@Override
		public void onMemoryWrite(RealModeAddress address, byte value) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((MemoryEventListener)mListener).onMemoryWrite(address, value);
			}
            isCasting = false;
            addWaiting();			
		}
        
    }



}