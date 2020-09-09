import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';
import getType from './type';
import isEmpty from './isEmpty';
import isFunction from './isFunction';
import isWindow from './isWindow';

const isArray = Array.isArray || ((value) => getTypeRegex('array').test(fnToStr.call(value)));

isArray.empty = (value) => isArray(value) && isEmpty(value);
isArray.like = (value) => {
  const length = !!value && value.length;
  const type = getType(value);

  if (isFunction(value) || isWindow(value)) {
    return false;
  }

  return type === 'array' || length === 0 || (getType(length) === 'number' && length > 0 && (length - 1) in value);
};

export default isArray;
