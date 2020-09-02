const extend = require( 'extend' );

const getType = require( './lib/type.js' );

const isArgs = require( './lib/isArgs.js' );

const isArray = require( './lib/isArray.js' );

const isBool = require( './lib/isBool.js' );

const isDate = require( './lib/isDate.js' );

const isEmpty = require( './lib/isEmpty.js' );

const isError = require( './lib/isError.js' );

const isFunction = require( './lib/isFunction.js' );

const isObject = require( './lib/isObject.js' );

const isNull = require( './lib/isNull.js' );

const isNumber = require( './lib/isNumber.js' );

const isPromise = require( './lib/isPromise.js' );

const isRegExp = require( './lib/isRegExp.js' );

const isString = require( './lib/isString.js' );

const isSymbol = require( './lib/isSymbol.js' );

const isUndefined = require( './lib/isUndefined.js' );

const isWindow = require( './lib/isWindow.js' );

const is = function ( value ) {
    const fns = {
        args: ( ) => isArgs( value ),
        array: ( ) => isArray( value ),
        bool: ( ) => isBool( value ),
        date: ( ) => isDate( value ),
        empty: ( ) => isEmpty( value ),
        error: ( ) => isError( value ),
        function: ( ) => isFunction( value ),
        object: ( ) => isObject( value ),
        promise: ( ) => isPromise( value ),
        null: ( ) => isNull( value ),
        number: ( ) => isNumber( value ),
        regexp: ( ) => isRegExp( value ),
        symbol: ( ) => isSymbol( value ),
        string: ( ) => isString( value ),
        undefined: ( ) => isUndefined( value ),
        window: ( ) => isWindow( value ),
        type: ( ) => getType( value )
    };
    fns.args.empty = ( ) => isArgs.empty( value );
    fns.array.empty = ( ) => isArray.empty( value );
    fns.array.like = ( ) => isArray.like( value );
    fns.number.float = ( ) => isNumber.float( value );
    fns.number.infinity = ( ) => isNumber.infinity( value );
    fns.number.int = ( ) => isNumber.int( value );
    fns.number.even = ( ) => isNumber.even( value );
    fns.number.odd = ( ) => isNumber.odd( value );
    fns.number.nan = ( ) => isNumber.nan( value );
    fns.object.empty = ( ) => isObject.empty( value );
    fns.object.plain = ( ) => isObject.plain( value );
    fns.string.empty = ( ) => isString.empty( value );
    return fns;
}




extend( true, is, {
    args: isArgs,
    array: isArray,
    bool: isBool,
    date: isDate,
    empty: isEmpty,
    error: isError,
    function: isFunction,
    object: isObject,
    promise: isPromise,
    null: isNull,
    number: isNumber,
    regexp: isRegExp,
    symbol: isSymbol,
    string: isString,
    undefined: isUndefined,
    widnow: isWindow,
    type: getType,
} )

module.exports = is;