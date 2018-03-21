package il.co.codeguru.corewars8086.gui;


import il.co.codeguru.corewars8086.cpu.CpuState;

public interface IBreakpointCheck {
    boolean shouldBreak(CpuState state);
}