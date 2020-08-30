import getType from '../src/type.js';

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
        console.log( arguments, `arguments's type is : ${getType(arguments)}` )
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
			console.log( arguments,\`arguments's type is : \${getType(arguments)}\` )
	    },
	    nil = null;

	let u;

` )
console.log( `o's type is : ${getType(o)}` );
console.log( `oo's type is : ${getType(oo)}` );
console.log( `aa's type is : ${getType(aa)}` );
console.log( `a's type is : ${getType(a)}` );
console.log( `z's type is : ${getType(z)}` );
console.log( `n's type is : ${getType(n)}` );
console.log( `t's type is : ${getType(t)}` );
console.log( `f's type is : ${getType(f)}` );
console.log( `ss's type is : ${getType(ss)}` );
console.log( `s's type is : ${getType(s)}` );
console.log( `fn's type is : ${getType(fn)}` );

fn( );
fn( 1, 2, 3 );

console.log( `nil's type is : ${getType(nil)}` );
console.log( `u's type is : ${getType(u)}` );