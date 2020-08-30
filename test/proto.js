"use strict"

import '../src/proto.js'

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
        console.log( arguments, `arguments's type is Arguments: ${arguments.isArgs()} and it is empty: ${arguments.isEmptyArgs()}` )
    },
    nil = null;

let u;

console.log( `

	const
		o = {},
		oo = {x:1,y:2,z:3},
	    aa = [ 1, 2, 3 ],
	    a = [ ],
	    z = 0,
	    n = 4,
	    t = true,
	    f = false,
	    ss = "abc",
	    s = "",
	    fn = function ( ) {
	    	console.log(arguments,\`arguments's type is object: \${arguments.is.args()} and it is empty: \${arguments.is.args.empty()}\`)
	    },
	    nil = null;

	let u;

` )


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
fn( )
fn( 1, 2, 3 )
// console.log( `nil's type is Null: ${nil.isNull()} and it is empty: ${nil.isEmpty()}` );
// console.log( `u's type is Undefined: ${u.isUndefined()} and it is empty: ${u.isEmpty()}` );