require( '../lib/proto.js' );
const { is } = require( '../index.js' );

const
    f0 = 0.,
    f1 = .0,
    f2 = 1.2,
    infinity = Infinity,
    i = 0,
    e = 1,
    o = 4,
    nan = NaN,
    regexp = /[a-z]{4}/,
    symbol = Symbol( 45 );

console.info( is )

console.log( `f0's type is : ${is.type(f0)}`, f0.isFloatNumber( ) );
console.log( `f1's type is : ${is.type(f1)}`, f1.isFloatNumber( ) );
console.log( `f2's type is : ${is.type(f2)}`, f2.isFloatNumber( ) );
console.log( `infinity's type is : ${is.type(infinity)}`, is.number.infinity( infinity ) );
console.log( `i's type is : ${is.type(i)}`, i.isIntNumber( ) );
console.log( `e's type is : ${is.type(e)}`, is.number.odd( e ) );
console.log( `o's type is : ${is.type(o)}`, is.number.even( o ) );
console.log( `nan's type is : ${is.type(nan)}`, is.number.nan( nan ) );
console.log( `regexp's type is : ${is.type(regexp)}`, is.regexp( regexp ) );
console.log( `symbol's type is : ${is.type(symbol)}`, is.symbol( symbol ) );