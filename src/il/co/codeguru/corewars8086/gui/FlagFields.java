package il.co.codeguru.corewars8086.gui;

//import java.awt.BorderLayout;
//import java.awt.GridLayout;

//import javax.swing.JCheckBox;
//import javax.swing.JLabel;
//import javax.swing.JPanel;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import il.co.codeguru.corewars8086.gui.widgets.*;

public class FlagFields extends JPanel {
	
	private HTMLInputElement checkBox;
	private HTMLElement bk1, bk2;
	private CpuFrame m_frame;
	
	public FlagFields(final String name, CpuFrame frame) {
		m_frame = frame;
		//super.setLayout(new GridLayout(1,2));
		//super.setSize(20,20);
		//super.add(new JLabel(name + ":"),BorderLayout.LINE_START);
		String ename = name + "_fcheck";
		checkBox = (HTMLInputElement) DomGlobal.document.getElementById( ename);
		bk1 = (HTMLElement)DomGlobal.document.getElementById(name + "_bk1");
		bk2 = (HTMLElement)DomGlobal.document.getElementById(name + "_bk2");
		if (checkBox == null || bk1 == null || bk2 == null) {
			Console.error("Did not find flag " + name);
		}

		
		//super.add(checkBox,BorderLayout.LINE_START);

		checkBox.addEventListener("change", (event) -> {
			m_frame.flagChanged_callback(name, checkBox.checked);

		});
	}
	
	public void setValue(boolean value){
		boolean changed = (checkBox.checked != value);
		bk1.classList.toggle("reg_flags_changed", changed);
		bk2.classList.toggle("reg_flags_changed", changed);

		checkBox.checked = value;
	}

	public void resetChanged() {
		bk1.classList.toggle("reg_flags_changed", false);
		bk2.classList.toggle("reg_flags_changed", false);
	}
	
	public boolean getValue(){
		return checkBox.checked;
	}
	
}
