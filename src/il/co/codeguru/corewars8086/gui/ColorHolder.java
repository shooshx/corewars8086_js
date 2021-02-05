package il.co.codeguru.corewars8086.gui;

//import java.awt.Color;
import il.co.codeguru.corewars8086.gui.widgets.*;


public class ColorHolder {
    private Color colors[];
	private Color darkColors[];
	private Color altColors[];
	private Color altDarkColors[];
	public static final int MAX_COLORS = 360;
	private static ColorHolder ins = new ColorHolder(MAX_COLORS);

    private ColorHolder(int numPlayers) {
		// see http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/

		colors = new Color[numPlayers];
		float golden_ratio_conjugate = 0.618033988749895f;
		float x = 0;
		for (int i = 0; i < MAX_COLORS; i++) {
			colors[i] = Color.getHSBColor(x % 1, 0.8f, 0.95f);
			x += golden_ratio_conjugate;
		}

		darkColors = new Color[colors.length];
		altColors = new Color[colors.length];
		altDarkColors = new Color[colors.length];
        for (int i = 0; i  < colors.length; i++) {
			darkColors[i] = colors[i].darker();
			altColors[i] = colors[i].opposite();
			altDarkColors[i] = altColors[i].darker();
        }
    }

	public static ColorHolder getInstance() {
		return ins;
	}

    public Color getColor(int pos, boolean darker, boolean altColor) {
		if (altColor) {
			if (darker)
				return altDarkColors[pos];
			return altColors[pos];
		}
		if (darker)
			return darkColors[pos];
		return colors[pos];
	}
	
}
