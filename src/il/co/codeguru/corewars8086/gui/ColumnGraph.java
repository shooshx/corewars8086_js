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
import java.util.List;

/**
 * @author BS
 */
public class ColumnGraph extends JComponent<HTMLCanvasElement> {

    static class PlayerColumn {
        public String name;
        public float[] values;
        public String col1, col2;
        public HTMLElement[] valueElems;

        PlayerColumn(String nm, String c1, String c2) {
            name = nm;
            col1 = c1; // colors
            col2 = c2;
            // the first element holds the sum of all the other values
            values = new float[3];
            valueElems = new HTMLElement[3];
        }
    }

    private PlayerColumn[] columns;
    private float maxValue;
    private double reduceFactor;

    private static final int NAME_HEIGHT = 17;
    private static final int BOTTOM_MARGIN = 30;

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
            name.style.color = columns[i].col2;
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
        reduceFactor = 5;
        if (groups == null)
            return;
        js_clear_code_buttons_colors();
        ColorHolder colorHolder = ColorHolder.getInstance();
        columns = new PlayerColumn[groups.size()];
        for (int i = 0; i < groups.size(); ++i) {
            Color c1 = colorHolder.getColor(i, false);
            Color c2 = colorHolder.getColor(i, true);
            columns[i] = new PlayerColumn(groups.get(i).getName(), c1.toString(), c2.toString());

            PlayersPanel pp = CompetitionWindow.getInstance().m_playersPanel;
            pp.setButtonColor(c1.toString(), groups.get(i).getLabel() + "0");
            pp.setButtonColor(c2.toString(), groups.get(i).getLabel() + "1");
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
            if (maxValue * reduceFactor > m_element.height - 15 - BOTTOM_MARGIN) {
                reduceFactor *= 0.5;
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
        paintComponent();
        updateTable(pos);
    }

    /*
     * (non-Javadoc)
     * 
     * @see javax.swing.JComponent#paintComponent(java.awt.Graphics)
     */
    protected void paintComponent() {
        int width = m_element.width, height = m_element.height;
        ctx.fillStyle = CanvasRenderingContext2D.FillStyleUnionType.of("#fdfdfd");
        ctx.fillRect(0, 0, width, height);
        ctx.font = "16px monospace";

        final int numPlayers = columns.length;
        int columnWidth = width / numPlayers;
        for (int i = 0; i < numPlayers; i++) {
            paintColumn(i, columnWidth, height - BOTTOM_MARGIN);
            ctx.fillStyle = CanvasRenderingContext2D.FillStyleUnionType.of(columns[i].col2);
            ctx.fillText(columns[i].name, i * columnWidth + 5, height - BOTTOM_MARGIN + NAME_HEIGHT - 2);
        }
    }

    private void paintColumn(int col, int width, int startHeight) {
        ctx.fillStyle = CanvasRenderingContext2D.FillStyleUnionType.of(columns[col].col1);
        int height1 = (int) (reduceFactor * columns[col].values[1]);

        ctx.fillRect(col * width, startHeight - height1, width - 5, height1);
        ctx.fillStyle = CanvasRenderingContext2D.FillStyleUnionType.of(columns[col].col2);
        int height2 = (int) (reduceFactor * columns[col].values[2]);
        ctx.fillRect(col * width, startHeight - height1 - height2, width - 5, height2);
        ctx.fillText("" + columns[col].values[0], col * width + 5, startHeight - height1 - height2 - 5);

    }
}
