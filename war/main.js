"use strict";

var run_nasm = null
var PAGE_SIZE = 512
var LAST_PART_INDEX = Math.trunc(65535/PAGE_SIZE)

var did_start = false

var selcount = 1

function start()
{
    if (did_start)
        return;
    console.log("start()");
    run_nasm = Module.cwrap('run_nasm', null, ['string', 'string'])
    Module['print'] = printConsole
    Module['printErr'] = printConsole

    asm_edit.addEventListener("keydown", fixhscroll)
    asm_edit.addEventListener("keydown", fixTabKey) // want to capture the press since we want to prevent the default action
    asm_edit.addEventListener("keyup", fixhscroll)
    asm_edit.addEventListener("keyup", fixIndent)  // indent is on key up since we want it after the \n

    // asm_pre.addEventListener("mousewheel", asm_pre_mousewheel) not working

    populate_debug_area()

    did_start = true

    document.addEventListener("selectionchange", function() {
    //    var s = document.getSelection();
    //    var r = s.getRangeAt(0)
    //    console.log('Selection changed ' + (selcount++) + "  " + s.rangeCount + " " + r.startContainer.id + ":" + r.startOffset + " - " + r.endContainer.id + ":" + r.endOffset  );

    /*    if (asm_edit.selectionStart == 2) {
            asm_edit.selectionStart = 3;
            console.log("moved")
        }*/

    });

    setup_breakpoints_savers()

    speedSlider.addEventListener("input", function() {
        //speedSliderVal.innerText = speedSlider.value
    })
}


// called when GWT finshed loading
function gwtStart()
{
    start()
    //do_layout()  // relies on j_resized
    console.log("gwtStart()");
   // start with two players
    addPlayersPanel()
    addPlayersPanel()

    sel_code_w1_pA.checked = true
    triggerSrc('pA', 1)

    j_demoDebugPlayers();

    addWatchLine();
    do_layout()
    create_options_dlg()
    reg_graphs_panel_resize()

    //addWatchLine();
    //addWatchLine();

}


// allows disregarding the saved tree if there's code change
const TREE_VER = 0.1

function default_layout_tree(lname)
{
    const is_edit = lname == "edit"
    const tree = {
        leaves_ver_override: true, // no need to do the leaves ver check since we know it's ok and it's the default
        tree_ver: TREE_VER,
        split:"v",  // players panel from the rest
        fixed_a: 180,
        child_a: "players",
        child_b: {
            split:"v",
            ratio: 0.4,
            child_a: { 
                split: "h",
                ratio: 0.7,
                child_a: "edit",
                child_b: {
                    split: "h",
                    ratio: 0.8,
                    child_a: {name:"edit_bottom", hidden: !is_edit},
                    child_b: {name:"cpu", hidden:is_edit}
                }
            },
            child_b: {
                split: "v",
                ratio: 0.25,
                child_a: {  // middle view
                    split: "h",
                    ratio: 0.3,
                    child_a: {name:"stack", hidden:is_edit}, 
                    child_b: { 
                        split: "h",
                        ratio: 0.5,
                        child_a: {name:"shared", hidden:is_edit},
                        child_b: {name:"watch", hidden:is_edit}
                    }                    
                },
                child_b: "mem"
            }
        }
    }
    return tree
}


function re_layout_current() {
    g_layout_ctx.load(g_last_saved_layouts[g_current_layout_name])
}

function reset_layout()
{
    for(let lname of g_layout_names) {
        g_last_saved_layouts[lname] = default_layout_tree(lname)
    }
    re_layout_current()

    reset_graph_layout()
}

const CURRNT_CELL_VALUE_DIV_HEIGHT = 20

function mem_panel_resized(w, h)
{
    let resized = false;
    if (w !== warCanvas.width) {
        warCanvas.width = w
        resized = true
    }
    h -= CURRNT_CELL_VALUE_DIV_HEIGHT
    if (h !== warCanvas.height) {
        warCanvas.height = h
        resized = true
    }
    if (resized)
        j_canvasResized(w, h)
    zoom_handle_resize(w, h)
}

function do_layout()
{
    const leaves = {
        players: { elem:players_panel },
        edit: { elem: edit_panel },
        edit_bottom: { elem: editor_bottom },
        cpu: { elem: cpuPanel }, // step, speed and registers
        stack: { elem: stackArea },
        shared: { elem: sharedMemArea },
        watch: { elem: watch_container },
        mem: { elem: memory_panel, resized:mem_panel_resized }
    }

    for(let lname of g_layout_names) {
        const in_txt = localStorage.getItem("layout_" + lname)
        const tree_json = (in_txt !== null) ? JSON.parse(in_txt) : null
        let base_tree = null
        if (tree_json !== null && tree_json.tree_ver === TREE_VER)
            base_tree = tree_json
        else
            base_tree = default_layout_tree(lname)
        g_last_saved_layouts[lname] = base_tree
    }

    const tree = g_last_saved_layouts["edit"]

    g_layout_ctx = SLayout.setup(body, leaves, null)
    if (!g_layout_ctx.load(tree)) {
        // failed due to changed leaves?
        g_last_saved_layouts["edit"] = default_layout_tree("edit")
        g_layout_ctx.load(g_last_saved_layouts["edit"])
    }

    g_layout_ctx.set_save_callback((ctx)=>{
        const obj = ctx.save()
        g_last_saved_layouts[g_current_layout_name] = obj
        const json = JSON.stringify(obj)
        localStorage.setItem("layout_" + g_current_layout_name, json)        
    })
    set_cpu_visible(false)

    const pp_state = localStorage.getItem("players_panel_state")
    if (pp_state !== null)
        flip_players_panel(pp_state)
}

var g_current_layout_name = "edit"
const g_last_saved_layouts = {} // edit: saved obj, debug: saved obj
const g_layout_names = ["edit", "debug"]
var g_layout_ctx = null

function set_cpu_visible(v)
{
    g_current_layout_name = v ? "debug" : "edit"

    if (!g_layout_ctx.load(g_last_saved_layouts[g_current_layout_name])) {
        // failed due to changed leaves?
        g_last_saved_layouts[g_current_layout_name] = default_layout_tree(g_current_layout_name)
        g_layout_ctx.load(g_last_saved_layouts[g_current_layout_name])        
    }
}

var g_css_rules = null
var g_players_panel_state = "v"

function flip_players_panel(to_state=null)
{
    if (to_state !== null) {
        if (to_state == g_players_panel_state)
            return
    }
    else {
        if (g_players_panel_state == "v")
            to_state = "h"
        else
            to_state = "v"
    }
    g_players_panel_state = to_state
    localStorage.setItem("players_panel_state", g_players_panel_state)


    if (g_css_rules === null) {
        g_css_rules = {
            toppic2:  cssRuleBySelector(".toppic2"),
            zomb_line: cssRuleBySelector(".zomb_line")
        }
    }
    // to top
    if (g_players_panel_state == "h") {
        g_css_rules.toppic2.style.width = "140px"
        g_css_rules.toppic2.style.margin = "10px 4px 5px 10px"
        g_css_rules.toppic2.style.display = "inline-block"
        players_contaier.style.display = "inline-block"
        g_css_rules.zomb_line.style.display = "inline-block"
    }
    else {
        g_css_rules.toppic2.style.width = ""
        g_css_rules.toppic2.style.margin = ""
        g_css_rules.toppic2.style.display = ""
        players_contaier.style.display = ""
        g_css_rules.zomb_line.style.display = "block"
    }


    for(let lname of g_layout_names) {
        const tree = g_last_saved_layouts[lname]
        // top level is divider between players and the rest of the layout
        tree.split = g_players_panel_state
        // reset to the preferred width for each state
        tree.fixed_a = (g_players_panel_state == "v") ? 180 : 118
    }
    re_layout_current()
}

