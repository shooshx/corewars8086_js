package il.co.codeguru.corewars8086.gui.widgets;

//import com.google.gwt.dom.client.InputElement;
import elemental2.dom.HTMLInputElement;

public class JTextField extends JComponent<HTMLInputElement>
{
	//String m_text = null;
    public JTextField(String id, String text, int columns) {
        super(id);
        //m_text = text;
        if (text != null)
            m_element.value = text;
    }
    public JTextField(int columns) {
    }
    public JTextField(String text, int columns) {
    }


    public void setEditable(boolean v) {

    }

    @Override
    public void setText(String v) {
        m_element.value = v;
    	//m_text = v;
    }
    @Override
    public String getText() {
        return m_element.value;
    	//return m_text;
    }
}