package com.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;

import il.co.codeguru.corewars8086.CoreWarsEngine;
import il.co.codeguru.corewars8086.gui.widgets.Console;

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
    console("onModuleLoad");

    GWT.setUncaughtExceptionHandler(new GWT.UncaughtExceptionHandler() {
        public void onUncaughtException(Throwable e) {
          Console.log("Uncaught EXCEPTION " + e.toString());
        }
    });

    try {
        CoreWarsEngine.main(null);
    }
    catch(Throwable e) {
        Console.log("onModuleLoad EXCEPTION " + e.toString());
    }


  }
}
