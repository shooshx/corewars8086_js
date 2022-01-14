package il.co.codeguru.corewars8086.gui;

//import java.awt.Color;
//import java.awt.Dimension;
//import java.awt.Graphics;
//
//import javax.swing.JComponent;
import elemental2.dom.CanvasRenderingContext2D;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.DomGlobal;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.war.WarriorGroup;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author BS
 */
public class ColumnGraph extends JComponent<HTMLCanvasElement> {

    static class PlayerColumn {
        public String name;
        public String nameStart;
        public float[] values;
        public CanvasRenderingContext2D.FillStyleUnionType col1, col2;
        public String color1, color2;
        public HTMLElement[] valueElems;

        PlayerColumn(String nm, String c1, String c2) {
            name = nm;
            nameStart = name.substring(0, 3);
            col1 = CanvasRenderingContext2D.FillStyleUnionType.of(c1); // colors
            color1 = c1;
            col2 = CanvasRenderingContext2D.FillStyleUnionType.of(c2);
            color2 = c2;
            // the first element holds the sum of all the other values
            values = new float[3];
            valueElems = new HTMLElement[3];
        }
    }

    private PlayerColumn[] columns;
    private PlayerColumn[] col_order;
    private float maxValue;
    private double reduceFactorY, reduceFactorX;
    private String lastStyle;

    private static final int NAME_HEIGHT = 17;
    private static final int BOTTOM_MARGIN = 30;

    private static final CanvasRenderingContext2D.FillStyleUnionType BLACK = CanvasRenderingContext2D.FillStyleUnionType.of("black");
    private static final CanvasRenderingContext2D.FillStyleUnionType BACKGROUND = CanvasRenderingContext2D.FillStyleUnionType.of("#fdfdfd");

    private CanvasRenderingContext2D ctx;

    private HTMLElement table;

    public ColumnGraph() {
        super("graphs_canvas");
        table = (HTMLElement) DomGlobal.document.getElementById("results_table");
        clear(null);

        ctx = (CanvasRenderingContext2D) (Object) m_element.getContext("2d");
    }

    public native void js_clear_code_buttons_colors()
    /*-{
        $wnd.clear_code_buttons_colors()
    }-*/;

    static HTMLElement addElem(HTMLElement parent, String type, String cls) {
        HTMLElement e = (HTMLElement) DomGlobal.document.createElement(type);
        e.classList.add(cls);
        parent.appendChild(e);
        return e;
    }

    void remakeTable() {
        table.innerHTML = ""; // clear previous
        HTMLElement tline = addElem(table, "div", "res_table_line");
        tline.classList.add("res_table_title_line");
        HTMLElement v = addElem(tline, "span", "res_table_name");
        Format.setInnerText(v, "Name ");
        v.classList.add("res_table_title");
        v = addElem(tline, "span", "res_table_value");
        Format.setInnerText(v, "Total ");
        v.classList.add("res_table_title");
        v = addElem(tline, "span", "res_table_value");
        Format.setInnerText(v, "1 ");
        v.classList.add("res_table_title");
        v = addElem(tline, "span", "res_table_value");
        Format.setInnerText(v, "2 ");
        v.classList.add("res_table_title");

        for (int i = 0; i < columns.length; ++i) {
            HTMLElement line = addElem(table, "div", "res_table_line");
            HTMLElement name = addElem(line, "span", "res_table_name");
            name.style.color = columns[i].color2;
            Format.setInnerText(name, columns[i].name + " ");
            for (int j = 0; j < 3; ++j) {
                HTMLElement e = addElem(line, "span", "res_table_value");
                Format.setInnerText(e, "0 ");
                columns[i].valueElems[j] = e;
            }
        }
    }

    public String getTableText() {
        StringBuilder sb = new StringBuilder();
        sb.append("Name, Total, 1, 2,\n");
        for (int i = 0; i < columns.length; ++i) {
            sb.append(columns[i].name);
            sb.append(", ");
            for (int j = 0; j < 3; ++j) {
                sb.append(Float.toString(columns[i].values[j]));
                sb.append(", ");
            }
            sb.append("\n");
        }
        return sb.toString();
    }

    void clear(ArrayList<WarriorGroup> groups) {
        maxValue = 0;
        reduceFactorX = 10;
        reduceFactorY = 5;
        if (groups == null)
            return;
        js_clear_code_buttons_colors();
        ColorHolder colorHolder = ColorHolder.getInstance();
        columns = new PlayerColumn[groups.size()];
        col_order = new PlayerColumn[groups.size()];
        for (int i = 0; i < groups.size(); ++i) {
            Color c1 = colorHolder.getColor(i, false, false);
            Color c2 = colorHolder.getColor(i, true, false);
            columns[i] = new PlayerColumn(groups.get(i).getTitle(), c1.toString(), c2.toString());

            PlayersPanel pp = CompetitionWindow.getInstance().m_playersPanel;
            pp.setButtonColor(c1.toString(), groups.get(i).getLabel() + "0");
            pp.setButtonColor(c2.toString(), groups.get(i).getLabel() + "1");
            col_order[i] = columns[i];
        }
        remakeTable();
    }

