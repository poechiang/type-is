import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

export default (value) => getTypeRegex('error').test(fnToStr.call(value));
