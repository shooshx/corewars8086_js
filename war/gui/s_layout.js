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
    constructor(leaves, parent_elem) {
        this.leaves = leaves
        this.leaves_ver = Object.keys(this.leaves).sort().join("|")
        this.base_tree = null
        this.save_callback = null
        this.parent_elem = parent_elem
    }
    set_save_callback(cb) {
        this.save_callback = cb
    }
    call_save() {
        if (this.save_callback !== null)
            this.save_callback(this)
    }

    save() {
        const v = this.base_tree.save()
        v.leaves_ver = this.leaves_ver
        return v
    }
    // override_hidden hidden value in tree overrides the ones in the leaves
    load(in_tree, override_hidden=true) { // recreate the tree
        if (!in_tree.leaves_ver_override && in_tree.leaves_ver !== this.leaves_ver)
            return false // something from a different leaves version, don't load
        link_leaves(this.leaves, in_tree, override_hidden)
        if (this.base_tree !== null && this.base_tree.cont_elem !== undefined) // remove prev
            this.parent_elem.removeChild(this.base_tree.cont_elem)
        in_tree.cont_elem = add_elem(this.parent_elem, "div", "sl_top_div")
        in_tree.parent = null
        this.base_tree = in_tree
        populate_layout(this.base_tree, true, this)
        this.do_visibility_cache()
        this.redraw() // draw all of them after all of them have the sl_resize function
        return true
    }

    redraw() {
        const top_rect = this.base_tree.cont_elem.getBoundingClientRect();
        this.base_tree.sl_resize(top_rect.width, top_rect.height, true)
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

// the leaves are separate since they are not saved
// override_hidden - take hidden from tree and disregard what's in the leaves
function link_leaves(leaves, tree, override_hidden)
{
    // leaves can be either a string referencing the leaves list or an object with name and optional hidden field
    if (typeof(tree) === "string")
        tree = { name: tree }
    if (tree.name !== undefined) {
        const l = leaves[tree.name] // tree is actually a key string
        if (l === undefined)
            throw new Error("unknown leaf " + tree)
        l.name = tree.name

        if (override_hidden) 
            l.hidden = tree.hidden
        else
            l.hidden = l.hidden || tree.hidden
        return l
    }
    tree.child_a = link_leaves(leaves, tree.child_a, override_hidden)
    tree.child_b = link_leaves(leaves, tree.child_b, override_hidden)
    return tree
}

function setup_layout(parent, leaves, tree)
{
    const ctx = new LayoutContext(leaves, parent)
    if (tree !== null)
        ctx.load(tree, false)
    
    window.addEventListener("resize", ()=>{ ctx.redraw() })
    return ctx
}

function populate_layout(tree, is_top, ctx)
{
    const parent = tree.cont_elem
    tree.ctx = ctx
    make_resize_func(tree, is_top)
    tree.set_visible = function(v) {
        tree.hidden = !v
        tree.ctx.do_visibility_cache()
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
        populate_layout(tree.child_a, false, tree.ctx)
        populate_layout(tree.child_b, false, tree.ctx)
        tree.save = function() {
            const v = { split: tree.split, ratio:tree.ratio, child_a: tree.child_a.save(), child_b: tree.child_b.save() }
            if (tree.hidden === true)
                v.hidden = true
            return v
        }
    }
    else
    {
        parent.appendChild(tree.elem) 
        tree.elem.sl_tree = tree
        tree.save = function() {
            const v = { name: tree.name }
            if (tree.hidden === true)
                v.hidden = true
            return v
        }
    }

}

function is_hidden(tree) {
    return (tree.hidden === true || tree._hidden_cache === true)
}

function make_resize_func(tree, is_top) {
    // even call
    tree.sl_resize = function(w, h) {
        tree.rec_resize(w, h)
        tree.ctx.call_save()
    }
    // recursive call
    tree.rec_resize = function(w, h) {
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
                tree.child_b.rec_resize(w, h)
            }
            if (b_hidden) {
                tree.child_a.rec_resize(w, h)
            }
            if (a_hidden || b_hidden)
                return

            // show both
            if (tree.split !== "h") { // will be undefined in the first iter
                const pa_w = w * tree.ratio - GRIP_WIDTH
                tree.child_a.rec_resize(pa_w, h)
                tree.child_b.rec_resize(w - pa_w - GRIP_WIDTH, h)
            }
            else {
                const pa_h = h * tree.ratio - GRIP_WIDTH
                tree.child_a.rec_resize(w, pa_h)
                tree.child_b.rec_resize(w, h - pa_h - GRIP_WIDTH)
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