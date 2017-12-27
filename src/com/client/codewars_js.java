package com.client;


import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;


import il.co.codeguru.corewars8086.CoreWarsEngine;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class codewars_js implements EntryPoint {

  public static native void console(String text)
/*-{
    console.log(text);
}-*/;  
  
  /**
   * This is the entry point method.
   */
  public void onModuleLoad() {
    console("testtttttt");
    try {
        CoreWarsEngine.main(null);
    }
    catch(Exception e) {
    }
  

  }
}
