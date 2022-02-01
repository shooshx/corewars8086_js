corewars_js
===========

This is a javascript version of corewars8086  

https://shooshx.github.io/corewars8086_js/war/page.html

Features include:

- assembler, runner and debugger compiled to javascript
- integrated nasm assembler that runs as you type code
- easy management of players
- step by step debugger
  - allows editing of registers on the fly
- disassembly of code as it is executed
- breakpoints in code
- ability to set the program load address manually in the debugger
- view of the stack and shared memory
- watch view with full featured watch language
  - all operators: +,-,*,/,%,|,&,~,**(power)
  - all operations are 16 bit math
  - register access by the names
  - memory access using square brackets 
     - [bx] to access byte, 
     - [bx]w to access a word, 
     - [ds:bx] to access fully qualified address
  - numbers in hex (0xA3F), binary (0b110111) and octal (0o14427)   
- zoomable memory canvas
  - show memory content at zoom factor 4
  - edit memory content in canvas by setting a cursor with a click
  - move the cursor using arrows and scroll around
- it is possible to inspect the state of warriors in the debugger after
  a war is over and even continue running the war with just the winner running.
- implementes all features of the original Java GUI
- Load a batch of survivors or zombies binaries from a zip file
- load and save all players code from and to a json file
- Change the size of panels layout using splitters
- Options in menu:
   - reset the layout to its default state
   - move the players panel to be on the left (for wide screens) or at the top (for 4:3 screens)
   - Open options dialog
   - clear all current players, reset to initial test players
- Options in options dialog
  - change the width of the memory display for better visibility
  - Alternate opcode colors for better visibility of where opcodes start and end in the memory view
  - enable register pointers pointing to the memory canvas
  - enable Auto-save state. when enabled the editor state is saved to localStorage and loaded on page reload
- Competition: run many games one after the other with the same set of warriors
  - Copy the textual table of result
  - Detailed control over the visualization of competition graph
     - change orientation, sorting, name apperance, rank numbers

tips and tricks
- When debugging, you can always return to a warrior running point by clicking its name on the left pane
- You can set value of any register manually by writing a value in its box. This includes IP and Flags registers.

  
Coming up features:
- data breakpoints
- fixed randomization bug
- online competition


references:  
https://codeguru.co.il/Xtreme/  
https://github.com/codeguru-il/corewars8086  
https://github.com/YoavKa/corewars8086    (disassembler)   
https://github.com/kimwalisch/calculator  (watch language)   
nice disassembler:
https://onlinedisassembler.com/odaweb/

