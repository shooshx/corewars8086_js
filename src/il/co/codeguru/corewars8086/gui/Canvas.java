package il.co.codeguru.corewars8086.gui;

import com.gargoylesoftware.htmlunit.html.DomElement;
import elemental2.dom.*;
import elemental2.dom.CanvasRenderingContext2D.StrokeStyleUnionType;
import elemental2.dom.CanvasRenderingContext2D.FillStyleUnionType;

import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.war.War;
import il.co.codeguru.corewars8086.war.Warrior;
import il.co.codeguru.corewars8086.cpu.CpuState;
import il.co.codeguru.corewars8086.war.Competition;

import java.util.HashMap;

public class Canvas extends JComponent<HTMLCanvasElement> {

    //public static final int BOARD_SIZE = 256;
    private static final int BOARD_LEN = 65536; // equals to War.ARENA_SIZE
    // product of these must be BOARD_LEN
    private int BOARD_WIDTH = 256;
    private int BOARD_HEIGHT = BOARD_LEN / BOARD_WIDTH; 
    private int BOARD_WIDTH_BITS = mathlog2(BOARD_WIDTH);

    private int DOT_SCALE = 1;
	private int DOT_SIZE = 3;
	//public static final int MARGIN_SIZE = 45; // in pixels
    private static final int MARGIN_TOP = 20, MARGIN_RIGHT = 20, MARGIN_BOTTOM = 45, MARGIN_LEFT = 45;
    //private static final int BOARD_SIZE_PX = BOARD_SIZE * DOT_SIZE;
    private int BOARD_WIDTH_PX = BOARD_WIDTH * DOT_SIZE;
    private int BOARD_HEIGHT_PX = BOARD_HEIGHT * DOT_SIZE;

    private int CANVAS_HEIGHT = BOARD_HEIGHT_PX + MARGIN_TOP + MARGIN_BOTTOM;
    private int CANVAS_WIDTH = BOARD_WIDTH_PX + MARGIN_LEFT + MARGIN_RIGHT;

    private int VIS_WIDTH_PX = CANVAS_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
    private int VIS_HEIGHT_PX = CANVAS_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM;
    // replacing BOARD_WIDTH, BOARD_HEIGHT for expanding memory - how many rows and cols are visible
    private int VIS_WIDTH = VIS_WIDTH_PX/DOT_SIZE;
    private int VIS_HEIGHT = VIS_HEIGHT_PX/DOT_SIZE;

    private static final byte EMPTY = -1;
    private static final byte FLAG_IP_HERE = 1;
    private static final byte FLAG_ALT_OPCODE_COL = 2;

    private CanvasRenderingContext2D ctx;
	private byte[] _data; // holds colors, not values
	private byte[] _flags; // where is IP
    private byte[] _values; // memory values
    
    byte data(int x, int y) {
        return _data[x + (y<<BOARD_WIDTH_BITS)];
    }
    void set_data(int x, int y, byte v) {
        _data[x + (y<<BOARD_WIDTH_BITS)] = v;
    }
    byte flags(int x, int y) {
        return _flags[x + (y<<BOARD_WIDTH_BITS)];
    }
    void set_flag(int x, int y, byte v) {
        _flags[x + (y<<BOARD_WIDTH_BITS)] |= v;
    }
    void reset_flag(int x, int y, byte v) {
        _flags[x + (y<<BOARD_WIDTH_BITS)] &= ~v;
    }
    void clear_flag(int x, int y) {
        _flags[x + (y<<BOARD_WIDTH_BITS)] = 0;
    }
    boolean has_flag(int x, int y, byte v) {
        return (_flags[x + (y<<BOARD_WIDTH_BITS)] & v) != 0;
    }
    byte get_flags(int x, int y) {
        return _flags[x + (y<<BOARD_WIDTH_BITS)];
    }
    byte values(int x, int y) {
        return _values[x + (y<<BOARD_WIDTH_BITS)];
    }
    void set_values(int x, int y, byte v) {
        _values[x + (y<<BOARD_WIDTH_BITS)] = v;
    }        

	//private EventMulticasterMouse eventCaster;
	//private MouseAddressRequest eventHandler;

	//private int MouseX, MouseY;

    private float m_zrHscale, m_zrVscale, m_zrX, m_zrY; // zoom rect (user zoom with wheel)
    private boolean m_alt_opcode_color = false; // from options

