import fnToStr from '../core/fnToStr';

/**
 * 获取给定参数的类型的字筗串表示
 *
 * @param                             {value}
 * @return                            {string}
 * @author      poe.ch
 * @DateTime    2020-08-29T06:19:18+0800
 * @version     1.0.0
 */
export default (value) => {
  const matches = fnToStr.call(value).match(/^\[\s*object\s*(\w+)\s*\]$/);

  if (!matches) {
    return null;
  }

  return matches[1].toLowerCase();
};
