package il.co.codeguru.corewars8086.gui;


import elemental2.dom.Event;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.CanvasRenderingContext2D;
import elemental2.dom.CanvasRenderingContext2D.StrokeStyleUnionType;
import elemental2.dom.CanvasRenderingContext2D.FillStyleUnionType;



import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.jsadd.Format;


public class Canvas extends JComponent<HTMLCanvasElement> {

	public static final int BOARD_SIZE = 256;
	public static final int DOT_SIZE = 3;
	public static final int MARGIN_SIZE = 45; // in pixels

    public static final int CANVAS_HEIGHT = BOARD_SIZE*DOT_SIZE+2*MARGIN_SIZE;
    public static final int CANVAS_WIDTH = BOARD_SIZE*DOT_SIZE+2*MARGIN_SIZE;

    public static final byte EMPTY = -1;

    private CanvasRenderingContext2D ctx;
	private byte[][] data; // holds colors, not values

	private byte[][] pointer;

	private EventMulticasterMouse eventCaster;
	private MouseAddressRequest eventHandler;

	private int MouseX, MouseY;

	private float m_zrHscale, m_zrVscale, m_zrX, m_zrY; // zoom rect

	public Canvas(String id) {
		super(id);
		eventCaster = new EventMulticasterMouse();
		eventHandler = (MouseAddressRequest) eventCaster.getProxy();
		//this.addMouseMotionListener(this);
		//this.addMouseListener(this);
		this.MouseX = 0;
		this.MouseY = 0;
		ctx = (CanvasRenderingContext2D)(Object)m_element.getContext("2d");

		Dimension d = getMinimumSize();
		m_element.width = d.width;
		m_element.height = d.height;

		exportMethods();
		initZoom();
		clear();
	}

	@Override
	public Dimension getMinimumSize() {
		return new Dimension(CANVAS_WIDTH, CANVAS_HEIGHT);
	}

	@Override
	public Dimension getPreferredSize() {
		return getMinimumSize();
	}


	public void paintPixel(int number, byte color) {
	    paintPixel(number % BOARD_SIZE, number / BOARD_SIZE, color);
	}