    public boolean m_show_reg_ptrs = false;
    class RegPtrInf {
        public RegPtrInf(int _reg_idx, int _seg_idx) { reg_idx = _reg_idx; seg_idx = _seg_idx; }
        int elem_x, elem_y; // in untransformed canvas coordinates
        int reg_idx, seg_idx;
    };
    private HashMap<Integer, RegPtrInf> m_reg_ptrs = new HashMap<Integer, RegPtrInf>();
    // counts how many times we're using each register (for register editing)
    private int[] m_reg_refcounts = new int[CpuState.REG_COUNT];
    String m_selectedPlayerLabel;

    private boolean m_showContent = false;
    private Path2D m_memclip, m_coordXclip, m_coordYclip;

    HTMLInputElement m_dummyInput; // used to have something that could get input focus
    HTMLElement m_hoverCellInfo;
    RealModeMemoryImpl m_mem = null;
    boolean m_indebug = false;
    War m_currentWar = null;
    Turtle m_turtle = new Turtle(null);    

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

    private static final int TEXT_EPS = 6; // how much to leave in the clipping for half the text
    private static final int TICK_WIDTH = 7;

    private Competition competition = null;

	public Canvas(String id) {
		super(id);

		ctx = (CanvasRenderingContext2D)(Object)m_element.getContext("2d");

        CompetitionWindow cw = CompetitionWindow.getInstance();
        competition = cw.competition;

		//Dimension d = getMinimumSize();
		//m_element.width = d.width;
		//m_element.height = d.height;
        //ctx.save(); // save state with full page clipping

        makeClipAreas();

        //ctx.clip(m_memclip);

        m_dummyInput = (HTMLInputElement)DomGlobal.document.getElementById("warCanvasDummyInput");
        m_hoverCellInfo = (HTMLElement)DomGlobal.document.getElementById("hoverCellInfo");

		exportMethods();
		initZoom(MARGIN_TOP, MARGIN_LEFT);
		clear();
        setupInputEvents();
        
    }

    private void makeClipAreas()
    {
        m_memclip = new Path2D();
        m_memclip.moveTo(MARGIN_LEFT, MARGIN_TOP);
        m_memclip.lineTo(CANVAS_WIDTH - MARGIN_RIGHT, MARGIN_TOP);
        m_memclip.lineTo(CANVAS_WIDTH - MARGIN_RIGHT, CANVAS_HEIGHT - MARGIN_BOTTOM);
        m_memclip.lineTo(MARGIN_LEFT, CANVAS_HEIGHT - MARGIN_BOTTOM);

        // make a D like shape that deletes the tick at the exact line of the canvas but leaves place for the text to not be clipped
        m_coordYclip = new Path2D();
        Turtle t = m_turtle;
        t.p = m_coordYclip;
        t.moveTo(0, MARGIN_TOP-TEXT_EPS);
        t.right(MARGIN_LEFT-TICK_WIDTH);
        t.down(TEXT_EPS);
        t.right(TICK_WIDTH);
        t.down(CANVAS_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM);
        t.left(TICK_WIDTH);
        t.down(TEXT_EPS);
        t.left(MARGIN_LEFT-TICK_WIDTH);

        makeXAxisClip();
    }

    private void makeXAxisClip()
    {
        int barHeight = Math.min(CANVAS_HEIGHT-MARGIN_BOTTOM, (int)(BOARD_HEIGHT*DOT_SIZE*m_zrVscale) + MARGIN_TOP);
        Turtle t = m_turtle;

        m_coordXclip = new Path2D();
        t.p = m_coordXclip;
        t.moveTo(MARGIN_LEFT-TEXT_EPS, barHeight+MARGIN_BOTTOM);
        t.up(MARGIN_BOTTOM-TICK_WIDTH);
        t.right(TEXT_EPS);
        t.up(TICK_WIDTH);
        t.right(CANVAS_WIDTH - MARGIN_LEFT - MARGIN_RIGHT);
        t.down(TICK_WIDTH);
        t.right(TEXT_EPS);
        t.down(MARGIN_BOTTOM-TICK_WIDTH);
    }
    
    private void canvasSizeChanged(int w, int h)
    {
        CANVAS_HEIGHT = h;
        CANVAS_WIDTH = w;

        VIS_WIDTH_PX = CANVAS_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
        VIS_HEIGHT_PX = CANVAS_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM;

        VIS_WIDTH = VIS_WIDTH_PX/DOT_SIZE;
        VIS_HEIGHT = VIS_HEIGHT_PX/DOT_SIZE;

        makeClipAreas();
    }

