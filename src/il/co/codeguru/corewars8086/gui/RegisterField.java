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
	private CpuFrame m_frame;
	private boolean m_lastInputOk = true;
	private short m_lastValue;
	private String m_name;

	public RegisterField(String name, CpuFrame frame) {
		m_frame = frame;
		m_name = name;
	//	super.setLayout(new GridLayout(1, 2));
	//	super.setSize(50, 20);
	//	super.add(new JLabel(name + ":"), BorderLayout.LINE_START);
		String ename = "reg_" + name;
		textField = (HTMLInputElement) DomGlobal.document.getElementById(ename);
		if (textField == null) {
			Console.error("Not found register " + name);
		}

		//super.add(textField, BorderLayout.LINE_START);

		textField.addEventListener("input", (event) -> {
			editChanged();
		});
	}

	public void editChanged() {
		int setok = m_frame.regChanged_callback(m_name, textField.value);
		if (setok < -999999) {
			textField.classList.add("dbg_reg_err");
			switch(setok) {
				case -1000000: textField.title = "Failed to parse hex number"; break;
				case -2000000: textField.title = "Failed to parse decimal number"; break;
				case -3000000: textField.title = "Out of range"; break;
			}
			m_lastInputOk = false;
		}
		else {
			textField.classList.remove("dbg_reg_err");
			textField.removeAttribute("title");
			m_lastInputOk = true;
			m_lastValue = (short)setok;
		}
	}

	public void setBase(int base) {
		m_base = base;

		if (!m_lastInputOk) { // maybe the user pressed the base buttons to fix the error he wrote
			editChanged();
		}
		else {
			if (m_base == 16)
				textField.value = Format.hex4((int)m_lastValue & 0xffff);
			else
				textField.value = Integer.toString((int)m_lastValue & 0xffff);
		}
	}

	public void setValue(short value) {
		boolean changed = (m_lastValue != value);
		m_lastValue = value;
		if (m_base == 16)
			textField.value = Format.hex4((int)value & 0xffff);
		else
			textField.value = Integer.toString((int)value & 0xffff);

		textField.classList.toggle("reg_input_changed", changed);
	}

	public short getValue() throws Exception {
		return (short) Integer.parseInt(textField.value, 16);
	}

	public void resetChanged() {
		textField.classList.toggle("reg_input_changed", false);
	}

}