// -----------------------------------------------------------------------


var saved_selectionStart = -1 // need to be int for java to read
var saved_selectionEnd = -1
var saved_keydown = null

// save the text area selection start and end in order to find out how to move the breakpoints
function setup_breakpoints_savers()
{
    asm_edit.addEventListener("keydown", function(e) {
        saved_selectionStart = asm_edit.selectionStart
        saved_selectionEnd = asm_edit.selectionEnd
        saved_keydown = e.key
    })

    var mouseHandler = function(e) {
        saved_selectionStart = asm_edit.selectionStart
        saved_selectionEnd = asm_edit.selectionEnd
        saved_keydown = null
    }
    // do both up and down to be safe. not sure if both are actually needed
    asm_edit.addEventListener("mousedown", mouseHandler)
    asm_edit.addEventListener("mouseup", mouseHandler)
}

// make the long pages of the disassembly view
function populate_debug_area()
{
    console.log("start addr add")
    var c = document.createDocumentFragment();
    var currentPart = null
    for(var i = 0; i <= 0xffff; ++i) {

        if ((i % PAGE_SIZE) == 0) {
            var parti = i / PAGE_SIZE
            currentPart = document.createElement('div')
            currentPart.classList = "dpart"
            currentPart.id = "dpart" + parti
            currentPart.style.display = ""
            c.appendChild(currentPart)

            var placeholder = document.createElement('div')
            placeholder.classList = "dplace"
            placeholder.id = "dplace" + parti
            placeholder.style.display = "none"

            if (i != 0) { // show the first one so it could give its height to the rest
                currentPart.style.display = "none"
                placeholder.style.display = ""
            }
            c.appendChild(placeholder)
        }
        var addr = i.toString(16).padStart(4, '0')
        var e = document.createElement('div')
        e.classList = 'dline'
        e.id = 'd' + i
        e.innerText = addr

        currentPart.appendChild(e);
    }
    debug_text.appendChild(c)
    console.log("done addr add")
}

function cssRuleBySelector(selText) {
    for(let sheet of document.styleSheets) {
        let rules = sheet.cssRules
        for(var i = 0; i < rules.length; ++i)
            if (rules[i].selectorText == selText)
                return rules[i]
    }
    return null
}

var dplace_css = null
var single_part_height = 0
function fix_debug_scroll_placeholders_size()
{
    if (dplace_css == null)
        dplace_css = cssRuleBySelector('.dplace')
    // part0 is the only one displayed at the start so it would give its height to the rest
    single_part_height = dpart0.offsetHeight
    if (single_part_height == 0)
        throw "did not get placeholder height"
    dplace_css.style.height = dpart0.offsetHeight + "px"
}

// 0 is the only one shown at the start
// this array is always size 2
var last_shown_parts = [0,-1]

function hidePage(i) {
    if (i == -1)
        return
    document.getElementById('dpart' + i).style.display = 'none'
    document.getElementById('dplace' + i).style.display = ''
}
function showPage(i) {
    if (i == -1)
        return
    document.getElementById('dpart' + i).style.display = ''
    document.getElementById('dplace' + i).style.display = 'none'
}

// need to maintain who's open and who's not
// at all time, exactly two parts are open
// force does the scroll painting even if we're already there, need this when starting debug to update dirty pages
function debugAreaScroll(force)
{
    var atScroll = debug_text.scrollTop
    var atpartf = atScroll / single_part_height
    var atpart = Math.trunc(atpartf)
    var where_in_part = atpartf % 1  // fraction part

    var new_shown_parts = [atpart]
    var second_part = (where_in_part > 0.5) ? (atpart + 1) : (atpart - 1)
    if (second_part >= 0 && second_part <= LAST_PART_INDEX) {
        if (second_part > atpart)
            new_shown_parts.push(second_part)
        else
            new_shown_parts = [second_part, atpart] // maintain the first one be the smallest one for the above comparison
    }
    else
        new_shown_parts.push(-1)

    // this will still work fine if the array has only 1 element, [1] in both will be undefined
    if (!force && new_shown_parts[0] == last_shown_parts[0] && new_shown_parts[1] == last_shown_parts[1])
        return

    hidePage(last_shown_parts[0])
    hidePage(last_shown_parts[1])

    showPage(new_shown_parts[0])
    showPage(new_shown_parts[1])

    j_setScrollAt(new_shown_parts[0], new_shown_parts[1]);

    last_shown_parts = new_shown_parts

}

function scrollToAddr(addr) {
    if (addr < 0 || addr > 0xffff)
        return
    var e = document.getElementById("d" + addr)
    if (!e)
        return
    var eoffs = e.offsetTop
    if (eoffs > debug_text.scrollTop && eoffs < debug_text.scrollTop + debug_text.offsetHeight - 30)
        return // already in view, don't need to scroll

    e.parentElement.style.display = ""  // need to show it for it to have an offsetTop
    e.style.display = "" // just in case it is hidden for some reason
    debug_text.scrollTop = e.offsetTop - 30  // have some margin from the top
}

function triggerGoTo() {
    var addr = parseInt(debug_goto.value, 16)
    if (isNaN(addr)) {
        err_box("failed to parse address");
        return
    }
    if (addr < 0  || addr > 0xffff) {
        err_box("address out of range");
    }
    scrollToAddr(addr)
}
function triggerGoToKey() {
    if(event.key !== "Enter")
        return;
    event.preventDefault(); // No need to `return false;`.
    triggerGoTo()
}






function addTextChild(elem, txt) {
    var dummy = document.createElement("DIV")
    dummy.innerHTML = txt
    elem.appendChild(dummy.firstChild)
}

var g_nextLetter = 'A'
var g_usedLetters = []
var g_srcButtons = []  // ids of elements that are checkboxes that select a source file to be displayer
var g_codeButtonLabels = []
var g_usedZnums = []

function asciiAdd(letter, val) {
    return String.fromCharCode(letter.charCodeAt(0) + val)
}

function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    console.assert(index > -1, "did not find " + value)
    arr.splice(index, 1);
}


function addPlayersPanel() {
    if (addPlayerBtn.getAttribute("disabled") == "true")
        return;
    if (g_usedLetters.length >= 20)
        return; // max players

    addPlayerPanel_as("Player " + g_nextLetter, false)
}

