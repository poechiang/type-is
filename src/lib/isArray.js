import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';
import getType from './type.js';
import isEmpty from './isEmpty.js';
import isFunction from './isFunction.js';
import isWindow from './isWindow.js';

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

export default isArray;