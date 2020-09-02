import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

export default ( value ) => getTypeRegex( 'error' ).test( fnToStr.call( value ) );