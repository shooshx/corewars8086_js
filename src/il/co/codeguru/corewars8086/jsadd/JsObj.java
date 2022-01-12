package  il.co.codeguru.corewars8086.jsadd;

import com.google.gwt.core.client.JavaScriptObject;


public class JsObj
{
    public static native JavaScriptObject makeArray() /*-{
        return []
    }-*/;

    public static native void arrAdd(JavaScriptObject arr, JavaScriptObject v) /*-{
        arr.push(v)
    }-*/;
    public static native int arrLen(JavaScriptObject arr) /*-{
        return arr.length
    }-*/;
    public static native String arrGetStr(JavaScriptObject arr, int idx) /*-{
        return arr[idx]
    }-*/;
    public static native JavaScriptObject arrGetObj(JavaScriptObject arr, int idx) /*-{
        return arr[idx]
    }-*/;
    public static native int arrGetInt(JavaScriptObject arr, int idx) /*-{
        return arr[idx]
    }-*/;
    public static native boolean arrGetBool(JavaScriptObject arr, int idx) /*-{
        return arr[idx]
    }-*/;

    public static native JavaScriptObject makeDict() /*-{
        return {}
    }-*/;
    public static native void dictPut(JavaScriptObject d, String k, String v) /*-{
        d[k] = v
    }-*/;
    public static native void dictPut(JavaScriptObject d, String k, boolean v) /*-{
        d[k] = v
    }-*/;
    public static native void dictPut(JavaScriptObject d, String k, int v) /*-{
        d[k] = v
    }-*/;
    public static native void dictPut(JavaScriptObject d, String k, JavaScriptObject v) /*-{
        d[k] = v
    }-*/;

    public static native String dictGetStr(JavaScriptObject arr, String k) /*-{
        return arr[k]
    }-*/;
    public static native JavaScriptObject dictGetObj(JavaScriptObject arr, String k) /*-{
        return arr[k]
    }-*/;
    public static native int dictGetInt(JavaScriptObject arr, String k) /*-{
        return arr[k]
    }-*/;
    public static native boolean dictGetBool(JavaScriptObject arr, String k) /*-{
        return arr[k]
    }-*/;
    public static native boolean dictGetBool(JavaScriptObject arr, String k, boolean def_val) /*-{
        var v = arr[k];
        if (v === undefined)
            return def_val
        return v
    }-*/;    

}