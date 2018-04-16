package il.co.codeguru.corewars8086.gui;


import elemental2.dom.Event;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.CanvasRenderingContext2D;
import elemental2.dom.CanvasRenderingContext2D.StrokeStyleUnionType;
import elemental2.dom.CanvasRenderingContext2D.FillStyleUnionType;


import elemental2.dom.Path2D;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;


public class Canvas extends JComponent<HTMLCanvasElement> {

	public static final int BOARD_SIZE = 256;
	public static final int DOT_SIZE = 3;
	//public static final int MARGIN_SIZE = 45; // in pixels
    public static final int MARGIN_TOP = 20, MARGIN_RIGHT = 20, MARGIN_BOTTOM = 45, MARGIN_LEFT = 45;
    public static final int BOARD_SIZE_PX = BOARD_SIZE * DOT_SIZE;

    public static final int CANVAS_HEIGHT = BOARD_SIZE*DOT_SIZE + MARGIN_TOP + MARGIN_BOTTOM;
    public static final int CANVAS_WIDTH = BOARD_SIZE*DOT_SIZE + MARGIN_LEFT + MARGIN_RIGHT;

    public static final byte EMPTY = -1;

    private CanvasRenderingContext2D ctx;
	private byte[][] data; // holds colors, not values

	private byte[][] pointer;
	private byte[][] values;

	private EventMulticasterMouse eventCaster;
	private MouseAddressRequest eventHandler;

	private int MouseX, MouseY;

	private float m_zrHscale, m_zrVscale, m_zrX, m_zrY; // zoom rect
    private boolean m_showContent = false;
    private Path2D m_memclip, m_coordXclip, m_coordYclip;

    class Turtle {
        float x, y;
        Path2D p;
        public Turtle(Path2D _p) { p = _p; }
        public void moveTo(float _x, float _y) { x = _x; y = _y; p.moveTo(x, y); }
        public void up(float v)   { y -= v; p.lineTo(x, y); }
        public void down(float v) { y += v; p.lineTo(x, y); }
        public void left(float v) { x -= v; p.lineTo(x, y); }
        public void right(float v){ x += v; p.lineTo(x, y); }
    };

    public static final int TEXT_EPS = 6; // how much to leave in the clipping for half the text
    public static final int TICK_WIDTH = 7;

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
        ctx.save(); // save state with full page clipping

        m_memclip = new Path2D();
        m_memclip.moveTo(MARGIN_LEFT, MARGIN_TOP);
        m_memclip.lineTo(CANVAS_WIDTH - MARGIN_RIGHT, MARGIN_TOP);
        m_memclip.lineTo(CANVAS_WIDTH - MARGIN_RIGHT, CANVAS_HEIGHT - MARGIN_BOTTOM);
        m_memclip.lineTo(MARGIN_LEFT, CANVAS_HEIGHT - MARGIN_BOTTOM);

        // make a D like shape that deletes the tick at the exact line of the canvas but leaves place for the text to not be clipped
        m_coordYclip = new Path2D();
        Turtle t = new Turtle(m_coordYclip);
        t.moveTo(0, MARGIN_TOP-TEXT_EPS);
        t.right(MARGIN_LEFT-TICK_WIDTH);
        t.down(TEXT_EPS);
        t.right(TICK_WIDTH);
        t.down(BOARD_SIZE_PX);
        t.left(TICK_WIDTH);
        t.down(TEXT_EPS);
        t.left(MARGIN_LEFT-TICK_WIDTH);

        m_coordXclip = new Path2D();
        t.p = m_coordXclip;
        t.moveTo(MARGIN_LEFT-TEXT_EPS, CANVAS_HEIGHT);
        t.up(MARGIN_BOTTOM-TICK_WIDTH);
        t.right(TEXT_EPS);
        t.up(TICK_WIDTH);
        t.right(BOARD_SIZE_PX);
        t.down(TICK_WIDTH);
        t.right(TEXT_EPS);
        t.down(MARGIN_BOTTOM-TICK_WIDTH);


        ctx.clip(m_memclip);



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


	public void paintPixel(int number, byte color, byte value) {
	    paintPixel(number % BOARD_SIZE, number / BOARD_SIZE, color, value);
	}

	public void paintPixel(int x, int y, byte colorByte, byte value) {
		data[x][y] = colorByte;
        values[x][y] = value;

        Color color = ColorHolder.getInstance().getColor(colorByte, false);
		ctx.fillStyle = FillStyleUnionType.of(color.toString());
		ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
        if (m_showContent)
            paintTextValue(x, y, color);
	}


	public void paintPointer(int number, byte colorByte) {
	    int x = number % BOARD_SIZE;
	    int y = number / BOARD_SIZE;
	    Color color = ColorHolder.getInstance().getColor(colorByte, true);

        pointer[x][y] = colorByte;
        ctx.fillStyle = FillStyleUnionType.of(color.toString());
        ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
        if (m_showContent)
            paintTextValue(x, y, color);
	}

	public void paintTextValue(int x, int y, Color backCol) {
        String textCol;
        if (backCol != null) {
            if (backCol.m_isDark)
                textCol = "#ffffff";
            else
                textCol = "#000000";
        }
        else
            textCol = "#666666";
        ctx.fillStyle = FillStyleUnionType.of(textCol);
        ctx.fillText(  Format.hex2(values[x][y] & 0xff),  x * DOT_SIZE + 0.2, y * DOT_SIZE + 2.2);
    }


	private static native void resetZoom() /*-{
		$wnd.js_resetZoom()
	}-*/;


	public void readFromMemory(RealModeMemoryImpl mem) {
        int addr = 0x10000;
        for (int y = 0; y < BOARD_SIZE; y++)
        {
            for (int x = 0; x < BOARD_SIZE; x++)
            {
                values[x][y] = mem.readByte(addr);
                addr += 1;
            }
        }
    }

