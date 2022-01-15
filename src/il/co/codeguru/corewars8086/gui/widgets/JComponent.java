package il.co.codeguru.corewars8086.gui.widgets;

//import com.google.gwt.dom.client.Document;
//import com.google.gwt.dom.client.Element;
//import com.google.gwt.user.client.Event;
//import com.google.gwt.user.client.EventListener;

import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.EventListener;

public class JComponent<T>
{
    public T m_element;
    public boolean m_enabled = true;

    public JComponent(String id) {
        m_element = (T)DomGlobal.document.getElementById(id);

        if (m_element == null) {
            Console.log("did not find element " + id);
            return;
        }
        else {
            Console.log("found element " + id);
        }
    }

    public JComponent() {
    }

    public void setOnEvent(String evname) {
        ((Element)m_element).addEventListener(evname, new EventListener() {
            @Override
            public void handleEvent(Event event) { // this listener listens to all of the event
                if (m_listener == null)
                    return;
                m_listener.actionPerformed(new ActionEvent(JComponent.this));
    
            }
        });
    }


    protected ActionListener m_listener = null;
    public void addActionListener(ActionListener listener) {
        m_listener = listener;
    }
    
    public void setEnabled(boolean v) {
        if (m_element == null)
            return;
        m_enabled = v;
        ((Element)m_element).setAttribute("disabled", v?"false":"true");
    }

    public boolean isVisible() {
        return true;
    }
    
    public void setText(String v) {
        if (m_element == null)
            return;
        ((Element)m_element).innerHTML = v;
    }
    public String getText() {
        if (m_element == null)
            return "";
        return ((Element)m_element).innerHTML;
    }


    public void repaint() {
        paint();
    }

    public void paint() {
    }


    public Dimension getMinimumSize() {
        return new Dimension(50,50);
    }
  
    public Dimension getPreferredSize() {
        return getMinimumSize();
    }

    public Dimension getSize() {
        return new Dimension(0,0);
    }

}