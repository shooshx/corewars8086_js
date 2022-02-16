package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterMemory extends EventMulticasterBase<MemoryEventListener> {

    public CondDebugHandler proxy;

    public EventMulticasterMemory() {
        proxy = new CondDebugHandler();
        //competeProxy = new CompeteHandler();
    }


    public class CondDebugHandler implements MemoryEventListener {
        private boolean debug = true;

        public void setDebug(boolean v)
        {
            debug = v;
        }

		@Override
		public void onMemoryWrite(RealModeAddress address, byte value, boolean dontCare) {
			for (Object mListener : mListenersArr) {
                ((MemoryEventListener)mListener).onMemoryWrite(address, value, debug);
			}
		}

        @Override
        public void onWriteState(EWriteState state) {        
            for (Object mListener : mListenersArr) {
                ((MemoryEventListener)mListener).onWriteState(state);
            }
        }

    }



}