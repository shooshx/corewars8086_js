package il.co.codeguru.corewars8086.memory;

/**
 * Memory region (start address, end address)
 * 
 * @author DL
 */
public class RealModeMemoryRegion {
	
    /**
     * Constructor.
     * 
     * @param start  Region's start address.
     * @param end    Region's end address.
     */
    public RealModeMemoryRegion(RealModeAddress start, RealModeAddress end) {
        m_start = start.getLinearAddress();
        m_end = end.getLinearAddress();
    }

    /**
     * Returns whether or not a given address is within the region.
     * 
     * @param asked  Address to check.
     * @return whether or not the given address is within the region.
     */
    public boolean isInRegion(int asked) {
        return ((asked >= m_start) && (asked <= m_end));
    }

    /** Region's start address */
    private final int m_start;
    /** Region's end address */
    private final int m_end;
}