import extend from 'extend';

import getType from './lib/type.js';

import isArgs from './lib/isArgs.js';

import isArray from './lib/isArray.js';

import isBool from './lib/isBool.js';

import isDate from './lib/isDate.js';

import isEmpty from './lib/isEmpty.js';

import isError from './lib/isError.js';

import isFunction from './lib/isFunction.js';

import isObject from './lib/isObject.js';

import isNull from './lib/isNull.js';

import isNumber from './lib/isNumber.js';

import isPromise from './lib/isPromise.js';

import isRegExp from './lib/isRegExp.js';

import isString from './lib/isString.js';

import isSymbol from './lib/isSymbol.js';

import isUndefined from './lib/isUndefined.js';

import isWindow from './lib/isWindow.js';

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