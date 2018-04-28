package il.co.codeguru.corewars8086.gui.widgets;

import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import java.util.*;

/**
 * An event multicaster which broadcasts Events to a number of listeners.
 * @author BS
 */
public class EventMulticasterMemory extends EventMulticasterBase<MemoryEventListener> {

    public MemoryEventListener debugProxy, competeProxy;

    public EventMulticasterMemory() {
        debugProxy = new DebugHandler();
        competeProxy = new CompeteHandler();
    }

    private class CompeteHandler implements MemoryEventListener {
        @Override
        public void onMemoryWrite(RealModeAddress address, byte value) {
        }

        @Override
        public void onWriteState(EWriteState state) {
        }

    }

    private class DebugHandler implements MemoryEventListener {
		@Override
		public void onMemoryWrite(RealModeAddress address, byte value) {
			for (Object mListener : mListenersArr) {
                ((MemoryEventListener)mListener).onMemoryWrite(address, value);
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