function addPlayerPanel_as(name, wtype)
{
    var text = '<div id="pl_frame_pLETTER" class="toppic toppic2">\
          <div class="famtitle">\
            <input class="fam_check_box hidden mycheck" id="player_check_pLETTER" type="checkbox" checked onchange="changedPlayerCheck(\'LETTER\', this.checked)" >\
            <label class="fam_check mycheck_label" for="player_check_pLETTER"></label>\
            <label id="player_name_lbl_pLETTER" class="fam_label">NAME</label>\
            <label id="player_erase_pLETTER" class="pl_close_icon" onclick="triggerErasePlayer(this, pl_frame_pLETTER, \'LETTER\')"></label>\
          </div>\
          <input class="fam_check_box hidden mycheck" id="wtype_pLETTER" type="checkbox" onchange="changedWType(\'pLETTER\', this.checked)" >\
          <label class="fam_check mycheck_label wtype_label" for="wtype_pLETTER">Two Warriors</label>\
          <input id="sel_code_w1_pLETTER" class="hidden sc-check src_sel_chk" onclick="triggerSrc(\'pLETTER\', 1)" type="radio" name="src_select">\
          <label id="sel_code_lbl_w1_pLETTER" class="sc-btn src_sel_but src_sel_but2" for="sel_code_w1_pLETTER" >1</label>\
          <input id="sel_code_w2_pLETTER" class="hidden sc-check src_sel_chk" onclick="triggerSrc(\'pLETTER\', 2)" type="radio" name="src_select">\
          <label id="sel_code_lbl_w2_pLETTER" class="sc-btn src_sel_but src_sel_but2" for="sel_code_w2_pLETTER">2</label>\
        </div>'

    const letter = g_nextLetter
    addTextChild(players_contaier, text.replace(/LETTER/g, letter).replace(/NAME/g, name))

    g_srcButtons.push('sel_code_w1_p' + letter)
    g_srcButtons.push('sel_code_w2_p' + letter)
    g_codeButtonLabels.push('sel_code_lbl_w1_p' + letter)
    g_codeButtonLabels.push('sel_code_lbl_w2_p' + letter)

    const label = 'p'+letter
    j_addPlayer(label, name)
    changedWType(label, wtype, true) // do update label

    g_usedLetters.push(letter)
    g_nextLetter = asciiAdd(g_nextLetter, 1)
    return label
}

function changedWType(label, v, move_ui)
{
    if (v === true)
        v = 'TWO_DIFFERENT'
    else if (v == false)
        v = 'SINGLE'

    if (move_ui) {
        var checked = (v == 'TWO_DIFFERENT')
        document.getElementById('wtype_' + label).checked = checked
    }

    var elem1 = document.getElementById('sel_code_lbl_w1_' + label)
    var elem2 = document.getElementById('sel_code_lbl_w2_' + label)
    var frame = document.getElementById('pl_frame_' + label)

    if (v == 'SINGLE' || v == 'TWO_IDENTICAL') {
        elem2.style.visibility = 'hidden'
        elem2.style.opacity = 0.0
        elem1.style.marginTop = '7px'
        //frame.style.height = '98px' // not needed since it's always the same height now
    }
    else if (v == 'TWO_DIFFERENT') {
        elem2.style.visibility = 'visible'
        elem2.style.opacity = 1
        elem1.style.marginTop = '7px'
        //frame.style.height = ''
    }

    j_changedWType(label, v);

}


function triggerSrc(label, index)
{
    j_srcSelectionChanged(label, index)
}

function triggerErasePlayer(buttonElem, elem, letter, immediate=false)
{
    if (buttonElem !== null && buttonElem.getAttribute("disabled") == "true")
        return;
    //elem.parentNode.removeChild(elem);
    if (immediate) {
        elem.parentNode.removeChild(elem);
    }
    else { // animation
        elem.addEventListener('animationend', function() {
            elem.parentNode.removeChild(elem);
        })
        elem.classList.add('removed_anim')
    }

    arrayRemove(g_usedLetters, letter);
    arrayRemove(g_srcButtons, 'sel_code_w1_p' + letter)
    arrayRemove(g_srcButtons, 'sel_code_w2_p' + letter)
    arrayRemove(g_codeButtonLabels, 'sel_code_lbl_w1_p' + letter)
    arrayRemove(g_codeButtonLabels, 'sel_code_lbl_w2_p' + letter)

    j_removePlayer('p'+letter)

    if (g_usedLetters.length == 0) {
        g_nextLetter = 'A'
    }
    else
    {
        // figure out what would be the next letter
        var check = 'Z' // check from Z backwards
        while(true) {
            if (g_usedLetters.indexOf(check) > -1)
                break;
            check = asciiAdd(check, -1)
        }
        if (check != 'Z')
            g_nextLetter = asciiAdd(check, 1)
        else {  // all letters are used up, check for holes
            check = 'A'
            while(check != 'Z') {
                if (g_usedLetters.indexOf(check) == -1)
                    break;
                check = asciiAdd(check, 1)
            }
            g_nextLetter = check // upper limit on number of players should avoid this causing a problem
        }
    }
}

function removeAllPlayers()
{
    const used_letters_copy = g_usedLetters.slice(0)
    for(let letter of used_letters_copy) {
        // remove without animation since we don't want to have more than one element with the same "pA" ID
        triggerErasePlayer(null, document.getElementById("pl_frame_p" + letter), letter, true)
    }
}

function removeAllZombies() 
{
    const used_znums = g_usedZnums.slice(0)
    for(let num of used_znums) {
        triggerEraseZombie(null, document.getElementById("zomb_line_z" + num), num)
    }
    g_nextZombNum = 1
}

function changedPlayerCheck(letter, v)
{
    j_enablePlayer('p'+letter, v)
}

var g_nextZombNum = 1

function addZombieCode() {
    if (addZombieBtn.getAttribute("disabled") == "true")
        return;
    addZombieCode_as("Zombie " + g_nextZombNum)
}

function addZombieCode_as(name) {
    const text = '<div id="zomb_line_zNUM" class="zomb_line">\
        <input id="sel_code_w1_zNUM" class="hidden sc-check" onclick="triggerSrc(\'zNUM\', 1)" type="radio" name="src_select">\
        <label id="player_name_lbl_zNUM" class="sc-btn src_sel_but zomb_sel_but" for="sel_code_w1_zNUM" >NUM</label>\
        <label id="player_erase_zNUM" class="pl_close_icon za_close_icon" onclick="triggerEraseZombie(this, zomb_line_zNUM, \'NUM\')"></label>\
        </div>'

    addTextChild(zombies_container, text.replace(/NUM/g, g_nextZombNum).replace(/NAME/g, name))
    const num = '' + g_nextZombNum  // turn to a string
    g_nextZombNum += 1

    g_usedZnums.push(num)
    g_codeButtonLabels.push("player_name_lbl_z" + num)

    const label = 'z'+num
    j_addPlayer(label, name) // players are identified by a letter, zombies by a number
    return label
}



function triggerEraseZombie(buttonElem, elem, num) {
    if (buttonElem !== null && buttonElem.getAttribute("disabled") == "true")
        return;

    elem.parentNode.removeChild(elem);
    arrayRemove(g_usedZnums, num)
    arrayRemove(g_codeButtonLabels, "player_name_lbl_z" + num)

    j_removePlayer('z'+num)
}


// Java code comes to get and clear this variable to get the stdout of the nasm run
var g_outputText = null
function printConsole(line) {
    //console.log("*** " + line)
    g_outputText += line + '\n'
}


