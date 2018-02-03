package  il.co.codeguru.corewars8086.jsadd;

public class Format {
    public static String hex(int num, int pad) {
        String s = Integer.toHexString(num);
        for(int i = s.length(); i < pad; ++i)
            s = "0" + s;
        return s;
    }


}