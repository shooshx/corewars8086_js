package il.co.codeguru.corewars8086.gui.widgets;

public class ActionEvent {
    private Object m_source;
    
    public ActionEvent(Object source)  {
        m_source = source;
    }
    public Object getSource() {
        return m_source;
    }
}