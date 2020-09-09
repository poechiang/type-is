import getType from './type';

export default (value) => {
  const type = getType(value);

  if (type === 'array' || type === 'string' || type === 'arguments') {
    return value.length <= 0;
  }
  if (type === 'object') {
    return Object.entries(value).length <= 0;
  }
  return !value;
};
