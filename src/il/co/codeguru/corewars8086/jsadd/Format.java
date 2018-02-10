package  il.co.codeguru.corewars8086.jsadd;

public class Format {
    public static String hex(int num, int pad) {
        String s = Integer.toHexString(num);
        for(int i = s.length(); i < pad; ++i)
            s = "0" + s;
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