// in case there is a long line, when returning to a new line, the text will be still scrolled to the left, fix that
function fixhscroll(e) {
    if (e.target != asm_edit)
        return;

    if (asm_edit.selectionStart == 0 || asm_edit.selectionStart == 1)
    {
        // console.log("fixing scroll")
        asm_edit.scrollLeft = 0
        asm_edit.scrollTop = 0
    }
    else if (asm_edit.value[asm_edit.selectionStart-1] == '\n' || asm_edit.value[asm_edit.selectionStart-2] == '\n')
    {
        asm_edit.scrollLeft = 0
    }
}



// called when a warning or error line in the editor is double clicked
function asm_cursorToLine(charOffset) {
    asm_edit.selectionStart = charOffset
    asm_edit.selectionEnd = charOffset
    asm_edit.focus()

}

/*function asm_pre_mousewheel(event) {
    asm_edit.dispatchEvent(new event.constructor(event.type, event));
}  scrolling in the code and numbers panes not working */


function handle_asm_edit_scroll() {
    var roundedScroll = Math.floor(asm_edit.scrollTop);

    // Fixes issue of desync text on mouse wheel, fuck Firefox.
    if(navigator.userAgent.toLowerCase().indexOf('firefox') < 0) {
        asm_edit.scrollTop = roundedScroll;
    }

    asm_pre.style.top = "-" + roundedScroll + "px"
    //asm_pre.scrollTop = asm_edit.scrollTop

    asm_show.style.left = "-" + asm_edit.scrollLeft + "px"
}

function fixTabKey(e) {
    if (e.keyCode === 9){
        var selStartPos = asm_edit.selectionStart
        var inputVal = asm_edit.value;
        e.preventDefault();

        asm_edit.value = inputVal.substring(0, selStartPos) + "    " + inputVal.substring(selStartPos, inputVal.length);
        asm_edit.selectionStart = selStartPos + 4;
        asm_edit.selectionEnd = selStartPos + 4;
        asm_edit.dispatchEvent(new Event("input")) // trigger the java parsing
    }
}

function fixIndent(e) {
    if (e.keyCode === 13)
    { // line indentation
        var selStartPos = asm_edit.selectionStart
        var inputVal = asm_edit.value;
        var pos = selStartPos - 2 // skip the last added \n (previous line)
        var seenSpaces = 0;
        // go to the start of the line, check if there is indentation there
        while (pos >= 0) {
            if (inputVal[pos] == ' ')
                ++seenSpaces;
            else if (inputVal[pos] == '\n')
                break;
            else
                seenSpaces = 0;
            --pos;
        }
        if (seenSpaces > 0) {
            // problem with this is it flushes the undo buffer, test initTextEvent ?
            asm_edit.value = inputVal.substring(0, selStartPos) + " ".repeat(seenSpaces) + inputVal.substring(selStartPos, inputVal.length);
            asm_edit.selectionStart = selStartPos + seenSpaces;
            asm_edit.selectionEnd = selStartPos + seenSpaces;
            j_asm_edit_changed() // simulate input
        }
    }
}

var debug_area_shown = false
var deferredEditorToAddress = -1 // set by code in CodeEditor.java

var prevDebug = false;
function triggerDebug() {
    console.log("triggerDebug " + debugCheckbox.checked)
    if (prevDebug == debugCheckbox.checked) // not sure how this is possible
        return;
    prevDebug = debugCheckbox.checked

    if (debugCheckbox.checked)
    {
        if (!j_startDebug()) {
            console.error("cannot start debug")
            debugCheckbox.checked = false;
            prevDebug = debugCheckbox.checked
            return
        }

        debugBtnIn.style.backgroundImage = "url(red_stop.png)"
        debugBtnIn2.innerText = "Stop"
        competeCheckbox.setAttribute("disabled", true);

        edit_area.style.display="none"
        debug_area.style.display=""
        if (!debug_area_shown) {
            fix_debug_scroll_placeholders_size()
            debug_area_shown = true; // need to do this fix only on the first time it's shown
        }

        // we do this only here because it needs to be done after the current page is shown.
        if (deferredEditorToAddress != -1) { // can happen if the selected player is disabled
            scrollToAddr(deferredEditorToAddress)
            deferredEditorToAddress = -1;
            debugAreaScroll(true)  // force scroll render due to dirty pages
        }
        j_debugUiInited();

        // disable editing the players
        addPlayerBtn.setAttribute("disabled", true)
        for(var ui in g_usedLetters) {
            var u = g_usedLetters[ui]
            document.getElementById("player_erase_p" + u).setAttribute("disabled", true)
            document.getElementById("player_check_p" + u).setAttribute("disabled", true)
            document.getElementById("wtype_p" + u).setAttribute("disabled", true)
            if (!document.getElementById("player_check_p" + u).checked) {
                document.getElementById("sel_code_w1_p" + u).setAttribute("disabled", true)
                document.getElementById("sel_code_w2_p" + u).setAttribute("disabled", true)
            }
        }
        player_check_zombies.setAttribute("disabled", true)
        addZombieBtn.setAttribute("disabled", true)
        for(var uzi in g_usedZnums) {
            var uz = g_usedZnums[uzi]
            document.getElementById("player_erase_z" + uz).setAttribute("disabled", true)
            if (!player_check_zombies.checked)
                document.getElementById("player_name_lbl_z" + uz).setAttribute("disabled", true)
        }
        clear_error()
    }
    else {
        j_stopDebug()

        debugBtnIn.style.backgroundImage = ""
        debugBtnIn2.innerText = "Debug"
        competeCheckbox.removeAttribute("disabled");

        edit_area.style.display=""
        debug_area.style.display="none"


        addPlayerBtn.removeAttribute("disabled")
        for(var ui in g_usedLetters) {
            var u = g_usedLetters[ui]
            document.getElementById("player_erase_p" + u).removeAttribute("disabled")
            document.getElementById("player_check_p" + u).removeAttribute("disabled")
            document.getElementById("wtype_p" + u).removeAttribute("disabled")

            document.getElementById("sel_code_w1_p" + u).removeAttribute("disabled")
            document.getElementById("sel_code_w2_p" + u).removeAttribute("disabled")
        }
        player_check_zombies.removeAttribute("disabled")
        addZombieBtn.removeAttribute("disabled")
        for(var uzi in g_usedZnums) {
            var uz = g_usedZnums[uzi]
            document.getElementById("player_erase_z" + uz).removeAttribute("disabled")
            document.getElementById("player_name_lbl_z" + uz).removeAttribute("disabled")
        }
        clear_code_buttons_colors()
    }
}

function clear_code_buttons_colors() {
    for(var clbl in g_codeButtonLabels) {
        var lbl = g_codeButtonLabels[clbl]
        document.getElementById(lbl).style.boxShadow = ''
    }
}

function triggerRegBase(ishex) {
    if (ishex) {
        hexCheckbox.checked = true;
        decCheckbox.checked = false;
    }
    else {
        hexCheckbox.checked = false;
        decCheckbox.checked = true;
    }
    j_setRegistersBase(ishex ? 16:10)
}

