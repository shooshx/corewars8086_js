package il.co.codeguru.corewars8086.gui.widgets;

public class MouseEvent {
    int m_x, m_y;
    
    public MouseEvent(int x, int y) {
        m_x = x;
        m_y = y;
    }

    public int getX() {
        return m_x;
    }
    public int getY() {
        return m_y;
    }
    
}