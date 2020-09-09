import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

export default (value) => getTypeRegex('null').test(fnToStr.call(value));
