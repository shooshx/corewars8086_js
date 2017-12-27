package il.co.codeguru.corewars8086.gui.widgets;



public class JComponent
{
   // protected T m_element;

    public JComponent(String id) {
/*        final Window window = Window.current();
        m_element = (T)window.getDocument().getElementById(id);
        if (m_element == null) {
            System.out.println("did not find button " + id);
            return;
        }*/
    }

    public JComponent() {
    }

    protected ActionListener m_listener = null;
    public void addActionListener(ActionListener listener) {
        m_listener = listener;
    }
    
    public void setEnabled(boolean v) {
    
    }
    public void setVisible(boolean v) {
    }
    public boolean isVisible() {
        return true;
    }
    
    public void setText(String v) {

    }
    public String getText() {
        return "";
    }

    public void setBorder(Object obj) {
    }

    public void setFont(Object f) {

    }

    public void setOpaque(boolean v) {

    }

    public void repaint() {

    }

    public void setPreferredSize(Object obj) {
    }

    public Dimension getMinimumSize() {
        return new Dimension(50,50);
    }
  
    public Dimension getPreferredSize() {
        return getMinimumSize();
    }

    public void setMinimumSize(Dimension d) {
    }

    public void dispose() {
    }
    public void pack() {
    }

    public void addMouseMotionListener(MouseInputListener m) {

    }
    public void addMouseListener(MouseInputListener m) {

    }

    public Dimension getSize() {
        return new Dimension(0,0);
    }
    public void setSize(Dimension d) {

    }
    public void setSize(int w, int h) {

    }

    public void setAlwaysOnTop(boolean v) {
    }
    
}