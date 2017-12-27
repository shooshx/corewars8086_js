package il.co.codeguru.corewars8086.gui.widgets;

import java.util.HashMap;

public class JButton extends JComponent
{
    public JButton(String id, String text) {
        super(id);
        registerBut(id,this);
      /*  m_element.addEventListener("click", new EventListener<Event>() {
            @Override
            public void handleEvent(Event evt) {
                if (m_listener == null)
                    return;
                m_listener.actionPerformed(new ActionEvent(JButton.this));
            }
        });*/
    
    }
    
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