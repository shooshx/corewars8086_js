package il.co.codeguru.corewars8086.gui.widgets;

import com.google.gwt.dom.client.InputElement;

public class JCheckBox extends JComponent<InputElement>
{
    public JCheckBox(String id, String text) {
        super(id);
        setOnChange();
    }
    public JCheckBox() {
    }    

    public boolean isSelected() {
        return m_element.isChecked();
    }
    public void setSelected(boolean v) {
        m_element.setChecked(v);
    }

    
}