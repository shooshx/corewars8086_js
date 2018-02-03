package il.co.codeguru.corewars8086.gui;

//import java.awt.BorderLayout;
//import java.awt.GridLayout;

//import javax.swing.JLabel;
//import javax.swing.JPanel;
//import javax.swing.JTextField;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLInputElement;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.jsadd.Format;

public class RegisterField /*extends JPanel*/ {

	private HTMLInputElement textField;
	private int m_base = 16;

	public RegisterField(String name) {

	//	super.setLayout(new GridLayout(1, 2));
	//	super.setSize(50, 20);
	//	super.add(new JLabel(name + ":"), BorderLayout.LINE_START);
		name = "reg_" + name;
		textField = (HTMLInputElement) DomGlobal.document.getElementById(name);
		if (textField == null) {
			Console.error("Not found register " + name);
		}

		//super.add(textField, BorderLayout.LINE_START);
	}

	public void setBase(int base) {
		m_base = base;
	}

	public void setValue(short value) {
		//textField.setText(String.format("%04X", value).toUpperCase()); SHY-CHANGED
		if (m_base == 16)
			textField.value = Format.hex((int)value & 0xffff, 4);
		else
			textField.value = Integer.toString((int)value & 0xffff);
	}

	public short getValue() throws Exception {
		return (short) Integer.parseInt(textField.value, 16);
	}

}