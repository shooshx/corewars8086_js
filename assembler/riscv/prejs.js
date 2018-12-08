var g_outputText = null
function myPrintConsole(line) {
    console.log("*** " + line)
    g_outputText += line + '\n'
}

Module['print'] = myPrintConsole
Module['printErr'] = myPrintConsole


