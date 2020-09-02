import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

import isEmpty from './isEmpty.js';

const isArgs = ( value ) => getTypeRegex( 'arguments' ).test( fnToStr.call( value ) );

isArgs.empty = ( value ) => isArgs( value ) && isEmpty( value );


export default isArgs;