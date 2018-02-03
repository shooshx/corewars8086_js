package il.co.codeguru.corewars8086.gui;

//import java.awt.BorderLayout;
//import java.awt.GridLayout;

//import javax.swing.JCheckBox;
//import javax.swing.JLabel;
//import javax.swing.JPanel;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLInputElement;
import il.co.codeguru.corewars8086.gui.widgets.*;

public class FlagFields extends JPanel {
	
	private HTMLInputElement checkBox;
	
	public FlagFields(String name) {
		
		//super.setLayout(new GridLayout(1,2));
		//super.setSize(20,20);
		//super.add(new JLabel(name + ":"),BorderLayout.LINE_START);
		name = name + "_fcheck";
		checkBox = (HTMLInputElement) DomGlobal.document.getElementById( name);
		if (checkBox == null) {
			Console.error("Did not find flag " + name);
		}
		
		//super.add(checkBox,BorderLayout.LINE_START);
	}
	
	public void setValue(boolean value){
		checkBox.checked = value;
	}
	
	public boolean getValue(){
		return checkBox.checked;
	}
	
}
