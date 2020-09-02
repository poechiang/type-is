import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

export default ( value ) => getTypeRegex( 'date' ).test( fnToStr.call( value ) );