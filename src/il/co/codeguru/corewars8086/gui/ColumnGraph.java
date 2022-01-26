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
import java.lang.System;

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
        public int rank = -1;

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
    private static final CanvasRenderingContext2D.StrokeStyleUnionType BLACK_STROKE = CanvasRenderingContext2D.StrokeStyleUnionType.of("#000000");

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

    
	private static native boolean gopt_vertial() /*-{
		return $wnd.g_graph_opt.vertical
    }-*/;
    private static native String gopt_sort() /*-{
		return $wnd.g_graph_opt.sort
    }-*/;
    private static native int gopt_max_bars() /*-{
		return $wnd.g_graph_opt.max_bars
    }-*/;    
    private static native boolean gopt_bar_names() /*-{
		return $wnd.g_graph_opt.bar_names
    }-*/;   
    private static native int gopt_bar_name_size() /*-{
		return $wnd.g_graph_opt.bar_name_size
    }-*/;  
    private static native boolean gopt_rank_label() /*-{
		return $wnd.g_graph_opt.rank_label
    }-*/; 

    public static void reverse(PlayerColumn[] data, int endIdx) {
        for (int left = 0, right = endIdx - 1; left < right; left++, right--) {
            // swap the values at the left and right indices
            PlayerColumn temp = data[left];
            data[left]  = data[right];
            data[right] = temp;
        }
    }

    private PlayerColumn[] getSortedCols()
    {
        String sortType = gopt_sort();
        int maxBars = gopt_max_bars();

        if (sortType == "Start" || sortType == "Middle") 
        {
            PlayerColumn[] use_arr;
            Arrays.sort(col_order, (a, b) -> {
                return -Float.compare(a.values[0], b.values[0]);
            });
            if (maxBars > 0 && maxBars < col_order.length)
            {
                PlayerColumn[] trunc_col_order = new PlayerColumn[maxBars];
                // copy first ones
                System.arraycopy(col_order, 0, trunc_col_order, 0, maxBars);
                use_arr = trunc_col_order;
            }
            else
                use_arr = col_order;

            if (sortType == "Middle")
            {
                PlayerColumn[] mid_order = new PlayerColumn[use_arr.length];
                int addIdx = 0;
                for(int i = 1; i < use_arr.length; i += 2, ++addIdx)
                    mid_order[addIdx] = use_arr[i];
                reverse(mid_order, addIdx);
                for(int i = 0; i < use_arr.length; i += 2, ++addIdx)
                    mid_order[addIdx] = use_arr[i];
                return mid_order;
            }
            return use_arr;
        }
        else if (sortType == "End") {
            Arrays.sort(col_order, (a, b) -> {
                return Float.compare(a.values[0], b.values[0]);
            });
            if (maxBars > 0 && maxBars < col_order.length)
            {
                PlayerColumn[] trunc_col_order = new PlayerColumn[maxBars];
                // copy first ones
                System.arraycopy(col_order, 0 + col_order.length - maxBars, trunc_col_order, 0, maxBars);
                return trunc_col_order;
            }            
            else
                return col_order;
        }
        else
            return columns;
    }

    private void fillRank()
    {
        float height1 = -1, height2 = -1, height3 = -1;
        PlayerColumn col1 = null, col2 = null, col3 = null;
        for (int i = 0; i < columns.length; i++) 
        {
            PlayerColumn col = columns[i];
            col.rank = -1;
            float v = col.values[0];
            if (v > height1) {
                col3 = col2;
                col2 = col1;
                col1 = col;
                height1 = v;
            }
            else if (v > height2) {
                col3 = col2;
                col2 = col;
                height2 = v;
            }
            else if (v > height3) {
                col3 = col;
                height3 = v;
            }
        }

        if (col1 != null)
            col1.rank = 1;
        if (col2 != null)
            col2.rank = 2;
        if (col3 != null)
            col3.rank = 3;
    }

    private void paintRank(int r, int x, int y)
    {
        ctx.save();
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "36px monospace,sans-serif";
        ctx.fillText(Integer.toString(r), x, y+2);

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2*Math.PI);
        ctx.stroke();

        ctx.restore();
    }


    protected void paintGraphs(String style) 
    {
        lastStyle = style;
        if (columns == null)  // js side just wants to set the style on startup
            return;
        int width = m_element.width, height = m_element.height;

        ctx.fillStyle = BACKGROUND;
        ctx.fillRect(0, 0, width, height);
        ctx.font = "18px monospace,sans-serif";
        ctx.strokeStyle = BLACK_STROKE;
        ctx.lineWidth = 2;

        PlayerColumn[] use_arr = getSortedCols();

        String name_font = Integer.toString(gopt_bar_name_size()) + "px monospace,sans-serif";
        boolean show_rank = gopt_rank_label();

        if (show_rank)
            fillRank();

        if (gopt_vertial())
        {
            boolean bot_names = !gopt_bar_names();
            int bottom_margin = bot_names ? BOTTOM_MARGIN : 0;
            final int numPlayers = use_arr.length;
            int columnWidth = width / numPlayers;
            ctx.textBaseline = "alphabetic";

            for (int i = 0; i < numPlayers; i++) {
                PlayerColumn col = use_arr[i];
                int startHeight = height - bottom_margin;
                
                ctx.fillStyle = col.col1;
                int height1 = (int) (reduceFactorY * col.values[1]);
                int height2 = (int) (reduceFactorY * col.values[2]);
        
                int px_col = i * columnWidth;
                int px_col_mid = px_col + (columnWidth-5)/2;
                int col_top = startHeight - height1 - height2;
        
                ctx.fillRect(px_col, startHeight - height1, columnWidth - 5, height1);
                ctx.fillStyle = col.col2;
                ctx.fillRect(px_col, col_top, columnWidth - 5, height2);
        
                if (bot_names)
                {
                    ctx.fillText("" + col.values[0], i * columnWidth + 5, startHeight - height1 - height2 - 5);

                    ctx.fillStyle = use_arr[i].col2;
                    ctx.fillText(use_arr[i].name, i * columnWidth + 5, height - bottom_margin + NAME_HEIGHT - 2);
                }
                else
                {
                    ctx.fillStyle = BLACK;
        
                    // print the nameStart at the top
                    ctx.textAlign = "start";
                    ctx.fillText(col.nameStart, px_col + 5, col_top - 5);
        
                    // print the nameRest over the column
                    ctx.save();
                    ctx.translate(px_col_mid, col_top + 5);
                    ctx.rotate(-Math.PI/2);
                    ctx.textAlign = "right";
                    ctx.textBaseline = "middle";
                    ctx.font = name_font;
                    ctx.fillText(col.name, 0, 0);
                    ctx.restore();
                }
                if (show_rank && col.rank != -1)
                    paintRank(col.rank, px_col_mid, col_top - 45);
            }
        }
        else 
        {

            final int numPlayers = use_arr.length;
            ctx.textBaseline = "middle";
            int columnHeight = height / numPlayers;
            int col_half = (columnHeight-5)/2;

            for (int i = 0; i < numPlayers; i++) 
            {
                PlayerColumn col = use_arr[i];
                ctx.fillStyle = col.col1;
                double width1 = reduceFactorX * col.values[1];
                double width2 = reduceFactorX * col.values[2];
                int y =  i*(columnHeight);
                ctx.fillRect(0, y, width1, columnHeight-5);
                ctx.fillStyle = col.col2;
                ctx.fillRect(width1, y, width2, columnHeight-5);
                
                ctx.fillStyle = BLACK;
                ctx.textAlign = "start";
                ctx.fillText(col.nameStart, width1 + width2 + 5, y + col_half);

                ctx.save();
                ctx.textAlign = "right";
                ctx.font = name_font;
                ctx.fillText(col.name,  width1 + width2 - 5, y + col_half);
                ctx.restore();

                if (show_rank && col.rank != -1)
                    paintRank(col.rank, (int)(width1 + width2 + 65), y + col_half);
            }
        }
    }


}
