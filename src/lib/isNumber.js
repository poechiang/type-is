import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

const isNumber = ( value ) => getTypeRegex( 'number' ).test( fnToStr.call( value ) );

isNumber.float = ( value ) => {
    if ( !isNumber( value ) ) {
        return false;
    }
    if ( isNumber.infinity( value ) ) {
        return true
    }

    return value !== 0 && ~~value !== value;
}

isNumber.infinity = ( value ) => ( value === Infinity || value === -Infinity );

isNumber.int = ( value ) => ( isNumber( value ) && !isNumber.nan( value ) && ( isNumber.infinity( value ) || ( value % 1 ) === 0 ) );

isNumber.even = ( value ) => ( isNumber.infinity( value ) || isNumber.int( value ) && !isNumber.nan( value ) && ( value % 2 ) === 0 );

isNumber.odd = ( value ) => ( isNumber.infinity( value ) || isNumber.int( value ) && !isNumber.nan( value ) && ( value % 2 ) !== 0 );

isNumber.nan = isNaN;

export default isNumber;