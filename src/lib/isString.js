import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

const isString = (value) => getTypeRegex('string').test(fnToStr.call(value));

isString.empty = (value) => getTypeRegex('string').test(fnToStr.call(value)) && value.length <= 0;

export default isString;
