"use strict"

var SLayout = (function(){

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


class LayoutContext {
    constructor(base_tree) {
        this.base_tree = base_tree
        this.elem_map = new Map() // map the input elem: objects to the tree object they are in (from the input)
    }

    do_visibility_cache()
    {
        const rec_is_hidden = (tree)=>{
            if (tree.elem !== undefined)
                return (tree.hidden === true)
            const a_h = rec_is_hidden(tree.child_a)
            const b_h = rec_is_hidden(tree.child_b)
            tree._hidden_cache = a_h && b_h
            return tree._hidden_cache
        }
        rec_is_hidden(this.base_tree)
        this.base_tree.sl_resize() // also does hide
        // we don't know how many levels we need to hide so start from the root
    }
}

function setup_layout(parent, in_tree)
{
    const ctx = new LayoutContext(in_tree)
    in_tree.cont_elem = add_elem(parent, "div", "sl_top_div")
    in_tree.parent = null

    populate_layout(in_tree, true, ctx)
    const resize = ()=>{
        const top_rect = in_tree.cont_elem.getBoundingClientRect();

        in_tree.sl_resize(top_rect.width, top_rect.height, true)
    }
    resize() // resize all of them after all of them have the sl_resize function
    window.addEventListener("resize", resize)
    return ctx
}

function populate_layout(tree, is_top, ctx)
{
    const parent = tree.cont_elem
    tree.sl_resize = make_resize_func(tree, is_top)
    tree.set_visible = function(v) {
        tree.hidden = !v
        ctx.do_visibility_cache()
    }
    if (tree.split !== undefined)
    {
        const is_horz = tree.split === 'h' // means the panels are side to side
        const child_cls = is_horz ? "sl_child_div_h" : "sl_child_div_v"
        tree.child_a.cont_elem = add_elem(parent, "div", child_cls)
        tree.grip = add_elem(parent, 'div', ['sl_splitter', is_horz ? 'sl_h_splitter' : 'sl_v_splitter'])
        tree.child_b.cont_elem = add_elem(parent, "div", child_cls)

        const setup_func = is_horz ? setup_horz_splitter : setup_vert_splitter
        setup_func(tree)

        tree.child_a.parent = tree
        tree.child_b.parent = tree
        populate_layout(tree.child_a, false, ctx)
        populate_layout(tree.child_b, false, ctx)
    }
    else
    {
        parent.appendChild(tree.elem) 
        tree.elem.sl_tree = tree
    }

}

function is_hidden(tree) {
    return (tree.hidden === true || tree._hidden_cache === true)
}

function make_resize_func(tree, is_top) {
    return function(w, h) {
        if (w === undefined) { // from set_visible
            w = tree.last_set_w
            h = tree.last_set_h
        }
        const tw = Math.trunc(w), th = Math.trunc(h)
        if (!is_top) {
            tree.cont_elem.style.width = tw + "px"
            tree.cont_elem.style.height = th + "px"
        }
        if (tree.resize)
            tree.resized(tw, th)

        tree.last_set_w = w
        tree.last_set_h = h
        
        if (tree.split !== undefined  && tree.child_a.sl_resize !== undefined) {
            // one of them hidden?
            const a_hidden = is_hidden(tree.child_a)
            const b_hidden = is_hidden(tree.child_b)
            tree.child_a.cont_elem.classList.toggle("sl_hidden", a_hidden)
            tree.child_b.cont_elem.classList.toggle("sl_hidden", b_hidden)
            tree.grip.classList.toggle("sl_hidden", a_hidden || b_hidden)
            if (a_hidden) {
                tree.child_b.sl_resize(w, h)
            }
            if (b_hidden) {
                tree.child_a.sl_resize(w, h)
            }
            if (a_hidden || b_hidden)
                return

            // show both
            if (tree.split !== "h") { // will be undefined in the first iter
                const pa_w = w * tree.ratio - GRIP_WIDTH
                tree.child_a.sl_resize(pa_w, h)
                tree.child_b.sl_resize(w - pa_w - GRIP_WIDTH, h)
            }
            else {
                const pa_h = h * tree.ratio - GRIP_WIDTH
                tree.child_a.sl_resize(w, pa_h)
                tree.child_b.sl_resize(w, h - pa_h - GRIP_WIDTH)
            }
        }
    }
}

const MIN_PANEL_SIZE = 10
const GRIP_WIDTH = 5;


// side-to-side
function setup_vert_splitter(tree) 
{
    add_move_handlers(tree.grip, (dx, dy, pageX, pageY)=>{
        const rect = tree.cont_elem.getBoundingClientRect();
        const rel_x = pageX - rect.left
        if (rel_x > MIN_PANEL_SIZE && rel_x < tree.last_set_w - MIN_PANEL_SIZE) {
            const p1sz = tree.child_a.last_set_w + dx
            tree.ratio = (p1sz + GRIP_WIDTH) / tree.last_set_w
            tree.sl_resize(tree.last_set_w, tree.last_set_h)
        }
    })
}

function setup_horz_splitter(tree) 
{
    add_move_handlers(tree.grip, (dx, dy, pageX, pageY)=>{
        const rect = tree.cont_elem.getBoundingClientRect();
        const rel_y = pageY - rect.top
        if (rel_y > MIN_PANEL_SIZE && rel_y < tree.last_set_h - MIN_PANEL_SIZE) {
            const p1sz = tree.child_a.last_set_h + dy
            tree.ratio = (p1sz + GRIP_WIDTH) / tree.last_set_h
            tree.sl_resize(tree.last_set_w, tree.last_set_h)
        }
    })
}

// generic function to handle all cases of dragging some UI element
function add_move_handlers(grip, movefunc, downfunc=null) 
{
    let moving = false;
    let prevx, prevy;

    const moveHandler = function(e) {
        if (!moving) 
            return
        e.preventDefault(); // prevent selection action from messing it up
        let dx = e.pageX - prevx, dy = e.pageY - prevy
        if (dx == 0 && dy == 0)
            return
        movefunc(dx, dy, e.pageX, e.pageY)
        prevx = e.pageX; prevy = e.pageY
    }
    const ev = {move:null, up:null}
    const upHandler = function() {
        moving = false;
        document.removeEventListener('mousemove', ev.move)
        document.removeEventListener('mouseup', ev.up)
        ev.move = null
        ev.up = null
    }
    grip.addEventListener('mousedown', function(e) {
        if (e.buttons != 1)
            return
        moving = true;
        if (downfunc)
            downfunc(e.pageX, e.pageY, e)
        prevx = e.pageX; prevy = e.pageY
        document.addEventListener('mousemove', moveHandler);
        ev.move = moveHandler
        document.addEventListener('mouseup', upHandler);
        ev.up = upHandler
    });
}

return { setup:setup_layout }
})();