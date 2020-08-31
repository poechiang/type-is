# type-is.poe

JavaScript library for type detection

## Install

npm
```bash
$ npm install type-is.poe --dev-save
```

yarn
```bash
$ yarn add type-is.poe --D
```

## Usage


Introduce a global object, which can ensure that the existing type prototype is not polluted:

```js
import {is} from 'type-is.poe';


let O = {a:1,b:2};
let o = {};

console.log(is(O).object());		// true
console.log(is(O).object.empty())	// false
console.log(is.object(o))			// true
console.log(is.object.empty(o))		// true
```


Or use the following method to personalize the object prototype chain and use it directly through object instances:

```js
import 'type-is.poe/dist/lib/proto';


let O = {a:1,b:2};
let o = {};

console.log(O.isObject());			// true
console.log(O.isEmptyObject())		// false
console.log(o.isObject())			// true
console.log(o.isEmptyObject())		// true
```

## API

+ is()
    - args()
        * empty()
    - array()
        * empty()
        * like()
    - bool()
    - date()
    - empty()
    - error()
    - function()
    - object()
        * empty()
        * plain()
    - null()
    - number()
    	* float()  <kbd>1.0.7</kbd>
    	* infinite()  <kbd>1.0.7</kbd>
    	* int()  <kbd>1.0.7</kbd>
    	* even()  <kbd>1.0.7</kbd>
    	* odd()  <kbd>1.0.7</kbd>
        * nan()
    - promise()
    - regexp()  <kbd>1.0.7</kbd>
    - symbol()  <kbd>1.0.7</kbd>
    - string()
        * empty()
    - undefined()
    - window()

+ Oject.prototype
    - isArgs()
    - isEmptyArgs()
    - isArray()
    - isEmptyArray()
    - isLikeArray()
    - isBool()
    - isDate()
    - isEmpty()
    - isError()
    - isFunction()
    - isObject()
    - isEmptyObject()
    - isPlainObject()
    - isNumber()
    - isFloatNumber()  <kbd>1.0.7</kbd>
    - isIntNumber()  <kbd>1.0.7</kbd>
    - isEvenIntNumber()  <kbd>1.0.7</kbd>
    - isOddIntNumber()  <kbd>1.0.7</kbd>
    - isPromise()
    - isRegExp()  <kbd>1.0.7</kbd>
    - isSymbol()  <kbd>1.0.7</kbd>
    - isString()
    - isEmptyString()
    - isWindow()




## Test (v1.0.4)


### 1.0.8
```js
require( '../dist/lib/proto.js' );
const { is } = require( '../dist/index.js' );

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
````


### 1.0.4
```js
require('../dist/lib/proto.js');
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
````
