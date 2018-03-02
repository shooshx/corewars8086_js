package  il.co.codeguru.corewars8086.jsadd;

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
    public static String hex2(int num) {
        String s = Integer.toHexString(num).toUpperCase();
        if(s.length() == 1)
            return "0" + s;
        return s;
    }
    public static String hex4(int num) {
        String s = Integer.toHexString(num);
        switch(s.length()) {
            case 1: return "000" + s;
            case 2: return "00" + s;
            case 3: return "0" + s;
            case 4: return s;
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

}