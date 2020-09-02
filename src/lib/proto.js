"use strict"
import extend from 'extend';
import getType from './type.js';

import isArgs from './isArgs.js';

import isArray from './isArray.js';

import isBool from './isBool.js';

import isDate from './isDate.js';

import isEmpty from './isEmpty.js';

import isError from './isError.js';

import isFunction from './isFunction.js';

import isObject from './isObject.js';

import isNumber from './isNumber.js';

import isPromise from './isPromise.js';

import isRegExp from './isRegExp.js';

import isString from './isString.js';

import isSymbol from './isSymbol.js';

import isWindow from './isWindow.js';

const extendObj = function ( ...objects ) {
    const [ deep, ...list ] = objects;
    if ( typeof deep === 'object' ) {
        return extend( this, deep, ...list )
    } else {
        return extend( deep, this, ...list )
    }
}

if ( !Object.prototype.extend ) {
    Object.defineProperty( Object.prototype, 'extend', { value: extendObj } )
}

if ( !Object.extend ) {
    Object.defineProperty( Object, 'extend', { value: extendObj } )
}
if ( !Object.type ) {
    Object.defineProperty( Object, 'type', {
        value: function ( ) {
            return getType( this );
        }
    } )
}

if ( !Object.prototype.is ) {
    Object.defineProperty( Object.prototype, 'is', {
        value: function ( type ) {
            return getTypeRegex( type ).test( fnToStr.call( this ) );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArgs', {
        value: function ( ) {
            return isArgs( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isDate', {
        value: function ( ) {
            return isDate( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArgs', {
        value: function ( ) {
            return isArgs.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArray', {
        value: function ( ) {
            return isArray( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArray', {
        value: function ( ) {
            return isArray.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'likeArray', {
        value: function ( ) {
            return isArray.like( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isBool', {
        value: function ( ) {
            return isBool( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmpty', {
        value: function ( ) {
            return isEmpty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isError', {
        value: function ( ) {
            return isError( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isFunction', {
        value: function ( ) {
            return isFunction( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isObject', {
        value: function ( ) {
            return isObject( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyObject', {
        value: function ( ) {
            return isObject.empty( this );
        }
    } )


    Object.defineProperty( Object.prototype, 'isPromise', {
        value: function ( ) {
            return isPromise( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isPlainObject', {
        value: function ( ) {
            return isObject.plain( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isNumber', {
        value: function ( ) {
            return isNumber( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isFloatNumber', {
        value: function ( ) {
            return isNumber.float( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isIntNumber', {
        value: function ( ) {
            return isNumber.int( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEvenIntNumber', {
        value: function ( ) {
            return isNumber.even( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isOddIntNumber', {
        value: function ( ) {
            return isNumber.odd( this );
        }
    } )


    Object.defineProperty( Object.prototype, 'isRegExp', {
        value: function ( ) {
            return isRegExp( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isSymbol', {
        value: function ( ) {
            return isSymbol( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isString', {
        value: function ( ) {
            return isString( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyString', {
        value: function ( ) {
            return isString.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isWindow', {
        value: function ( ) {
            return isWindow( this );
        }
    } )
}