function loadAddrUpdateUI() {
    if (asm_load_addr_type.value == "rand") {
        fixed_load_addr.style.visibility = "hidden";
        fixed_load_addr.style.opacity = "0.0";
    }
    else {
        fixed_load_addr.style.visibility = "visible";
        fixed_load_addr.style.opacity = "1.0";
    }

}
function changedLoadAddrType() {
    loadAddrUpdateUI()
    j_loadAddrChanged(fixed_load_addr.value, asm_load_addr_type.value == "rand");

}
function changedFixedAddr() {
    j_loadAddrChanged(fixed_load_addr.value, asm_load_addr_type.value == "rand");
}
// from java, when changing warrior
function updateLoadAddr(strValue, isRand) {
    asm_load_addr_type.value = isRand ? "rand":"fixed"
    fixed_load_addr.value = strValue
    loadAddrUpdateUI()
}


function addTableChild(elem, txt) {
    var dummy = document.createElement("TABLE")
    dummy.innerHTML = txt
    elem.appendChild(dummy.firstChild.firstChild)
    // firstChild of table is tbody added automatically, bypass it
}

// grip idea from http://jsfiddle.net/thrilleratplay/epcybL4v/
var g_watchId = 0;
var watch_expr_list = []
var watch_expr_size = null  // size as dragged by the grip

function addWatchLine() {
    var wid = g_watchId++

    var text = '<div class="watch_row" id="watchID">\
                  <div class="watch_expr allow_select" id="watchID_expr" style="width:100px;">\
                     <div id="watchID_expr_content" class="watch_expr_content">&nbsp;</div>\
                     <input type="text" class="watch_expr_edit" id="watchID_expr_edit" spellcheck="false">\
                     <div class="watch_grip" id="watchID_grip"></div>\
                  </div><div class="watch_val allow_select" id="watchID_val"></div>\
                  <div id="watchID_del_but" class="sc-btn watch_del_but" title="Remove watch"></div> \
               </div>'
    text = text.replace(/ID/g, wid)

    addTextChild(watchArea, text)
    //add_watch_but.style.top = (watch_expr_list.length * 21 + 21) + "px"

    var grip = document.getElementById("watchID_grip".replace(/ID/g, wid) )
    var expr = document.getElementById("watchID_expr".replace(/ID/g, wid) )
    watch_expr_list.push(expr)
    if (watch_expr_size != null)
        expr.style.width = watch_expr_size + 'px';
    var expr_edit = document.getElementById("watchID_expr_edit".replace(/ID/g, wid) )
    var expr_content = document.getElementById("watchID_expr_content".replace(/ID/g, wid) )
    var valu = document.getElementById("watchID_val".replace(/ID/g, wid) )
    var delbut = document.getElementById("watchID_del_but".replace(/ID/g, wid) )

    j_addWatch(wid)

    expr.addEventListener('click', function(e) {
        expr_edit.style.visibility = "visible"
        expr_edit.focus()
        // TBD should somehow put the cursor in the expected place inside expr_edit
        // measure the text and use selectionStart, selectionEnd to place the cursor

    });
    expr_edit.addEventListener('change', function() { // enter was pressed
        //expr_content.innerText = expr_edit.value;
        expr_edit.style.visibility = "hidden"
        // if it's the last one being edited and there is a non empty value written in it, add another one
        if (watch_expr_list.indexOf(expr) == watch_expr_list.length - 1 && valu.innerText != "") {
            addWatchLine();
        }
    });
    expr_edit.addEventListener('input', function() { // enter was pressed
        var result = j_watchTextChanged(expr_edit.value, wid)
        if (result == false)
            expr_content.innerHTML = "&nbsp;"; // without this the watch window layout gets messed up for some reason
        else
            expr_content.innerText = expr_edit.value;
    });
    expr_edit.addEventListener('blur', function() { // enter was pressed
        expr_edit.style.visibility = "hidden"
    });

    delbut.addEventListener("click", function() {
        if (watch_expr_list.length == 1)
            return // don't delete the last one
        if (watch_expr_list.indexOf(expr) == watch_expr_list.length - 1 && valu.innerText == "")
            return // don't delete the last one that is empty that was last edded
        var idx = watch_expr_list.indexOf(expr)
        if (idx == -1)
            return // should not happen
        var row = document.getElementById("watchID".replace(/ID/g, wid) )
        watchArea.removeChild(row)
        j_delWatch(wid)
        watch_expr_list.splice(idx, 1)
    });


    var moving = false;
    var startOffset;

    grip.addEventListener('mousedown', function(e) {
        moving = true;
        startOffset = watch_expr_list[0].offsetWidth - e.pageX;
        //console.log("CAPTURE")
    });


    document.addEventListener('mousemove', function(e) {
      if (moving) {
          watch_expr_size = startOffset + e.pageX
          for(var elemi in watch_expr_list)
              watch_expr_list[elemi].style.width = watch_expr_size + 'px';
          e.preventDefault(); // prevent selection action from messing it up

          //console.log(watch_expr_size + "  " + watchArea.offsetWidth - 30)
          if (watch_expr_size > watchArea.offsetWidth - 50)
              watchArea.style.overflowX = "auto"
          else
              watchArea.style.overflowX = "hidden"
      }
    });

    document.addEventListener('mouseup', function() {
        moving = false;
        //console.log("-release")
    });

}

function doLoadBinary(arrbuf) {
    if (arrbuf.byteLength > 512)
        arrbuf = arrbuf.slice(0, 512) // this is what the original engine does
    j_loadBinary(arrbuf)
}

async function read_zip(input_elem) {
    if (input_elem.files.length == 0)
        return null
    const file = input_elem.files[0]
    input_elem.value = ""  // reset it so that next time we could upload the same filename again

    const zip = await JSZip.loadAsync(file)
    const entries = []
    zip.forEach(function (relativePath, zipEntry) {  
        let name = zipEntry.name
        const lastSlash = name.lastIndexOf("/")
        if (lastSlash !== -1)
            name = name.substr(lastSlash + 1)
        zipEntry.base_name = name
        entries.push(zipEntry)
    })
    for(let zipEntry of entries) {
        const buf = await zipEntry.async('arraybuffer')
        zipEntry.buf = buf
    }
    return entries
}

async function load_zip_survivors(input_elem)
{
    const entries = await read_zip(input_elem)
    if (entries === null)
        return
    const by_name = {}, survivors = []
    for(let entry of entries) {
        let index = 1
        let name = entry.base_name
        if (name.endsWith("1") || name.endsWith("2")) {
            index = parseInt(name[name.length - 1])
            name = name.substr(0, name.length - 1)
        }
        const fname_lower = name.toLocaleLowerCase()
        let obj = by_name[fname_lower]
        if (obj === undefined) {
            obj = { name: name}
            by_name[fname_lower] = obj
            survivors.push(obj)
        }
        if (obj[index] !== undefined) {
            show_error("Zip error: two survivors with the same name " + filename)
            return
        }
        obj[index] = entry.buf
    }

    removeAllPlayers()
    for(let obj of survivors) {
        //console.log(obj.name, obj[1], obj[2])
        const label = addPlayerPanel_as(obj.name, obj[2] !== undefined)

        j_srcSelectionChanged(label, 1)
        doLoadBinary(obj[1])
        if (obj[2] !== undefined) {
            j_srcSelectionChanged(label, 2)
            doLoadBinary(obj[2])   
        }
    }

}


async function load_zip_zombies(input_elem)
{
    const entries = await read_zip(input_elem)
    if (entries === null)
        return
    removeAllZombies()

    for(let entry of entries) {
        const label = addZombieCode_as(entry.base_name)
        j_srcSelectionChanged(label, 1)
        doLoadBinary(entry.buf)
    }
}

