import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';
import isEmpty from './isEmpty';

const { getPrototypeOf: protoOf } = Object;

const class2Type = {};

const { hasOwnProperty: ownProp } = class2Type;

const isObject = (value) => getTypeRegex('object').test(fnToStr.call(value));

isObject.empty = (value) => isObject(value) && isEmpty(value);

isObject.plain = (value) => {
  if (!value) {
    return false;
  }

  const proto = protoOf(value);

  if (!proto) {
    return true;
  }

  const Ctor = ownProp.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && ownProp.toString.call(Ctor) === ownProp.toString.call(Object);
};
export default isObject;
