"use strict"
import extend from 'extend';
import getType from './type.js';
import { isArgs, isArray, isBool, isEmpty, isError, isFunction, isObject, isNumber, isString, isWindow } from './is.js';


const extendObj = function ( ...objects ) {
    const [ deep, ...list ] = objects;
    if ( typeof deep === 'object' ) {
        return extend( this, deep, ...list )
    } else {
        return extend( deep, this, ...list )
    }
}

if ( !Object.prototype.extend ) {
    Object.defineProperty( Object.prototype, 'extend', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: extendObj
    } )
}

if ( !Object.extend ) {
    Object.defineProperty( Object, 'extend', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: extendObj
    } )
}

if ( !Object.prototype.is ) {
    Object.defineProperty( Object.prototype, 'is', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( type ) {
            return getTypeRegex( type ).test( fnToStr.call( this ) );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArgs', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isArgs( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArgs', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isArgs.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArray', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isArray( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArray', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isArray.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'likeArray', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isArray.like( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isBool', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isBool( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmpty', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isEmpty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isError', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isError( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isFunction', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isFunction( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isObject', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isObject( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyObject', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isObject.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isPlainObject', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isObject.plain( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isNumber', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isNumber( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isNaN', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isNaN( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isString', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isString( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyString', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isString.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isWindow', {
        enumerable: false,
        configerable: false,
        writable: false,
        value: function ( ) {
            return isWindow( this );
        }
    } )
}