function triggerUploadBinChanged()
{
    if (uploadBinInput.files.length == 0)
        return
    var file = uploadBinInput.files[0]
    uploadBinInput.value = ""  // reset it so that next time we could upload the same filename again

    var reader = new FileReader();
    reader.onload = function(e) {
        doLoadBinary(e.target.result)
    }
    reader.onerror = function(e) {
        console.error(e)
    }
    reader.readAsArrayBuffer(file);
    return false
}


function saveFile(name, type, data) {
    var url = window.URL.createObjectURL(new Blob([data], {type: type}));
    downloadLink.setAttribute("href", url);
    downloadLink.setAttribute("download", name);
    downloadLink.click();
    window.URL.revokeObjectURL(url);
}
function triggerDownloadBin()
{
    var name = j_getCurrentName()
    var bin = new Uint8Array(j_getCurrentBin())
    saveFile(name, "octet/stream", bin)
}

function create_elem(elem_type, cls) {
    let e = document.createElement(elem_type);
    if (cls !== undefined) {
        if (!Array.isArray(cls))
            cls = [cls]
        e.classList = cls.join(" ")
    }
    return e
}
function add_elem(parent, elem_type, cls) {
    let e = create_elem(elem_type, cls)
    parent.appendChild(e)
    return e
}
function create_div(cls) {
    return create_elem('div', cls)
}

function add_div(parent, cls) {
    let e = create_div(cls)
    parent.appendChild(e)
    return e
}

function add_option_select(parent, label_text, name, opts, onchange)
{
    const line = add_div(parent, "opt_line")
    const label = add_div(line, "opt_label")
    label.innerText = label_text
    const sel = add_elem(line, "select", "opt_select")
    for(let opt of opts) {
        const optElem = add_elem(sel, "option")
        optElem.setAttribute("value", opt)
        optElem.innerText = opt
    }
    name = "opt_" + name
    sel.addEventListener("input", ()=>{ 
        localStorage[name] = sel.value
        onchange(opts[sel.selectedIndex]) 
    })
    let loaded = localStorage[name]
    if (loaded !== undefined) {
        loaded = parseInt(loaded)
        if (opts.includes(loaded)) {
            sel.value = loaded
            if (loaded !== opts[0])
                onchange(opts[sel.selectedIndex])
        }
    }
}

var checkbox_id_gen = 1;

function add_option_checkbox(parent, label_text, name, onchange)
{
    const line = add_div(parent, "opt_line")
    const inp = add_elem(line, "input", "mycheck")
    inp.setAttribute("type", "checkbox")
    const id = "opt_checkbox_" + (checkbox_id_gen++)
    inp.setAttribute("id", id)
    const inp_label = add_elem(line, "label", ["mycheck_label", "opt_checkbox"])
    inp_label.setAttribute("for", id)
    const label = add_elem(line, "label", "opt_check_label")
    label.setAttribute("for", id)
    label.innerText = label_text
    name = "opt_" + name
    inp.addEventListener("change", ()=>{ 
        localStorage[name] = inp.checked ? "1":"0"
        onchange(inp.checked) 
    })
    const loaded = localStorage[name]
    if (loaded !== undefined) {
        inp.checked = (loaded === "true" || loaded === "1")
        if (inp.checked)
            onchange(inp.checked)
    }
    else {
        inp.checked = false
    }
    return {line:line, inp:inp }
}

var g_opt_dlg = null;

function open_options_dlg()
{
    g_opt_dlg.style.display = "initial"
}

const REG_AX = 1, REG_BX = 2, REG_CX = 3, REG_DX = 4
const REG_SI = 5, REG_DI = 6, REG_BP = 7, REG_SP = 8
const REG_CS = 9, REG_DS = 10, REG_SS = 11, REG_ES = 12
const REG_IP = 13

const regs_possibilites = [[REG_CS,REG_IP, 0], 
                           [REG_DS,REG_AX, 1], [REG_DS,REG_BX, 1], [REG_DS,REG_CX, 1], [REG_DS,REG_DX, 1],
                           [REG_DS,REG_SI, 2], [REG_DS,REG_DI, 2], [REG_ES,REG_SI, 2], [REG_ES,REG_DI, 2],
                           [REG_SS,REG_BP, 3], [REG_SS,REG_SP, 3]
                        ]
function reg_name(v) {
    switch(v) {
    case REG_AX: return "AX"; case REG_BX: return "BX"; case REG_CX: return "CX"; case REG_DX: return "DX";
    case REG_SI: return "SI"; case REG_DI: return "DI"; case REG_BP: return "BP"; case REG_SP: return "SP";
    case REG_CS: return "CS"; case REG_DS: return "DS"; case REG_SS: return "SS"; case REG_ES: return "ES";
    case REG_IP: return "IP";
    }
    return "<unknown>"
}

function create_options_dlg()
{
    g_opt_dlg = add_div(body, "options_dlg")
    const close_btn = add_div(g_opt_dlg, "opt_close_btn")
    close_btn.addEventListener("click", ()=>{
        g_opt_dlg.style.display = "none"
    })

    add_option_select(g_opt_dlg, "Memory Panel Width:", "mem_width", [256, 128, 64, 32, 16], change_board_width)
    add_option_checkbox(g_opt_dlg, "Alternate opcode color", "opcode_alt_col", changed_alt_opcode_color)
    add_option_checkbox(g_opt_dlg, "Registers pointers in memory view", "reg_in_mem", changed_reg_in_mem)
    const regs_area = []
    for(let i = 0; i < 4; ++i)
        regs_area.push(add_div(g_opt_dlg, "opt_regs_area"))
    for(let pos of regs_possibilites) {
        const addr_name = reg_name(pos[0]), seg_name = reg_name(pos[1])
        const obj = add_option_checkbox(regs_area[pos[2]], addr_name + ":" + seg_name, "reg_" + seg_name + "_" + addr_name, (v)=>{ enable_reg_ptr(v, pos[0], pos[1]) })
        obj.line.classList.add("opt_reg_line")
    }
}

function make_menu(parent, relto, opts) {
    const menu = add_div(parent, "hmenu")
    const rect = relto.getBoundingClientRect()
    menu.style.top = rect.top + rect.height + "px"
    menu.style.left = rect.left + "px"
    const dismiss_func = function() {
        parent.removeChild(menu)
        document.removeEventListener("click", dismiss_func);
    }
    document.addEventListener("click", dismiss_func)
    for(let opt of opts) {
        const e = add_elem(menu, "label", "hmenu_elem")
        e.innerText = opt.text
        if (opt.for_elem_id !== undefined)
            e.setAttribute("for", opt.for_elem_id)
        if (opt.child !== undefined)
            e.appendChild(opt.child)
        if (opt.func !== undefined)
            e.addEventListener("click", opt.func)
    }
    return menu
}


var added_file_inputs = false

