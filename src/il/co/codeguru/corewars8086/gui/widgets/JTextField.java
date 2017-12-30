package il.co.codeguru.corewars8086.gui.widgets;

import com.google.gwt.dom.client.InputElement;

public class JTextField extends JComponent<InputElement>
{
	//String m_text = null;
    public JTextField(String id, String text, int columns) {
        super(id);
        //m_text = text;
        if (text != null)
            m_element.setValue(text);
    }
    public JTextField(int columns) {
    }
    public JTextField(String text, int columns) {
    }


    public void setEditable(boolean v) {

    }

    @Override
    public void setText(String v) {
        m_element.setValue(v);
    	//m_text = v;
    }
    @Override
    public String getText() {
        return m_element.getValue();
    	//return m_text;
    }
}