	/*@Override
	public Dimension getMinimumSize() {
		return new Dimension(CANVAS_WIDTH, CANVAS_HEIGHT);
	}

	@Override
	public Dimension getPreferredSize() {
		return getMinimumSize();
	}*/

    // called from WarFrame
	public void paintPixel(int number, byte color, byte value) { 
        boolean needClip = competition.getSpeed() != Competition.MAX_SPEED;
        if (needClip) {
            saveAndEnter();
        }
        transformToCtx();
	    paintPixel(number % BOARD_WIDTH, number / BOARD_WIDTH, color, value, true);
        if (needClip)
            ctx.restore();
        else
            ctx.setTransform(1,0,0,1,0,0);
	}

	private void paintPixel(int x, int y, byte colorByte, byte value, boolean doResetAltOpcode) {
        set_values(x, y, value);

		Color color = null;
		if (colorByte != -1)
            set_data(x, y, colorByte);
        else {
            // never happens?
            colorByte = data(x, y);
        }

        boolean altColor = false;
        if (doResetAltOpcode)
            reset_flag(x, y, FLAG_ALT_OPCODE_COL);
        else
            altColor = m_alt_opcode_color && has_flag(x, y, FLAG_ALT_OPCODE_COL); // when deleting IP

        if (colorByte != -1) {
            color = ColorHolder.getInstance().getColor(colorByte, false, altColor);
            ctx.fillStyle = FillStyleUnionType.of(color.toString());
        }
        else {
            // color remains null so that fill text would keep it gray
            ctx.fillStyle = FillStyleUnionType.of("#000000");
        }

        ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);

