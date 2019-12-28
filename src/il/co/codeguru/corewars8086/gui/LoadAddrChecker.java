package il.co.codeguru.corewars8086.gui;

import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.war.WarriorRepository;

import java.util.ArrayList;

public class LoadAddrChecker {
    static class AddrRange {
        String name;
        int start, end;
        AddrRange(String _name, int _start, int _end) { name = _name; start = _start; end = _end; }

        boolean overlaps(AddrRange a) {
            return this.start <= a.end && a.start <= this.end;
        }
        // this  s-------e
        // a       s-------e
    }


    private ArrayList<AddrRange> fixedRanges;
    public LoadAddrChecker(int capacity) {
        fixedRanges = new ArrayList<AddrRange>(capacity);
    }
    public int addCheck(String startAddrStr, int len, String name) {
        // check input
        int startAddr = -1;
        try {
            startAddr = Integer.parseInt(startAddrStr, 16);
        } catch (NumberFormatException e2) {
            Console.err_box("Player " + name + " fixed start address is not a valid hex number");
            return -2;
        }
        if (startAddr < 0 || startAddr > 0xffff) {
            Console.err_box("Player " + name + " fixed start address is out of 16 bit number range");
            return -2;
        }
        if (startAddr > 0xffff - len + 1) {
            Console.err_box("Player " + name + " fixed start address does not leave enough space for code (" + Integer.toString(len) + " bytes)");
            return -2;
        }
        AddrRange r = new AddrRange(name, startAddr, startAddr + len - 1); // both ends of the range are inclusive
        for(AddrRange a: fixedRanges) {
            if (a.overlaps(r)) {
                Console.err_box("Player " + name + " fixed start address overlaps with that of player " + a.name);
                return -2;
            }
        }
        fixedRanges.add(r);
        return startAddr;
    }

    public boolean checkOverlap(int startAddr, int len) {
        // check no overlap
        AddrRange r = new AddrRange(null, startAddr, startAddr + len - 1); // both ends of the range are inclusive
        for(AddrRange a: fixedRanges) {
            if (a.overlaps(r)) {
                return false;
            }
        }
        return true;
    }
}
