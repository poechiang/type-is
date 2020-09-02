import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

const isString = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) );

isString.empty = ( value ) => getTypeRegex( 'string' ).test( fnToStr.call( value ) ) && value.length <= 0;

export default isString;