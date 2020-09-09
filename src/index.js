import extend from 'extend';

import getType from './lib/type';

import isArgs from './lib/isArgs';

import isArray from './lib/isArray';

import isBool from './lib/isBool';

import isDate from './lib/isDate';

import isEmpty from './lib/isEmpty';

import isError from './lib/isError';

import isFunction from './lib/isFunction';

import isObject from './lib/isObject';

import isNull from './lib/isNull';

import isNumber from './lib/isNumber';

import isPromise from './lib/isPromise';

import isRegExp from './lib/isRegExp';

import isString from './lib/isString';

import isSymbol from './lib/isSymbol';

import isUndefined from './lib/isUndefined';

import isWindow from './lib/isBom';

import { html, xml } from './lib/isDom';

const isFun = function isFun(value) {
  const fns = {
    args: () => isArgs(value),
    array: () => isArray(value),
    bool: () => isBool(value),
    date: () => isDate(value),
    empty: () => isEmpty(value),
    error: () => isError(value),
    function: () => isFunction(value),
    object: () => isObject(value),
    promise: () => isPromise(value),
    null: () => isNull(value),
    number: () => isNumber(value),
    regexp: () => isRegExp(value),
    symbol: () => isSymbol(value),
    string: () => isString(value),
    undefined: () => isUndefined(value),
    window: () => isWindow(value),
    type: () => getType(value),
    xml: () => xml(value),
    html: () => html(value),
  };
  fns.args.empty = () => isArgs.empty(value);
  fns.array.empty = () => isArray.empty(value);
  fns.array.like = () => isArray.like(value);
  fns.number.float = () => isNumber.float(value);
  fns.number.infinity = () => isNumber.infinity(value);
  fns.number.int = () => isNumber.int(value);
  fns.number.even = () => isNumber.even(value);
  fns.number.odd = () => isNumber.odd(value);
  fns.number.nan = () => isNumber.nan(value);
  fns.object.empty = () => isObject.empty(value);
  fns.object.plain = () => isObject.plain(value);
  fns.string.empty = () => isString.empty(value);
  fns.window.screen = () => isWindow.screen(value);
  fns.window.location = () => isWindow.location(value);
  fns.window.navigator = () => isWindow.navigator(value);
  fns.window.history = () => isWindow.history(value);
  fns.window.document = () => isWindow.document(value);
  fns.xml.document = () => xml.document(value);

  ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'heading', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'td', 'textarea', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'].map((m) => {
    fns.html[m] = () => html[m](value);
    return 0;
  });

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((m) => {
    fns.html.heading[m] = html.heading[m](value);
    return 0;
  });
  ['button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'search', 'submit', 'tel', 'date'].map((m) => {
    fns.html.input[m] = html.input[m](value);
    return 0;
  });

  fns.html.table.section = () => html.table.section(value);
  ['thead', 'tbody', 'tfoot'].map((m) => {
    fns.html.table.section[m] = html.table.section[m](value);
    return 0;
  });
  ['head', 'cell'].map((m) => {
    fns.html.td[m] = html.td[m](value);
    return 0;
  });

  fns.html.document = () => html.document(value);
  return fns;
};

extend(true, isFun, {
  args: isArgs,
  array: isArray,
  bool: isBool,
  date: isDate,
  empty: isEmpty,
  error: isError,
  function: isFunction,
  object: isObject,
  promise: isPromise,
  null: isNull,
  number: isNumber,
  regexp: isRegExp,
  symbol: isSymbol,
  string: isString,
  undefined: isUndefined,
  widnow: isWindow,
  type: getType,
  html,
  xml
});
module.exports = isFun;