	public void clear() {
		if (data == null)
			data = new byte[BOARD_SIZE][BOARD_SIZE];
		if (pointer == null)
			pointer = new byte[BOARD_SIZE][BOARD_SIZE];
		if (values == null)
            values = new byte[BOARD_SIZE][BOARD_SIZE];

		for (int i = 0; i < BOARD_SIZE; i++)
			for (int j = 0; j < BOARD_SIZE; j++) {
				data[i][j] = EMPTY;
				pointer[i][j] = EMPTY;
			}

		ctx.setTransform(1,0,0,1,0,0);


        ctx.clip(m_memclip);

		resetZoom(); // already does the repaint
		//repaint();

        // default clipping is the memory area - for random access writes to not go overboard
        //Path2D


	}


	@Override
	public void paint() {
		ctx.fillStyle = FillStyleUnionType.of(Color.WHITE);
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // TBD remove this
        ctx.fillStyle = FillStyleUnionType.of(Color.BLACK);
		ctx.fillRect(0, 0, BOARD_SIZE * DOT_SIZE, BOARD_SIZE * DOT_SIZE);

        if (m_showContent) {
		    //ctx.font = Integer.toString((int)(DOT_SIZE * m_zrHscale)) + "px monospace";
            ctx.font = "2.3px monospace";
        }

        float sx = -m_zrX / DOT_SIZE / m_zrHscale - 1;
        float sy = -m_zrY / DOT_SIZE / m_zrVscale;
        float ex = sx + (256 / m_zrHscale) + 1;
        float ey = sy + (256 / m_zrVscale) + 1;

		for (int y = 0; y < BOARD_SIZE; y++)
		{
			for (int x = 0; x < BOARD_SIZE; x++)
			{
			    int cellPtr = pointer[x][y];
			    Color col = null;
			    if (cellPtr != EMPTY) {
                    col = ColorHolder.getInstance().getColor(cellPtr, true);
                }
				else {
			        int cellVal = data[x][y];
                    if (cellVal != EMPTY) {
                        col = ColorHolder.getInstance().getColor(cellVal, false);
                    }
                }

                if (col != null) {
                    ctx.fillStyle = FillStyleUnionType.of(col.toString());
                    ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
                }

                if (m_showContent && (x > sx && x < ex && y > sy && y < ey)) {
                    paintTextValue(x, y, col);
                }
			}
		}

		//------------ paint the X and Y coordinates at the margins -------------------

		ctx.restore(); // full clipping, no transform
        ctx.save(); // re-save the full clipping state

		//ctx.setTransform(1, 0, 0,1, 0, 0);
		ctx.fillStyle = FillStyleUnionType.of("#ffffff");
		ctx.fillRect(0,0, MARGIN_LEFT, CANVAS_HEIGHT);
        //ctx.fillRect(0,0, CANVAS_WIDTH, MARGIN_SIZE);
        //ctx.fillRect(CANVAS_WIDTH-MARGIN_SIZE,0, MARGIN_SIZE, CANVAS_HEIGHT);
        ctx.fillRect(0,CANVAS_HEIGHT-MARGIN_BOTTOM, CANVAS_WIDTH, MARGIN_BOTTOM);

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
        else if (rc >= 16)
            step /= 16;
        //step = Math.max(step / roundScale, 1);
        ctx.fillStyle = FillStyleUnionType.of("#888888");
        ctx.clip(m_coordYclip);

        for(int y = 0; y <= 256; y += step) {
            int ry = Math.min(y, 255);
            float scaledDot = DOT_SIZE*m_zrVscale;
            float ycoord = MARGIN_TOP + m_zrY + ry * scaledDot;
            if (ycoord + scaledDot < MARGIN_TOP || ycoord > CANVAS_HEIGHT-MARGIN_BOTTOM)
                continue;
            ctx.fillText(Format.hex4(ry*256), 1, ycoord + scaledDot/2);
            ctx.fillRect(38, ycoord,  6, scaledDot);
        }

        ctx.restore();
        ctx.save();
        ctx.clip(m_coordXclip);

        ctx.font = "14px monospace";
        ctx.fillStyle = FillStyleUnionType.of("#888888");

        for(int x = 0; x <= 256; x += step) {
            int rx = Math.min(x, 255);

            float scaledDot = DOT_SIZE*m_zrHscale;
            float xcoord = MARGIN_LEFT + m_zrX + rx * scaledDot;

            if (xcoord + scaledDot < MARGIN_LEFT || xcoord > CANVAS_HEIGHT-MARGIN_RIGHT)
                continue;
            ctx.fillText(Format.hex2(rx), xcoord-7+scaledDot/2, CANVAS_HEIGHT - 24);
            ctx.fillRect(xcoord, CANVAS_HEIGHT-44, scaledDot, 6);
        }

        ctx.restore();
        ctx.save();

        //ctx.stroke();


        // restore the transformation and clip we had before for random access writes
        ctx.clip(m_memclip);
        ctx.setTransform(m_zrHscale, 0, 0, m_zrVscale, m_zrX+MARGIN_LEFT, m_zrY+MARGIN_TOP);
        ctx.font = "2.3px monospace";

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
					paintPixel(i, j, data[i][j], values[i][j]);
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
        Console.log("scale= " + Float.toString(hscale) + "  x=" + Float.toString(-x / DOT_SIZE));
        m_zrHscale = hscale;
        m_zrVscale = vscale;
        m_zrX = x;
        m_zrY = y;
        ctx.setTransform(m_zrHscale, 0, 0, m_zrVscale, m_zrX+MARGIN_LEFT, m_zrY+MARGIN_TOP);
        m_showContent = (m_zrHscale > 4.0);
    }




}
