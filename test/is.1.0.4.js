require( '../dist/lib/proto.js' );
const { is } = require( '../dist/index.js' );

const
    o = {},
    oo = { x: 1, y: 2, z: 3 },
    aa = [ 1, 2, 3 ],
    a = [ ],
    z = 0,
    n = 4,
    t = true,
    f = false,
    ss = "abc",
    s = "",
    fn = function ( ) {
        console.log( arguments, `arguments's type is Arguments: ${is(arguments).args()} and it is empty: ${is(arguments).args.empty()}` )
    },
    nil = null;

let u;

console.log( `o's type is : ${is.type(o)}` );
console.log( `oo's type is : ${is.type(oo)}` );
console.log( `aa's type is : ${is.type(aa)}` );
console.log( `a's type is : ${is.type(a)}` );
console.log( `z's type is : ${is.type(z)}` );
console.log( `n's type is : ${is.type(n)}` );
console.log( `t's type is : ${is.type(t)}` );
console.log( `f's type is : ${is.type(f)}` );
console.log( `ss's type is : ${is.type(ss)}` );
console.log( `s's type is : ${is.type(s)}` );
console.log( `fn's type is : ${is.type(fn)}` );
console.log( `nil's type is : ${is.type(nil)}` );
console.log( `u's type is : ${is.type(u)}` );


console.log( `o's type is Object: ${o.isObject()} and it is plain: ${o.isPlainObject()} and it is empty: ${o.isEmptyObject()}` );
console.log( `oo's type is Object: ${oo.isObject()} and it is plain: ${oo.isPlainObject()} and it is empty: ${oo.isEmptyObject()}` );
console.log( `aa's type is Array: ${aa.isArray()} and it is empty: ${aa.isEmptyArray()}` );
console.log( `a's type is Array: ${a.isArray()} and it is empty: ${a.isEmptyArray()}` );
console.log( `z's type is Number: ${z.isNumber()} and it is empty: ${z.isEmpty()}` );
console.log( `n's type is Number: ${n.isNumber()} and it is empty: ${n.isEmpty()}` );
console.log( `t's type is Boolean: ${t.isBool()} and it is empty: ${t.isEmpty()}` );
console.log( `f's type is Boolean: ${f.isBool()} and it is empty: ${f.isEmpty()}` );
console.log( `ss's type is String: ${ss.isString()} and it is empty: ${ss.isEmptyString()}` );
console.log( `s's type is String: ${s.isString()} and it is empty: ${s.isEmptyString()}` );
console.log( `fn's type is Function: ${fn.isFunction()} and it is empty: ${fn.isEmpty()}` );


console.log( `o's type is Object: ${is(o).object()} and it is plain: ${is(o).object.plain()} and it is empty: ${is(o).object.empty()}` );
console.log( `oo's type is Object: ${is(oo).object()} and it is plain: ${is(oo).object.plain()} and it is empty: ${is(oo).object.empty()}` );
console.log( `aa's type is Array: ${is(aa).array()} and it is empty: ${is(aa).array.empty()}` );
console.log( `a's type is Array: ${is(a).array()} and it is empty: ${is(a).array.empty()}` );
console.log( `z's type is Number: ${is(z).number()} and it is empty: ${is(z).empty()}` );
console.log( `n's type is Number: ${is(n).number()} and it is empty: ${is(n).empty()}` );
console.log( `t's type is Boolean: ${is(t).bool()} and it is empty: ${is(t).empty()}` );
console.log( `f's type is Boolean: ${is(f).bool()} and it is empty: ${is(f).empty()}` );
console.log( `ss's type is String: ${is(ss).string()} and it is empty: ${is(ss).string.empty()}` );
console.log( `s's type is String: ${is(s).string()} and it is empty: ${is(s).string.empty()}` );
console.log( `fn's type is Function: ${is(fn).function()} and it is empty: ${is(fn).empty()}` );
fn( )
fn( 1, 2, 3 )

console.log( `nil's type is Null: ${is(nil).null()} and it is empty: ${is(nil).empty()}` );
console.log( `u's type is Undefined: ${is(u).undefined()} and it is empty: ${is(u).empty()}` );