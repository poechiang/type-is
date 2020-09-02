import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';
import isEmpty from './isEmpty.js';


const { getPrototypeOf: protoOf } = Object;


const class2Type = {}

const { hasOwnProperty: ownProp } = class2Type;


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
export default isObject;