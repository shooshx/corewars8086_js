package il.co.codeguru.corewars8086.gui.widgets;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;

class ConsolePrintStream extends PrintStream {
	
    StringBuilder buf = new StringBuilder();
    
    public ConsolePrintStream()  {
        super((OutputStream) null);
    }
    
    public void print(String s) {
        
        while(true) {
            int cut = s.indexOf('\n');
            if(cut == -1) {
                break;
            }
            println(s.substring(0, cut));
            s = s.substring(cut + 1);
        }
        
        buf.append(s);
    }
    
     public native void consoleLog(String msg) /*-{
         if (window.console) {
             window.console.log(msg);
         } else {
             document.title = "LOG:" + msg;
         }
      }-*/;

    public void print(char c) {
        if (c == '\n') {
            println("");
        } else {
            buf.append(c);
        }
    }
     
    public void println() {
        println("");
    }
    
    @Override
    public void println(String s) {
        buf.append(s);
        consoleLog(buf.toString());
        buf.setLength(0);
    }

}

public class Console  {
    public static native void log(String text)
    /*-{
        console.log(text);
    }-*/;

    public static native void debug(String text)
    /*-{
        console.log(text);
    }-*/;

    public static native void error(String text)
    /*-{
        //console.error(text);
    }-*/;

    public static native void err_box(String text) /*-{
        $wnd.show_error(text)
    }-*/;

    public static PrintStream stream() {
        return new ConsolePrintStream();
    }
    
}