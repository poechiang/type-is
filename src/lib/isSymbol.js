import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

export default ( value ) => getTypeRegex( 'symbol' ).test( fnToStr.call( value ) );