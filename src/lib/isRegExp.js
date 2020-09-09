import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

export default (value) => getTypeRegex('regexp').test(fnToStr.call(value));
