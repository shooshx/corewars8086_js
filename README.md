corewars_js
===========

This is a javascript version of corewars8086  

https://shooshx.github.io/corewars8086_js/war/page.html

Features include:

- assembler, runner and debugger compiled to javascript
- integrated nasm assembler that runs as you type
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
- Load a batch of survivors or zombies from a zip file

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

