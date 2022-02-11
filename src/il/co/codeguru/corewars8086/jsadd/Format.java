package  il.co.codeguru.corewars8086.jsadd;

import elemental2.dom.HTMLElement;

public class Format {
    public static String hex(int num) {
        return Integer.toHexString(num).toUpperCase();
    }

    public static String hex(int num, int pad) {
        String s = Integer.toHexString(num).toUpperCase();
        for(int i = s.length(); i < pad; ++i)
            s = "0" + s;
        return s;
    }
    public static String hex2_old(int num) {
        String s = Integer.toHexString(num).toUpperCase();
        if(s.length() == 1)
            return "0" + s;
        return s;
    }

    private static final String[] hex_chars = {"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"};
    public static String hex2(int num) {
        return hex_chars[(num & 0xf0)>>4] + hex_chars[num & 0xf];
    }    
    public static String hex4(int num) {
        String s = Integer.toHexString(num).toUpperCase();;
        switch(s.length()) {
            case 1: return "000" + s;
            case 2: return "00" + s;
            case 3: return "0" + s;
            case 4: return s;
        }
        return s;
    }
    public static String hex5(int num) {
        String s = Integer.toHexString(num).toUpperCase();;
        switch(s.length()) {
            case 1: return "0000" + s;
            case 2: return "000" + s;
            case 3: return "00" + s;
            case 4: return "0" + s;
            case 5: return s;
        }
        return s;
    }

    public static String padding(int repeat, char padChar)  {
        char[] buf = new char[repeat];

        for(int i = 0; i < buf.length; ++i) {
            buf[i] = padChar;
        }

        return new String(buf);
    }


    // this is here just because it's a useful utility class
    public static native String innerText(HTMLElement elem) /*-{
        return elem.innerText
    }-*/;

    public static native void setInnerText(HTMLElement elem, String text)/*-{
        elem.innerText = text
    }-*/;

    public static native void setInnerFloat(HTMLElement elem, float v)/*-{
        if (Number.isInteger(v))
            elem.innerText = v + " "
        else
            elem.innerText = v.toFixed(2) + " "
    }-*/;    

}