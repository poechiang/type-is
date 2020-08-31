"use strict"
import extend from 'extend';

import getType from './type.js';


const { prototype: protoObj, getPrototypeOf: protoOf } = Object;

const { toString: fnToStr } = protoObj;

const class2Type = {}

const { hasOwnProperty: ownProp } = class2Type;



/**
 * 生成类型检测正则表达式
 *
 * @param                             {string}
 * @return                            {bool}
 * @author      poe.ch
 * @DateTime    2020-08-29T06:18:03+0800
 * @version     1.0.0
 */
const getTypeRegex = ( type ) => ( new RegExp( `^\\[\\s*object\\s+${type}\\s*\\]$`, 'i' ) )

const propertyOf = ( owner, prop ) => ownProp.call( owner, prop ) && owner[ prop ];


const isArgs = ( value ) => getTypeRegex( 'arguments' ).test( fnToStr.call( value ) );

isArgs.empty = ( value ) => isArgs( value ) && isEmpty( value );

const isArray = Array.isArray || ( ( value ) => getTypeRegex( 'array' ).test( fnToStr.call( value ) ) );

isArray.empty = ( value ) => isArray( value ) && isEmpty( value );
isArray.like = ( value ) => {
    var length = !!value && value.length,
        type = getType( value );

    if ( isFunction( value ) || isWindow( value ) ) {
        return false;
    }

    return type === "array" || length === 0 || getType( length ) === "number" && length > 0 && ( length - 1 ) in value;
}

const isBool = ( value ) => getTypeRegex( 'boolean' ).test( fnToStr.call( value ) );

const isDate = ( value ) => getTypeRegex( 'date' ).test( fnToStr.call( value ) );

const isEmpty = ( value ) => {
    let type = getType( value )

    if ( type === 'array' || type === 'string' || type === 'arguments' ) {
        return value.length <= 0;
    } else if ( type === 'object' ) {
        return Object.entries( value ).length <= 0;
    }
    return !value;
};

const isError = ( value ) => getTypeRegex( 'error' ).test( fnToStr.call( value ) );

const isFunction = ( value ) => getTypeRegex( 'function' ).test( fnToStr.call( value ) );

const isObject = ( value ) => getTypeRegex( 'object' ).test( fnToStr.call( value ) )

isObject.empty = ( value ) => isObject( value ) && isEmpty( value );

isObject.plain = ( value ) => {
    let proto, Ctor;

    if ( !value ) {
        return false;
    }

    proto = protoOf( value );

    if ( !proto ) {
        return true;
    }

    Ctor = propertyOf( proto, "constructor" );
    return typeof Ctor === "function" && ownProp.toString.call( Ctor ) === ownProp.toString.call( Object );

};

const isNull = ( value ) => getTypeRegex( 'null' ).test( fnToStr.call( value ) );

const isNumber = ( value ) => getTypeRegex( 'number' ).test( value );

isNumber.float = ( value ) => {
    if ( !isNumber( value ) ) {
        return false;
    }
    if ( isNumber.infinite( value ) ) {
        return true
    }
    if ( value === 0 ) {
        // 0.0 0. .0 .00
        return /\./.test( value + '' )
    }
    return ~~value !== value;
}

isNumber.infinite = ( value ) => ( value === Infinite || value === -Infinite );

isNumber.int = ( value ) => ( isNumber( value ) && !isNumber.nan( value ) && ( isNumber.infinite( value ) || ( value % 1 ) === 0 ) );

isNumber.even = ( value ) => ( isNumber.infinite( value ) || isNumber.int( value ) && !isNaN( value ) && value % 2 === 0 );

isNumber.odd = ( value ) => ( isNumber.infinite( value ) || isNumber.int( value ) && !isNaN( value ) && value % 2 !== 0 );

isNumber.nan = isNaN;

const isPromise = ( value ) => getTypeRegex( 'promise' ).test( fnToStr.call( value ) );

const isRegExp = ( value ) => getTypeRegex( 'regexp' ).test( fnToStr.call( value ) );

const isString = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) );

isString.empty = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) ) && value.length <= 0;

const isSymbol = ( value ) => getTypeRegex( 'symbol' ).test( fnToStr.call( value ) );

const isUndefined = ( value ) => getTypeRegex( 'undefined' ).test( fnToStr.call( value ) );

const isWindow = ( value ) => !isNull( value ) && obj === obj.window;


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
    fns.number.infinite = ( ) => isNumber.infinite( value );
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

export { isArgs };
export { isArray };
export { isBool };
export { isDate };
export { isEmpty };
export { isError };
export { isFunction };
export { isPromise };
export { isObject };
export { isNull };
export { isNumber };
export { isRegExp };
export { isSymbol };
export { isString };
export { isUndefined };
export { isWindow };
export default is