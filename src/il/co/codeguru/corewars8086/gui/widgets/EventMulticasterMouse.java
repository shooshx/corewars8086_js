package il.co.codeguru.corewars8086.gui.widgets;


import il.co.codeguru.corewars8086.gui.MouseAddressRequest;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterMouse extends EventMulticasterBase {
    

    

    public Object getProxy() {
        if ( mProxy == null ) {
            mProxy = new MulticasterHandler();
        }
        return mProxy;
    }
    
    private class MulticasterHandler implements MouseAddressRequest {

		@Override
		public void addressAtMouseLocationRequested(int address) {
            isCasting = true;
			for (Object mListener : mListenersArr) {
                ((MouseAddressRequest)mListener).addressAtMouseLocationRequested(address);
			}
            isCasting = false;
            addWaiting();
		}
        
    }



}