function triggerHamMenu(e)
{
    e.stopPropagation()
    const surv_file_elem = add_elem(hamburgBtn, "input", "hidden")
    surv_file_elem.type = "file"
    surv_file_elem.addEventListener("change", function() { 
        load_zip_survivors(surv_file_elem).catch(function(err) { console.error(err) })
    })

    const zomb_file_elem = add_elem(hamburgBtn, "input", "hidden")
    zomb_file_elem.type = "file"
    zomb_file_elem.addEventListener("change", function() { 
        load_zip_zombies(zomb_file_elem).catch(function(err) { console.error(err) })
    })


    const menu = make_menu(body, hamburgBtn, [ {text:"Load Survivors Zip", child:surv_file_elem},
                            {text:"Load Zombies Zip", child:zomb_file_elem },
                          //  {text:"Reset to Demo Survivors", func:function() {}},
                            {text:"About", func:function() { triggerAbout(true) }},
                            {text:"Reset Layout", func: reset_layout },
                            {text:"Flip Players Panel", func: function() { flip_players_panel(null) } },
                            {text:"Options", func: open_options_dlg }
                           ])


}


function changed_alt_opcode_color(v)
{
    j_set_alt_opcode_color(v)
}

var reg_ptrs = {}

function make_reg_ptr(both_name, both_idx)
{
    const obj = {}
    obj.cont_elem = add_div(memory_panel, "reg_ptr_cont")
    obj.text_elem = add_div(obj.cont_elem, "reg_ptr_text")
    obj.text_elem.innerText = both_name

    const count = Object.keys(reg_ptrs).length // TBD this can cause them to be on top of each other
    const start_x = 50;
    const start_y = 30 + count * 40

    const set_pos = (rel_x, rel_y)=>{
        obj.cont_elem.style.left = rel_x + "px"
        obj.cont_elem.style.top = rel_y + "px"
        const mid_x = rel_x + obj.cont_elem.offsetWidth/2
        const mid_y = rel_y + obj.cont_elem.offsetHeight/2
        j_reg_ptr_elem_moved(both_idx, mid_x, mid_y)
    }
    
    set_pos(start_x, start_y)
    
    SLayout.add_move_handlers(obj.cont_elem, (dx, dy, pageX, pageY)=>{
        const rel_x = obj.cont_elem.offsetLeft + dx
        const rel_y = obj.cont_elem.offsetTop + dy
        set_pos(rel_x, rel_y)
    })

    return obj
}

var g_reg_ptrs_enabled = false
function changed_reg_in_mem(v)
{
    g_reg_ptrs_enabled = v
    const disp = v ? "initial":"none"
    for(let name in reg_ptrs)
        reg_ptrs[name].cont_elem.style.display = disp

    j_changed_reg_in_mem(v)
}

function enable_reg_ptr(v, seg, addr)
{
    const seg_name = reg_name(seg), addr_name = reg_name(addr)
    const both_name = seg_name + ":" + addr_name
    const both_idx = addr | (seg << 8)
    j_reg_ptr_enabled(v, both_idx)
    if (v) {
        if (reg_ptrs[both_name] === undefined)
            reg_ptrs[both_name] = make_reg_ptr(both_name, both_idx)
        reg_ptrs[both_name].cont_elem.style.display = g_reg_ptrs_enabled ? "initial":"none"
    }
    else {
        if (reg_ptrs[both_name] !== undefined) {
            let obj = reg_ptrs[both_name]
            obj.cont_elem.parentElement.removeChild(obj.cont_elem)
            delete reg_ptrs[both_name]
        }
    }
}

//-------------------------------- warCanvas wheel zoom -----------------
// https://github.com/jackmoore/wheelzoom/blob/master/wheelzoom.js

var width;
var height;
var bgWidth;
var bgHeight;
var bgPosX;
var bgPosY;
var previousEvent = null;
var downEvent = null
var settings = {
    zoom: 0.10,
    maxZoom: false,
    initialZoom: 1,
};
var warCtx = null;


function js_updateFromKeyScroll(nx, ny) {
    bgPosX = nx;
    bgPosY = ny;
    updateBgVars();
}

function updateBgVars() {
    //console.log("~~", bgHeight, "  ", bgWidth)
    // part of the zoomed out canvas that is left out
    const cutHeight =  Math.max(bgHeight*DOT_SCALE - (warCanvas.height - MARGIN_TOP - MARGIN_BOTTOM), 0)
    const cutWidth =  Math.max(bgWidth*DOT_SCALE - (warCanvas.width - MARGIN_LEFT - MARGIN_RIGHT), 0)

    if (bgPosX > 0) {
        bgPosX = 0;
    } else if (bgPosX < 0 - cutWidth) {
        bgPosX = 0 - cutWidth;
    }

    if (bgPosY > 0) {
        bgPosY = 0;
    } else if (bgPosY < 0 - cutHeight) {
        bgPosY = 0 - cutHeight;
    }

    var hscale = bgWidth / width;
    var vscale = bgHeight / height
    j_warCanvas_setTransform(hscale, vscale, bgPosX, bgPosY);
}

function zoom_handle_resize(w, h)
{
    //cutHeight = 0 //Math.max(BOARD_HEIGHT*DOT_SIZE - (warCanvas.height - MARGIN_TOP - MARGIN_BOTTOM), 0)
    //cutWidth =  Math.max(bgWidth - (warCanvas.width - MARGIN_LEFT - MARGIN_RIGHT), 0)
}


function updateBgStyle() {
    updateBgVars();
    j_warCanvas_repaint();
}

function wheelzoom_reset() {
    bgWidth = width;
    bgHeight = height;
    bgPosX = bgPosY = 0;
    updateBgStyle();
}

function onWarCanvasWheel(e) {
    var deltaY = 0;

    e.preventDefault();

    if (e.deltaY) { // FireFox 17+ (IE9+, Chrome 31+?)
        deltaY = e.deltaY;
    } else if (e.wheelDelta) {
        deltaY = -e.wheelDelta;
    }

    // As far as I know, there is no good cross-browser way to get the cursor position relative to the event target.
    // We have to calculate the target element's position relative to the document, and subtrack that from the
    // cursor's position relative to the document.
    var rect = warCanvas.getBoundingClientRect();
    var offsetX = e.pageX - rect.left - window.pageXOffset - WC_MARGIN_LEFT;
    var offsetY = e.pageY - rect.top - window.pageYOffset - WC_MARGIN_TOP;

    // Record the offset between the bg edge and cursor:
    var bgCursorX = offsetX - bgPosX;
    var bgCursorY = offsetY - bgPosY;

    // Use the previous offset to get the percent offset between the bg edge and cursor:
    var bgRatioX = bgCursorX/bgWidth;
    var bgRatioY = bgCursorY/bgHeight;

    // Update the bg size:
    if (deltaY < 0) {
        bgWidth += bgWidth*settings.zoom;
        bgHeight += bgHeight*settings.zoom;
    } else {
        bgWidth -= bgWidth*settings.zoom;
        bgHeight -= bgHeight*settings.zoom;
    }
    //console.log("sz: " + bgWidth + "," + bgHeight);

    if (settings.maxZoom) {
        bgWidth = Math.min(width*settings.maxZoom, bgWidth);
        bgHeight = Math.min(height*settings.maxZoom, bgHeight);
    }

    // Take the percent offset and apply it to the new size:
    bgPosX = offsetX - (bgWidth * bgRatioX);
    bgPosY = offsetY - (bgHeight * bgRatioY);

    // Prevent zooming out beyond the starting size
    if (bgWidth <= width || bgHeight <= height) {
        wheelzoom_reset();
    } else {
        updateBgStyle();
    }
}

