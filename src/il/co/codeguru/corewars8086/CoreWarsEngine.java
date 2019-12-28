package il.co.codeguru.corewars8086;

import il.co.codeguru.corewars8086.gui.CompetitionWindow;
import il.co.codeguru.corewars8086.gui.widgets.JButton;

import java.io.IOException;

public class CoreWarsEngine
{
	public static void main (String args[]) throws IOException
	{
        CompetitionWindow c = new CompetitionWindow();
        c.s_instance = c;
        c.setVisible(true);
        c.pack();
        
       // JButton.press("runWarButton");
        
       // long x = 0x00010002f000e000L;
        
        
    }
}