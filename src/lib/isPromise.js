import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

export default (value) => getTypeRegex('promise').test(fnToStr.call(value));
