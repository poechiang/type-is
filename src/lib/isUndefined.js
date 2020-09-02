import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

export default ( value ) => getTypeRegex( 'undefined' ).test( fnToStr.call( value ) );