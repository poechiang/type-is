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

const isUndefined = ( value ) => getTypeRegex( 'undefined' ).test( fnToStr.call( value ) );

const isNumber = ( value ) => getTypeRegex( 'number' ).test( value );

isNumber.isNan = isNaN;

const isPromise = ( value ) => getTypeRegex( 'promise' ).test( fnToStr.call( value ) );

const isString = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) );

isString.empty = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) ) && value.length <= 0;



const is = function ( value ) {
    const fns = {
        args: ( ) => isArgs( value ),
        array: ( ) => isArray( value ),
        bool: ( ) => isBool( value ),
        date: ( ) => isDate( value ),
        empty: ( ) => isEmpty( value ),
        function: ( ) => isFunction( value ),
        object: ( ) => isObject( value ),
        null: ( ) => isNull( value ),
        number: ( ) => isNumber( value ),
        string: ( ) => isString( value ),
        undefined: ( ) => isUndefined( value ),
        type: ( ) => getType( value )
    };
    fns.args.empty = ( ) => isArgs.empty( value );
    fns.array.empty = ( ) => isArray.empty( value );
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
    function: isFunction,
    object: isObject,
    null: isNull,
    number: isNumber,
    string: isString,
    undefined: isUndefined,
    type: getType,
} )

export { isArgs };
export { isArray };
export { isBool };
export { isDate };
export { isEmpty };
export { isFunction };
export { isObject };
export { isNull };
export { isNumber };
export { isString };
export { isUndefined };
export default is