    @Override
    public Dimension getMinimumSize() {
        return new Dimension(500, 500);
    }

    @Override
    public Dimension getPreferredSize() {
        return getMinimumSize();
    }

    public void updateTable(int pos) {
        for (int i = 0; i < 3; ++i) {
            Format.setInnerText(columns[pos].valueElems[i], Float.toString(columns[pos].values[i]) + " ");
        }
    }

    public void addToValue(int pos, int subIndex, float value) {
        columns[pos].values[0] += value;
        columns[pos].values[subIndex + 1] += value;

        if (columns[pos].values[0] > maxValue) {
            // reset graph factor by half to make more room
            maxValue = columns[pos].values[0];
            if (maxValue * reduceFactorY > m_element.height - 15 - BOTTOM_MARGIN) {
                reduceFactorY *= 0.5;
            }
            if (maxValue * reduceFactorX > m_element.width - 40) {
                reduceFactorX *= 0.5;
            }
        }
        repaint();

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < columns.length; ++i) {
            sb.append(columns[i].values[0]);
            sb.append("  ");
        }
        Console.log("Score add " + Integer.toString(pos) + " " + Integer.toString(subIndex) + " "
                + Float.toString(value) + "  totals= " + sb.toString());
                paintGraphs(lastStyle);
        updateTable(pos);
    }

    private static final int HBAR_HEIGHT = 40;

    protected void paintGraphs(String style) {
        lastStyle = style;
        if (columns == null)  // js side just wants to set the style on startup
            return;
        int width = m_element.width, height = m_element.height;
        ctx.fillStyle = BACKGROUND;
        ctx.fillRect(0, 0, width, height);
        ctx.font = "18px monospace,sans-serif";

        boolean hbar_top = style == "vbar_top";
        boolean hbar_bot = style == "vbar_bot";

        if (hbar_top || hbar_bot)
        {
            int bottom_margin = hbar_bot ? BOTTOM_MARGIN : 0;
            final int numPlayers = columns.length;
            int columnWidth = width / numPlayers;
            ctx.textBaseline = "alphabetic";

            for (int i = 0; i < numPlayers; i++) {
                paintColumn(i, columnWidth, height - bottom_margin, hbar_bot);
                if (hbar_bot)
                {
                    ctx.fillStyle = columns[i].col2;
                    ctx.fillText(columns[i].name, i * columnWidth + 5, height - bottom_margin + NAME_HEIGHT - 2);
                }
            }
        }
        else if (style == "hbar")
        {
            Arrays.sort(col_order, (a, b) -> {
                return -Float.compare(a.values[0], b.values[0]);
            });
            final int numPlayers = col_order.length;
            ctx.textBaseline = "top";

            for (int i = 0; i < numPlayers; i++) 
            {
                PlayerColumn col = col_order[i];
                ctx.fillStyle = col.col1;
                double width1 = reduceFactorX * col.values[1];
                double width2 = reduceFactorX * col.values[2];
                int y =  i*(HBAR_HEIGHT + 5);
                ctx.fillRect(0, y, width1, HBAR_HEIGHT);
                ctx.fillStyle = col.col2;
                ctx.fillRect(width1, y, width2, HBAR_HEIGHT);
                
                ctx.textAlign = "start";
                ctx.fillText(col.nameStart, width1 + width2 + 5, y + 10);

                ctx.fillStyle = BLACK;
                ctx.textAlign = "right";
                ctx.fillText(col.name,  width1 + width2 - 5, y + 10);
            }
        }
    }

    private void paintColumn(int colIdx, int width, int startHeight, boolean hbar_bot) {
        PlayerColumn col = columns[colIdx];
        ctx.fillStyle = col.col1;
        int height1 = (int) (reduceFactorY * col.values[1]);
        int height2 = (int) (reduceFactorY * col.values[2]);

        int px_col = colIdx * width;
        int col_top = startHeight - height1 - height2;

        ctx.fillRect(px_col, startHeight - height1, width - 5, height1);
        ctx.fillStyle = col.col2;
        ctx.fillRect(px_col, col_top, width - 5, height2);

        if (hbar_bot)
        {
            ctx.fillText("" + col.values[0], colIdx * width + 5, startHeight - height1 - height2 - 5);
	    }
        else
        {
            ctx.fillStyle = BLACK;

            // print the nameStart at the top
            ctx.fillText(col.nameStart, px_col + 5, col_top - 5);

            // print the nameRest over the column
            ctx.save();
            ctx.translate(px_col + 15, col_top + 5);
            ctx.rotate(-Math.PI/2);
            ctx.textAlign = "right";
            ctx.fillText(col.name, 0, 0);
            ctx.restore();        
        }

    }
}