        if (m_showContent)
            paintTextValue(x, y, color);
	}

    public void setCanvasSelectedPlayer(String label) {
        m_selectedPlayerLabel = label;
        if (m_show_reg_ptrs)
            paint();
    }

    private int[] m_painterdPointers = new int[War.MAX_WARRIORS];
    private int m_paintedPointerCount = 0;

    // called from WarFrame
    public void paintPointer(int number, byte colorByte, String label) 
    {
	    int x = number % BOARD_WIDTH;
        int y = number / BOARD_WIDTH;
        set_flag(x, y, FLAG_IP_HERE);
        m_painterdPointers[m_paintedPointerCount++] = number;


        saveAndEnter();

        boolean altColor = m_alt_opcode_color && has_flag(x, y, FLAG_ALT_OPCODE_COL);
	    Color color = ColorHolder.getInstance().getColor(colorByte, true, altColor);

        ctx.fillStyle = FillStyleUnionType.of(color.toString());
        ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
        if (m_showContent)
            paintTextValue(x, y, color);

        ctx.restore();        
    }
    
        
	public void deletePointers() {
        saveAndEnter();
        
        for(int i = 0; i < m_paintedPointerCount; ++i) {
            int number = m_painterdPointers[i];
            int x = number % BOARD_WIDTH;
            int y = number / BOARD_WIDTH;            
            reset_flag(x, y, FLAG_IP_HERE);
            paintPixel(x, y, data(x, y), values(x, y), false);            
        }

        ctx.restore();

        m_paintedPointerCount = 0;
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
        ctx.fillText(  Format.hex2(values(x, y) & 0xff),  x * DOT_SIZE + 0.2*DOT_SCALE, y * DOT_SIZE + 2.2*DOT_SCALE);
    }


	private static native void resetZoom() /*-{
		$wnd.js_resetZoom()
    }-*/;
    private static native int mathlog2(int v) /*-{
		return Math.log2(v)
	}-*/;


	public void initStartWar(War war) {
        m_mem = war.getMemory();
        m_currentWar = war;
        m_indebug = true;
        int addr = 0x10000;
        for (int y = 0; y < BOARD_HEIGHT; y++)
        {
            for (int x = 0; x < BOARD_WIDTH; x++)
            {
                set_values(x, y, m_mem.readByte(addr));
                addr += 1;
            }
        }
    }

	public void clear() {
        int len = BOARD_WIDTH * BOARD_HEIGHT;
		if (_data == null)
			_data = new byte[len];
		if (_flags == null)
            _flags = new byte[len];
		if (_values == null)
            _values = new byte[len];

        
		for (int i = 0; i < len; i++) {
            _data[i] = EMPTY;
            _flags[i] = 0;
        }

		ctx.setTransform(1,0,0,1,0,0);


        //ctx.clip(m_memclip);

		resetZoom(); // already does the repaint


        // default clipping is the memory area - for random access writes to not go overboard
        //Path2D
	}

    public void revokeWar() {
	    //m_mem = null;
        //m_currentWar = null;
        m_indebug = false;
    }

	private Color paintMemCellBack(int x, int y) {
        byte flags = get_flags(x, y);
        boolean ipHere = (flags & FLAG_IP_HERE) != 0;
        boolean altColor = m_alt_opcode_color && ((flags & FLAG_ALT_OPCODE_COL) != 0);
        int cellVal = data(x, y);
        if (cellVal == -1)
            return null;
        Color col = ColorHolder.getInstance().getColor(cellVal, ipHere, altColor);

        if (col != null) {
            ctx.fillStyle = FillStyleUnionType.of(col.toString());
            ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
        }
	    return col;
    }

    private static final class Rect {
	    float sx, sy, ex, ey;
	    public boolean isInside(float x, float y) {
	        return x > sx && x < ex && y > sy && y < ey;
        }
    }
    private Rect m_contentVisibleRect = new Rect(); // in memory coordinates

    private void setMemFont() {
        ctx.font = String.valueOf(2.3 * DOT_SCALE) + "px monospace";
    }

	@Override
	public void paint() {
		ctx.fillStyle = FillStyleUnionType.of(Color.WHITE);
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // TBD remove this

        saveAndEnter();

        ctx.fillStyle = FillStyleUnionType.of(Color.BLACK);
		ctx.fillRect(0, 0, BOARD_WIDTH_PX, BOARD_HEIGHT_PX);

        if (m_showContent) {
		    //ctx.font = Integer.toString((int)(DOT_SIZE * m_zrHscale)) + "px monospace";
            //ctx.font = "2.3px monospace";
            setMemFont();
        }


		for (int y = 0; y < BOARD_HEIGHT; y++)
		{
			for (int x = 0; x < BOARD_WIDTH; x++)
			{
                boolean textVisible = m_showContent && m_contentVisibleRect.isInside(x, y);
                Color col = paintMemCellBack(x, y);
                if (textVisible) {
                    paintTextValue(x, y, col);
                }
			}
		}
		//Console.log("textCount=" + Integer.toString(textVisCount));
		if (m_showContent && m_intervalId != null)
		    paintCursor(true);

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
        int rc = (int)m_zrVscale * DOT_SCALE;
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

        // y axis
        for(int y = 0; y <= BOARD_HEIGHT; y += step) {
            int ry = Math.min(y, BOARD_HEIGHT-1);
            float scaledDot = DOT_SIZE*m_zrVscale;
            float ycoord = MARGIN_TOP + m_zrY + ry * scaledDot;
            if (ycoord + scaledDot < MARGIN_TOP || ycoord > CANVAS_HEIGHT-MARGIN_BOTTOM)
                continue;
            ctx.fillText(Format.hex4(ry*BOARD_WIDTH), 1, ycoord + scaledDot/2);
            ctx.fillRect(38, ycoord,  6, scaledDot);
        }

        ctx.restore(); // back to full clip
        ctx.save();    // save it

        ctx.clip(m_coordXclip);

        ctx.font = "14px monospace";
        ctx.fillStyle = FillStyleUnionType.of("#888888");

        // x axis
        int barHeight = Math.min(CANVAS_HEIGHT-MARGIN_BOTTOM, (int)Math.ceil(BOARD_HEIGHT*DOT_SIZE*m_zrVscale) + MARGIN_TOP);
        for(int x = 0; x <= BOARD_WIDTH; x += step) {
            int rx = Math.min(x, BOARD_WIDTH-1);

            float scaledDot = DOT_SIZE*m_zrHscale;
            float xcoord = MARGIN_LEFT + m_zrX + rx * scaledDot;

            if (xcoord + scaledDot < MARGIN_LEFT || xcoord > CANVAS_WIDTH-MARGIN_RIGHT)
                continue;
            ctx.fillText(Format.hex2(rx), xcoord-7+scaledDot/2, barHeight + 20);
            ctx.fillRect(xcoord, barHeight+1, scaledDot, 6);
        }

        ctx.restore(); // back to full clip

        paintRegPtrLines();
        
        setMemFont();

	}

    static final int REG_PTR_LINE_RADIUS = 10;
    static final int ARROW_W = 6;
    static final int ARROW_H = 10;

    void paintRegPtrLines()
    {
        if (!m_show_reg_ptrs)
            return;
        if (competition.getCurrentWar() == null)
            return; // on startup?
        Warrior warrior = competition.getCurrentWar().getWarriorByLabel(m_selectedPlayerLabel);
        if (warrior == null)
            return; // happens in PreStartClear
        CpuState state = warrior.getCpuState();

        ctx.beginPath();

        for (RegPtrInf rp : m_reg_ptrs.values()) {
            if (rp == null)
                continue;

            short addr = state.getByIndex(rp.reg_idx);
            short seg = state.getByIndex(rp.seg_idx);
   
            int addrInsideArena = RealModeAddress.linearAddress(seg, addr) - CodeEditor.CODE_ARENA_OFFSET;
            if (addrInsideArena < 0 || addrInsideArena > BOARD_LEN)
                continue;
            double cell_x = addrInsideArena % BOARD_WIDTH + 0.5;
            double cell_y = addrInsideArena / BOARD_WIDTH + 0.5;

            double dot_width = DOT_SIZE*m_zrHscale;
            double dot_height = DOT_SIZE*m_zrVscale;

            int ptr_x = (int)(cell_x * dot_width + m_zrX + MARGIN_LEFT);
            int ptr_y = (int)(cell_y * dot_height + m_zrY + MARGIN_TOP);

            // ctx.setTransform(m_zrHscale, 0, 0, m_zrVscale, m_zrX+MARGIN_LEFT, m_zrY+MARGIN_TOP);


            int x_sign = (rp.elem_x > ptr_x) ? 1 : -1;
            int y_sign = (rp.elem_y > ptr_y) ? -1 : 1;
            boolean roundCorner = false, yLine = true;
            int ydiff = Math.abs(rp.elem_y - ptr_y);
            if (ydiff > dot_height*0.5) {
                ptr_y -= (int)((0.5*dot_height) * y_sign);
                if (ydiff > dot_height*0.5 + REG_PTR_LINE_RADIUS)
                    roundCorner = true;
            }
            else {
                ptr_x += (int)((0.5*dot_width) * x_sign);
                yLine = false;
            }

            ctx.moveTo(rp.elem_x, rp.elem_y);
            if (roundCorner) {
                ctx.lineTo(ptr_x + x_sign*REG_PTR_LINE_RADIUS, rp.elem_y);
                ctx.arcTo(ptr_x, rp.elem_y, ptr_x, rp.elem_y + y_sign*REG_PTR_LINE_RADIUS, REG_PTR_LINE_RADIUS);
            }
            else
                ctx.lineTo(ptr_x, rp.elem_y);

            // arrow head
            if (yLine) {
                ctx.lineTo(ptr_x, ptr_y);

                ctx.moveTo(ptr_x-ARROW_W, ptr_y-ARROW_H*y_sign);
                ctx.lineTo(ptr_x, ptr_y);
                ctx.lineTo(ptr_x+ARROW_W, ptr_y-ARROW_H*y_sign);
            }
            else { // line is horizontal
                ctx.moveTo(ptr_x+ARROW_H*x_sign, rp.elem_y-ARROW_W);
                ctx.lineTo(ptr_x, rp.elem_y);
                ctx.lineTo(ptr_x+ARROW_H*x_sign, rp.elem_y+ARROW_W);
            }

        }

        ctx.strokeStyle = StrokeStyleUnionType.of("#000000");
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.strokeStyle = StrokeStyleUnionType.of("#ffffff");
        ctx.lineWidth = 2;
        ctx.stroke();
    }


	/*public void addListener(MouseAddressRequest l) {
		eventCaster.add(l);
	}*/

    private void saveAndEnter() {
        ctx.save();
        ctx.clip(m_memclip);
        transformToCtx();
    }


	// ------------------------------ zoom and pan ---------------------------
	public native void exportMethods() /*-{
        var that = this
        $wnd.j_warCanvas_repaint = $entry(function() { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_repaint()() });
        $wnd.j_warCanvas_setTransform = $entry(function(a,b,c,d) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_setTransform(FFFF)(a,b,c,d) });
        $wnd.j_warCanvas_click = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_click(FF)(a,b) });
        $wnd.j_warCanvas_showCurrent = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_warCanvas_showCurrent(FF)(a,b) });
        $wnd.j_canvasResized = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_canvasResized(II)(a,b) });
        $wnd.j_change_board_width = $entry(function(a) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_change_board_width(I)(a) });
        $wnd.j_set_alt_opcode_color = $entry(function(a) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_set_alt_opcode_color(Z)(a) });
        $wnd.j_changed_reg_in_mem = $entry(function(a) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_changed_reg_in_mem(Z)(a) });
        $wnd.j_reg_ptr_elem_moved = $entry(function(a,b,c) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_reg_ptr_elem_moved(III)(a,b,c) });
        $wnd.j_reg_ptr_enabled = $entry(function(a,b) { that.@il.co.codeguru.corewars8086.gui.Canvas::j_reg_ptr_enabled(ZI)(a,b) });
    }-*/;


	public void j_warCanvas_repaint() {
		paint();
	}

	private static native void initZoom(int marginTop, int marginLeft) /*-{
	    $wnd.WC_MARGIN_TOP = marginTop
	    $wnd.WC_MARGIN_LEFT = marginLeft
		$wnd.js_initZoom()
    }-*/;
    
    private void transformToCtx() {
        ctx.setTransform(m_zrHscale, 0, 0, m_zrVscale, m_zrX+MARGIN_LEFT, m_zrY+MARGIN_TOP);
    }

    private void redoTransform() {
        m_showContent = (m_zrHscale * DOT_SCALE > 4.0);

        m_contentVisibleRect.sx = -m_zrX / DOT_SIZE / m_zrHscale - 1;
        m_contentVisibleRect.sy = -m_zrY / DOT_SIZE / m_zrVscale - 1;

        m_contentVisibleRect.ex = m_contentVisibleRect.sx + (VIS_WIDTH / m_zrHscale) + 1;
        m_contentVisibleRect.ey = m_contentVisibleRect.sy + (VIS_HEIGHT / m_zrVscale) + 1;
    }
    public void j_warCanvas_setTransform(float hscale, float vscale, float x, float y) {
        //Console.log("scale= " + Float.toString(hscale) + "  y=" + Float.toString(y ));
        m_zrHscale = hscale;
        m_zrVscale = vscale;
        m_zrX = x;
        m_zrY = y;
        redoTransform();
        makeXAxisClip();
    }

    public void j_canvasResized(int w, int h) {
        canvasSizeChanged(w, h);
        paint();
    }

    public void j_change_board_width(int bw) {
        BOARD_WIDTH = bw;
        BOARD_HEIGHT = 65536 / BOARD_WIDTH; 
        BOARD_WIDTH_BITS = mathlog2(BOARD_WIDTH);
    
        DOT_SCALE = 256/BOARD_WIDTH;
        DOT_SIZE = 3 * DOT_SCALE;

        BOARD_WIDTH_PX = BOARD_WIDTH * DOT_SIZE;
        BOARD_HEIGHT_PX = BOARD_HEIGHT * DOT_SIZE;
        redoTransform();
        canvasSizeChanged(CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.setTransform(1,0,0,1,0,0);
		resetZoom(); // already does the paint
    }

    public void j_set_alt_opcode_color(boolean v) {
        m_alt_opcode_color = v;
        paint();
    }

    public void j_changed_reg_in_mem(boolean v) {
        m_show_reg_ptrs = v;
        paint();
    }

    public void j_reg_ptr_elem_moved(int index, int x, int y) {
        RegPtrInf rp = m_reg_ptrs.get(index);
        rp.elem_x = x;
        rp.elem_y = y;
        paint();
    }

    public void j_reg_ptr_enabled(boolean v, int both_idx) {
        int addr_idx = both_idx & 0xff;
        int seg_idx = both_idx >> 8;
        if (v) {
            ++m_reg_refcounts[addr_idx];
            ++m_reg_refcounts[seg_idx];
            m_reg_ptrs.put(both_idx, new RegPtrInf(addr_idx, seg_idx));
            // paint is called when it's moved to position
        }
        else {
            --m_reg_refcounts[addr_idx];
            --m_reg_refcounts[seg_idx];
            m_reg_ptrs.remove(both_idx);
            paint();
        }
    }

    public void registerManullyChanged(int rindex)
    {
        if (!m_show_reg_ptrs)
            return;
        // is this register shown?
        if (m_reg_refcounts[rindex] > 0) 
            paint();
    }

    public void setAltColor(int addr, int len, boolean isSet) {
        if (!isSet)
            return;
        for(int i = 0; i < len; ++i) {
            int byteaddr = addr + i;
            set_flag(byteaddr % BOARD_WIDTH, byteaddr / BOARD_WIDTH, FLAG_ALT_OPCODE_COL);
        }
    }

    private double m_cursorX, m_cursorY;  // in memory coordinates, x can have half cells for the first digit of a byte
    private Double m_intervalId; // id of the blinking interval. if this is null it means there is no cursor
    private boolean m_blinkOn = false;



    private void paintCursor(boolean isOn) {
        saveAndEnter(); // needed here since it's coming from blink event

        //Console.log("BLINK");
        int x = (int)m_cursorX, y = (int)m_cursorY;
        if (isOn) {
            Color col = paintMemCellBack(x, y);

            double rx = m_cursorX;
            if (rx % 1 == 0)
                rx += 0.08; // account for the space between numbers not being the same as the space between digits
            paintMemCellBack((int)m_cursorX, (int)m_cursorY);
            ctx.fillStyle =  FillStyleUnionType.of("#eeeeee");
            ctx.fillRect(rx * DOT_SIZE, m_cursorY * DOT_SIZE + DOT_SCALE*0.32, DOT_SCALE*1.25, DOT_SCALE*2.2);

            paintTextValue(x, y, col);

        }
        else {
            Color col = paintMemCellBack(x, y);
            if (col == null) {
                ctx.fillStyle = FillStyleUnionType.of("#000000");
                ctx.fillRect(x * DOT_SIZE, y * DOT_SIZE, DOT_SIZE, DOT_SIZE);
            }
            paintTextValue(x, y, col);
        }

        ctx.restore();
    }

    // coordinates in the mem area
    public void j_warCanvas_click(float x, float y) {
        if (!m_showContent || x < 0 || y < 0 || x >= VIS_WIDTH_PX || y >= VIS_HEIGHT_PX)
            return;
        if (!m_indebug) // not debuggin
            return;
        float mx = (int)(( (x - m_zrX)/ DOT_SIZE/m_zrHscale )*2)/2.0f ; // need half percision to know on which digit we clicked
        float my = (int)( (y - m_zrY)/ DOT_SIZE/m_zrVscale ) ;
        //Console.log("click " + Float.toString(x) + "," + Float.toString(y) + "  : " + Float.toString(mx) + "," + Float.toString(my) );

        paintCursor(false);
        m_cursorX = mx;
        m_cursorY = my;
        m_dummyInput.focus();

        paintCursor(true);
        m_blinkOn = false;

        if (m_intervalId != null)
            DomGlobal.clearInterval(m_intervalId);
        m_intervalId = DomGlobal.setInterval((event) -> {
            if (!m_showContent)
                return; // we zoomed out when cursor is active
            paintCursor(m_blinkOn);
            m_blinkOn = !m_blinkOn;
        }, 600);
    }

    // show the value currently hovering over
    public void j_warCanvas_showCurrent(float x, float y) {
        if (m_mem == null || x < 0 || y < 0 || x >= VIS_WIDTH_PX || y >= VIS_HEIGHT_PX) {
            m_hoverCellInfo.style.display = "none";
            return;
        }
        int mx = (int)( (x - m_zrX)/ DOT_SIZE/m_zrHscale );
        int my = (int)( (y - m_zrY)/ DOT_SIZE/m_zrVscale );

        if (mx < 0 || mx >= BOARD_WIDTH || my < 0 || my >= BOARD_HEIGHT)  {
            // in the canvas but outside the memory area
            m_hoverCellInfo.style.display = "none";
            return;
        }

        int addr = (int)(mx+my*BOARD_WIDTH) & 0xffff;
        int v = m_mem.readByte(addr + 0x10000) & 0xff;

        StringBuilder sb = new StringBuilder();
        sb.append("0x");
        sb.append(Format.hex4(addr));
        sb.append(": 0x");
        sb.append(Format.hex2(v));
        sb.append(" (");
        int bef = sb.length();
        sb.append(v);  // signed/unsigned?
        sb.append(")");
        for(int i = sb.length() - bef; i < 5; ++i)
            sb.append('\u00A0');
        byte player = data(mx, my);
        if (player != -1) {
            sb.append("  Player: ");
            sb.append(m_currentWar.getWarrior(player).getName().substring(0,20));
        }

        m_hoverCellInfo.style.display = "";
        Format.setInnerText(m_hoverCellInfo, sb.toString());
    }

    private static native void js_updateFromKeyScroll(double nx, double ny)/*-{
        $wnd.js_updateFromKeyScroll(nx, ny)
    }-*/;

    private void moveCursor(double dx, int dy) {
        paintCursor(false);
        //m_cursorX = Math.max(Math.min(m_cursorX + dx, BOARD_WIDTH - 0.5), 0.);
        //m_cursorY = Math.max(Math.min(m_cursorY + dy, BOARD_HEIGHT), 0.);

        m_cursorY += dy;
        m_cursorX += dx;
        if (m_cursorX > BOARD_WIDTH - 0.5) {
            m_cursorX -= BOARD_WIDTH;
            m_cursorY += 1;
        }
        m_cursorX = Math.max(Math.min(m_cursorX, BOARD_WIDTH - 0.5), 0.);
        m_cursorY = Math.max(Math.min(m_cursorY, BOARD_HEIGHT - 1), 0.);

        // need while since it might be completely off screen and need several steps to get to
        while (m_cursorY < m_contentVisibleRect.sy + 1 && m_cursorY >= 0) {
            m_zrY = m_zrY+(5.1f*m_zrHscale*DOT_SIZE);
            js_updateFromKeyScroll(m_zrX, m_zrY);
        }
        while (m_cursorY > m_contentVisibleRect.ey - 0.99 && m_cursorY <= BOARD_HEIGHT) {
            m_zrY = m_zrY-(5.1f*m_zrHscale*DOT_SIZE);
            js_updateFromKeyScroll(m_zrX, m_zrY);
        }
        while (m_cursorX < m_contentVisibleRect.sx + 1 && m_cursorX >= 0) {
            m_zrX = m_zrX+(5.1f*m_zrVscale*DOT_SIZE);
            js_updateFromKeyScroll(m_zrX, m_zrY);
        }
        while (m_cursorX > m_contentVisibleRect.ex - 0.49 && m_cursorX <= BOARD_WIDTH - 0.51) {
            m_zrX = m_zrX-(5.1f*m_zrVscale*DOT_SIZE);
            js_updateFromKeyScroll(m_zrX, m_zrY);
        }

        // this will do bounds checking, update the js variable and call back to java to update the java state
        j_warCanvas_repaint();

    }

    private void setupInputEvents()
    {

        m_dummyInput.addEventListener("blur", (event)-> {
            Console.log("BLUR");
            if (m_intervalId != null)
                DomGlobal.clearInterval(m_intervalId);
            if (m_showContent)
                paintCursor(false);
            m_intervalId = null;
        });

        m_dummyInput.addEventListener("keydown", (event) -> {
            if (!m_showContent)
                return;
            String key = ((KeyboardEvent)event).key;
            //Console.log(key);
            event.preventDefault();
            if (key == "ArrowUp")
                moveCursor(0,-1);
            else if (key == "ArrowDown")
                moveCursor(0,1);
            else if (key == "ArrowRight")
                moveCursor(0.5, 0); // halfs because move half a byte
            else if (key == "ArrowLeft" || key == "Backspace")
                moveCursor(-0.5, 0);
            else if (m_mem != null && m_indebug) { // not debugging
                char c = key.charAt(0);
                int v = -1;
                if (c >= '0' && c <= '9')
                    v = c - '0';
                else if (c >= 'a' && c <= 'f')
                    v = c - 'a' + 10;
                else if (c >= 'A' && c <= 'A')
                    v = c - 'A' + 10;
                if (v != -1) {
                    int ix = (int)m_cursorX, iy = (int)m_cursorY;
                    int ev = values(ix, iy);
                    if (m_cursorX % 1 == 0)
                        ev = ev & 0xf | (v << 4);
                    else
                        ev = ev & 0xf0 | v;
                    set_values(ix, iy, (byte)ev);
                    m_mem.writeByte(new RealModeAddress((short)0x1000, (short)(ix+iy*BOARD_WIDTH)), (byte)ev);
                    moveCursor(0.5, 0);

                }

            }
        });

    }


}
