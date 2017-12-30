package il.co.codeguru.corewars8086.gui.widgets;

import java.util.HashMap;

import com.google.gwt.dom.client.InputElement;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;
import com.google.gwt.user.client.Window;

public class JButton extends JComponent<InputElement>
{
    public JButton(String id, String text) {
        super(id);
        registerBut(id,this);
        if (m_element == null)
            return;
        Event.sinkEvents(m_element, Event.ONCLICK);
        Event.setEventListener(m_element, new EventListener() {
    
            @Override
            public void onBrowserEvent(Event event) {
                if(Event.ONCLICK == event.getTypeInt()) {
                    if (m_listener == null)
                        return;
                    m_listener.actionPerformed(new ActionEvent(JButton.this));
                }
    
            }
        });
    
    }
    

    // offline actuvation hack
    public void click() {
        if (m_listener == null)
            return;
        m_listener.actionPerformed(new ActionEvent(JButton.this));    	
    }
    

    static HashMap<String, JButton> m_buts = new HashMap<String, JButton>();
    static void registerBut(String id, JButton but) {
    	System.out.println("register button " + id);
    	m_buts.put(id, but);
    }
    
    public static void press(String id) {
    	m_buts.get(id).click();
    }
    
}