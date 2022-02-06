
// Java code comes to get and clear this variable to get the stdout of the nasm run
var g_outputText = null
function printConsole(line) {
    //console.log("*** " + line)
    g_outputText += line + '\n'
}

Module['print'] = printConsole
Module['printErr'] = printConsole