	public void paintPixel(int x, int y, byte color) {
		data[x][y] = color;

		ctx.fillStyle = FillStyleUnionType.of(ColorHolder.getInstance().getColor(color, false).toString());
		ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);

	}


	public void paintPointer(int number, byte colorByte) {
	    int x = number % BOARD_SIZE;
	    int y = number / BOARD_SIZE;
	    Color color = ColorHolder.getInstance().getColor(colorByte, true);

        pointer[x][y] = colorByte;
        ctx.fillStyle = FillStyleUnionType.of(color.toString());
        ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
	}


	private static native void resetZoom() /*-{
		$wnd.js_resetZoom()
	}-*/;

	/**
	 * Clears the entire canvas
	 */
	public void clear() {
		if (data == null)
			data = new byte[BOARD_SIZE][BOARD_SIZE];
		if (pointer == null)
			pointer = new byte[BOARD_SIZE][BOARD_SIZE];
		for (int i = 0; i < BOARD_SIZE; i++)
			for (int j = 0; j < BOARD_SIZE; j++) {
				data[i][j] = EMPTY;
				pointer[i][j] = EMPTY;
			}

		resetZoom(); // already does the repaint
		//repaint();
	}

	/**
	 * When we have to - repaint the entire canvas
	 */
	@Override
	public void paint() {
		ctx.fillStyle = FillStyleUnionType.of(Color.WHITE);
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // TBD remove this
        ctx.fillStyle = FillStyleUnionType.of(Color.BLACK);
		ctx.fillRect(0, 0, BOARD_SIZE * DOT_SIZE, BOARD_SIZE * DOT_SIZE);

		for (int y = 0; y < BOARD_SIZE; y++)
		{
			for (int x = 0; x < BOARD_SIZE; x++)
			{
			    int cellPtr = pointer[x][y];
			    String colStr = null;
			    if (cellPtr != EMPTY) {
                    colStr = ColorHolder.getInstance().getColor(cellPtr, true).toString();
                }
				else {
			        int cellVal = data[x][y];
                    if (cellVal != EMPTY) {
                        colStr = ColorHolder.getInstance().getColor(cellVal, false).toString();
                    }
                    else
                        continue;
                }

				ctx.fillStyle = FillStyleUnionType.of(colStr);
				ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
			}
		}

		ctx.save();
		ctx.setTransform(1, 0, 0,1, 0, 0);
		ctx.fillStyle = FillStyleUnionType.of("#ffffff");
		ctx.fillRect(0,0, MARGIN_SIZE, CANVAS_HEIGHT);
        ctx.fillRect(0,0, CANVAS_WIDTH, MARGIN_SIZE);
        ctx.fillRect(CANVAS_WIDTH-MARGIN_SIZE,0, MARGIN_SIZE, CANVAS_HEIGHT);
        ctx.fillRect(0,CANVAS_HEIGHT-MARGIN_SIZE, CANVAS_WIDTH, MARGIN_SIZE);

        ctx.strokeStyle = StrokeStyleUnionType.of("#ffffff solid 1px");
        ctx.beginPath();
        ctx.font = "14px monospace";
        ctx.textBaseline = "middle";

        int step = 32;
        int rc = (int)m_zrVscale;
        if (rc >= 2 && rc < 4)
            step /= 2;
        else if (rc >= 4 && rc <= 8)
            step /= 4;
        else if (rc >= 8 && rc <= 16)
            step /= 8;
        //step = Math.max(step / roundScale, 1);

        for(int y = 0; y <= 256; y += step) {
            ctx.fillStyle = FillStyleUnionType.of("#000000");
            int ry = Math.min(y, 255);

            float ycoord = MARGIN_SIZE + m_zrY + ry * DOT_SIZE * m_zrVscale;
            if (ycoord < MARGIN_SIZE || ycoord > CANVAS_HEIGHT-MARGIN_SIZE)
                continue;
            ctx.fillText(Format.hex4(ry*256), 1, ycoord);
            ctx.moveTo(38, ycoord);
            ctx.lineTo(44, ycoord);
        }

        for(int x = 0; x <= 256; x += step) {
            ctx.fillStyle = FillStyleUnionType.of("#000000");
            int rx = Math.min(x, 255);

            float xcoord = MARGIN_SIZE + m_zrX + rx * DOT_SIZE * m_zrHscale;
            if (xcoord < MARGIN_SIZE || xcoord > CANVAS_HEIGHT-MARGIN_SIZE)
                continue;
            ctx.fillText(Format.hex2(rx), xcoord-6, CANVAS_HEIGHT - 27);
            ctx.moveTo(xcoord, CANVAS_HEIGHT-38);
            ctx.lineTo(xcoord, CANVAS_HEIGHT-44);
        }

        ctx.stroke();

        ctx.restore();

	}


	public void mouseMoved(MouseEvent e) {

		//Graphics g = this.getGraphics();

		/*if (g != null)*/ {
			// delete Mouse
			//this.clearMousePointer(g);

			if (true) {
				MouseX = e.getX() / DOT_SIZE;
				MouseY = e.getY() / DOT_SIZE;

				// draw new Mouse
				//	g.setColor(Color.WHITE);

				//	g.fillRect(MouseX * DOT_SIZE, MouseY * DOT_SIZE, DOT_SIZE,
				//			DOT_SIZE);
			}
		}
	}

	private void clearMousePointer() {
		try {
			//g.setColor(ColorHolder.getInstance()
			//		.getColor(data[MouseX][MouseY],false));
		} catch (Exception ex) {
			// TODO the true variable of the color
			//g.setColor(new Color(51, 51, 51)); 
		}
		//g.fillRect(MouseX * DOT_SIZE, MouseY * DOT_SIZE, DOT_SIZE, DOT_SIZE);
	}



	public void addListener(MouseAddressRequest l) {
		eventCaster.add(l);
	}

	public void deletePointers() {
		for (int i = 0; i < BOARD_SIZE; i++)
			for (int j = 0; j < BOARD_SIZE; j++) {
				if (pointer[i][j] != EMPTY && data[i][j] != EMPTY) {
					pointer[i][j] = EMPTY;
					paintPixel(i, j, data[i][j]);
				}
			}
	}

	// ------------------------------ zoom and pan ---------------------------
	public native void exportMethods() /*-{
        var that = this
        $wnd.j_warCanvas_repaint = $entry(function() { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_repaint()() });
        $wnd.j_warCanvas_setTransform = $entry(function(a,b,c,d) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_setTransform(FFFF)(a,b,c,d) });
    }-*/;


	public void j_warCanvas_repaint() {
		repaint();
	}

	private static native void initZoom() /*-{
		$wnd.js_initZoom()
	}-*/;

    public void j_warCanvas_setTransform(float hscale, float vscale, float x, float y) {
        //Console.log("scale= " + Float.toString(hscale));
        m_zrHscale = hscale;
        m_zrVscale = vscale;
        m_zrX = x;
        m_zrY = y;
        ctx.setTransform(m_zrHscale, 0, 0, m_zrVscale, m_zrX+MARGIN_SIZE, m_zrY+MARGIN_SIZE);
    }




}
