import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

import isEmpty from './isEmpty';

const isArgs = (value) => getTypeRegex('arguments').test(fnToStr.call(value));

isArgs.empty = (value) => isArgs(value) && isEmpty(value);

export default isArgs;
