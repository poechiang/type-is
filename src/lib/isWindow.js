import isNull from './isNull';

export default (value) => !isNull(value) && value === value.window;