function drag(e) {
    e.preventDefault();
    bgPosX += e.pageX - previousEvent.pageX;
    bgPosY += e.pageY - previousEvent.pageY;
    previousEvent = e;
    updateBgStyle();
}

function removeDrag(e) {
    var clickDx = Math.abs(e.pageX - downEvent.pageX);
    var clickDy = Math.abs(e.pageY - downEvent.pageY);
    if (clickDx < 6 && clickDy < 6) {
        var rect = warCanvas.getBoundingClientRect();
        var offsetX = e.pageX - rect.left - window.pageXOffset - WC_MARGIN_LEFT;
        var offsetY = e.pageY - rect.top - window.pageYOffset - WC_MARGIN_TOP;
        j_warCanvas_click(offsetX, offsetY);
    }


    document.removeEventListener('mouseup', removeDrag);
    document.removeEventListener('mousemove', drag);
}

function mouseMoveShowCurrent(e) {
    var rect = warCanvas.getBoundingClientRect();
    var offsetX = e.pageX - rect.left - window.pageXOffset - WC_MARGIN_LEFT;
    var offsetY = e.pageY - rect.top - window.pageYOffset - WC_MARGIN_TOP;
    j_warCanvas_showCurrent(offsetX, offsetY);
}

function warCanvasDraggable(e) {
    e.preventDefault();
    previousEvent = e;
    downEvent = e;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', removeDrag);
}

function js_initZoom() {
    warCanvas.addEventListener('wheel', onWarCanvasWheel);
    warCanvas.addEventListener('mousedown', warCanvasDraggable);
    warCanvas.addEventListener('mousemove', mouseMoveShowCurrent);

    warCtx = warCanvas.getContext('2d');
}

var BOARD_WIDTH = 256;
var BOARD_HEIGHT = 65536 / BOARD_WIDTH; 
const MARGIN_TOP = 20, MARGIN_BOTTOM = 45
const MARGIN_LEFT = 20, MARGIN_RIGHT = 45
const DOT_SIZE = 3
var DOT_SCALE = 1

// TBD zoom back makes a jump after enlarge

function js_resetZoom() {
    var initial = 1;
    //var computedStyle = window.getComputedStyle(warCanvas, null);

    width = BOARD_WIDTH*DOT_SIZE; //parseInt(computedStyle.width, 10);
    height = BOARD_HEIGHT*DOT_SIZE; //parseInt(computedStyle.height, 10);
    bgWidth = width * initial;
    bgHeight = height * initial;
    bgPosX = -(bgWidth - width)/2;
    bgPosY = -(bgHeight - height)/2;
    updateBgStyle();
}

function change_board_width(bw)
{
    BOARD_WIDTH = bw
    BOARD_HEIGHT = 65536 / BOARD_WIDTH
    DOT_SCALE = 256/BOARD_WIDTH
    js_resetZoom()
    j_change_board_width(bw)
}


// ------------------------------------------ Competition --------------------------------------------


function gray_out_anim_end() {
    if (competeCheckbox.checked) {
    }
    else {
        gray_out_debugger.style.visibility = "hidden";
        //gray_out_debugger.style.transition = "";
    }
}

const DEFAULT_GRAPH_SZ = [1050, 700];
var g_graphs_panel_sz = DEFAULT_GRAPH_SZ.slice()

function openCompete() {
    if (competeCheckbox.checked) {
        adjust_graph_panel_size()
        graphs_panel.style.opacity = 1;
        gray_out_debugger.style.visibility = "visible";
        gray_out_debugger.style.opacity = 1;
        debugCheckbox.setAttribute("disabled", true);
        debugBtn.setAttribute("disabled", true);
    }
    else {
        graphs_panel.style.width = "0";
        graphs_panel.style.opacity = 0;
        gray_out_debugger.style.opacity = 0;
        debugCheckbox.removeAttribute("disabled");
        debugBtn.removeAttribute("disabled");
        clear_code_buttons_colors()
    }
}

function triggerStartCompete()
 {
    if (competeRunCheckbox.checked)
    {
        if (!j_startCompete()) {
            console.error("cannot start competition")
            competeRunCheckbox.checked = false;
            return
        }

        competeRunBtnIn.style.backgroundImage = "url(red_stop.png)"
        competeRunBtnIn2.innerText = "Stop"
        clear_error()
    }
    else {
        j_stopCompete()

    }
}
function competeFinished()
{
    competeRunBtnIn.style.backgroundImage = ""
    competeRunBtnIn2.innerText = "Start!"
    competeRunCheckbox.checked = false
}

function eventStopProp(e) {
    e.stopPropagation()
}
function triggerAbout(v, ev) {
    if (v) {
        aboutBack.style.display = "inline"
    }
    else {
        aboutBack.style.display = "none"
    }

    aboutWin.onclick = eventStopProp
}

function show_error(msg) {
    console.error(msg)
    error_msg.innerHTML = msg
    error_box.style.display = "initial"
}
function clear_error() {
    error_msg.innerHTML = ""
    error_box.style.display = ""
}

function triggerCopyTable() {
    let text = j_getResultTableText();
    console.log(text)
    navigator.clipboard.writeText(text)
}

function reg_graphs_panel_resize() {

    const stored_w = parseInt(localStorage["graph_panel_width"])
    if (!isNaN(stored_w))
        g_graphs_panel_sz[0] = Math.max(stored_w, 100)
    const stored_h = parseInt(localStorage["graph_panel_height"])
    if (!isNaN(stored_h))
        g_graphs_panel_sz[1] = Math.max(stored_h, 100)
    j_redrawGraphs()
    const gstyle = localStorage["graph_style"]
    if (gstyle !== undefined) {
        graphStyle.value = gstyle
        j_redrawGraphs(graphStyle.value)
    }

    let moving = false
    let startCoord = null
    graphs_resizer.addEventListener("mousedown", (e)=>{
        moving = true;
        startCoord = [graphs_panel.offsetWidth - e.pageX, graphs_panel.offsetHeight - e.pageY]
    })
    document.addEventListener("mouseup", ()=>{
        moving = false;
        startCoord = null
    })
    document.addEventListener('mousemove', function(e) {
        if (!moving)
            return;
        e.preventDefault(); // prevent selection action from messing it up

        g_graphs_panel_sz = [startCoord[0] + e.pageX, startCoord[1] + e.pageY]

        adjust_graph_panel_size()

        localStorage["graph_panel_width"] = g_graphs_panel_sz[0]
        localStorage["graph_panel_height"] = g_graphs_panel_sz[1]

        j_redrawGraphs(graphStyle.value)        
    })    
}

function adjust_graph_panel_size()
{
    graphs_panel.style.width = g_graphs_panel_sz[0] + "px"
    graphs_panel.style.height = g_graphs_panel_sz[1] + "px"
    graphs_canvas.width = g_graphs_panel_sz[0] - 340
    graphs_canvas.height = g_graphs_panel_sz[1] - 105
}

function reset_graph_layout()
{
    g_graphs_panel_sz = DEFAULT_GRAPH_SZ.slice()
    localStorage.removeItem("graph_panel_width")
    localStorage.removeItem("graph_panel_height")
}

function graphStyleChanged()
{
    j_redrawGraphs(graphStyle.value)
    localStorage["graph_style"] = graphStyle.value
}