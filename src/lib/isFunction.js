import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

export default (value) => getTypeRegex('function').test(fnToStr.call(value));
