package il.co.codeguru.corewars8086.gui.widgets;

public class Color {
    public static String BLACK = "#000000";
    public static String black = "#000000";
    public static String WHITE = "#ffffff";

    int m_r, m_g, m_b;

    public Color(int r, int g, int b) {
        m_r = r;
        m_g = g;
        m_b = b;
    }

    public static Color getHSBColor(float h, float s, float b) {
        return new Color(0,0,0);
    }

    public Color darker() {
        return this;
    }
}