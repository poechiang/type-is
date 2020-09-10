/* eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */
import extend from 'extend';
import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

import getType from './type';

import isArgs from './isArgs';

import isArray from './isArray';

import isBool from './isBool';

import isDate from './isDate';

import isEmpty from './isEmpty';

import isError from './isError';

import isFunction from './isFunction';

import isObject from './isObject';

import isNumber from './isNumber';

import isPromise from './isPromise';

import isRegExp from './isRegExp';

import isString from './isString';

import isSymbol from './isSymbol';

import isWindow from './isBom';

import { html, xml } from './isDom';

const extendObj = function extendObj(...objects) {
  const [deep, ...list] = objects;
  if (typeof deep === 'object') {
    return extend(this, deep, ...list);
  }
  return extend(deep, this, ...list);
};

if (!Object.prototype.extend) {
  Object.defineProperty(Object.prototype, 'extend', { value: extendObj });
}

if (!Object.extend) {
  Object.defineProperty(Object, 'extend', { value: extendObj });
}
if (!Object.type) {
  Object.defineProperty(Object, 'type', {
    value() {
      return getType(this);
    }
  });
}

if (!Object.prototype.is) {
  Object.defineProperty(Object.prototype, 'is', {
    value(type) {
      return getTypeRegex(type).test(fnToStr.call(this));
    }
  });

  Object.defineProperty(Object.prototype, 'isArgs', {
    value() {
      return isArgs(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isDate', {
    value() {
      return isDate(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEmptyArgs', {
    value() {
      return isArgs.empty(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isArray', {
    value() {
      return isArray(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEmptyArray', {
    value() {
      return isArray.empty(this);
    }
  });

  Object.defineProperty(Object.prototype, 'likeArray', {
    value() {
      return isArray.like(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isBool', {
    value() {
      return isBool(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEmpty', {
    value() {
      return isEmpty(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isError', {
    value() {
      return isError(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isFunction', {
    value() {
      return isFunction(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isObject', {
    value() {
      return isObject(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEmptyObject', {
    value() {
      return isObject.empty(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isPromise', {
    value() {
      return isPromise(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isPlainObject', {
    value() {
      return isObject.plain(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isNumber', {
    value() {
      return isNumber(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isFloatNumber', {
    value() {
      return isNumber.float(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isIntNumber', {
    value() {
      return isNumber.int(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEvenIntNumber', {
    value() {
      return isNumber.even(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isOddIntNumber', {
    value() {
      return isNumber.odd(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isRegExp', {
    value() {
      return isRegExp(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isSymbol', {
    value() {
      return isSymbol(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isString', {
    value() {
      return isString(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isEmptyString', {
    value() {
      return isString.empty(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isWindow', {
    value() {
      return isWindow(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isLocation', {
    value() {
      return isWindow.location(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isHistory', {
    value() {
      return isWindow.history(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isScreen', {
    value() {
      return isWindow.screen(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isNavigator', {
    value() {
      return isWindow.navigator(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLDocument', {
    value() {
      return isWindow.htmlDocument(this);
    }
  });

  Object.defineProperty(Object.prototype, 'isXMLDocument', {
    value() {
      return isWindow.xmlDocument(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isXMLElement', {
    value() {
      return xml(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLElement', {
    value() {
      return html(this);
    }
  });

  const HtmlNameTypeMap = {
    a: 'Anchor',
    abbr: '',
    address: '',
    area: 'Area',
    article: '',
    aside: '',
    audio: 'Audio',
    b: 'Bold',
    base: 'Base',
    basefont: '',
    bdi: '',
    blockquote: '',
    body: 'Body',
    br: 'BR',
    button: 'Button',
    canvas: 'Canvas',
    caption: 'TableCaption',
    center: '',
    cite: '',
    code: '',
    col: 'TableCol',
    colgroup: '',
    command: '',
    datalist: 'DataList',
    dd: 'DD',
    del: 'Mod',
    details: 'Details',
    dfn: '',
    dialog: 'Dialog',
    dir: 'Directory',
    div: 'Div',
    dl: 'DList',
    dt: 'DT',
    em: 'EM',
    embed: 'Embed',
    fieldset: 'fieldset',
    figcaption: '',
    figure: '',
    font: 'Font',
    footer: 'Footer',
    form: 'Form',
    frame: 'Frame',
    frameset: 'Frameset',
    head: 'Head',
    heading: 'Heading',
    header: '',
    hr: 'HR',
    html: 'Html',
    i: 'Italy',
    iframe: 'IFrame',
    img: 'Image',
    input: 'Input',
    ins: '',
    kbd: '',
    keygen: '',
    label: 'Label',
    legend: 'Legend',
    li: 'LI',
    link: 'Link',
    main: '',
    map: 'Map',
    mark: 'Mark',
    marquee: 'Marquee',
    menu: 'Menu',
    menuitem: 'MenuItem', // firefox
    meta: 'Mata',
    meter: 'Meter',
    nav: '',
    noframes: '',
    noscript: '',
    object: 'Object',
    ol: 'OList',
    optgroup: 'OptGroup',
    option: 'Option',
    output: 'Oputput',
    p: 'Paragraph',
    param: 'Param',
    picture: 'Picture',
    pre: 'Pre',
    progress: 'Progress',
    q: 'Quote',
    rp: 'RP',
    rt: 'RT',
    ruby: '',
    samp: '',
    script: 'Script',
    section: '',
    select: 'Select',
    small: '',
    source: 'Source',
    span: 'Span',
    strike: '',
    strong: '',
    style: 'Style',
    sub: '',
    summary: '',
    sup: '',
    table: 'Table',
    tcell: 'TableCell',
    textarea: 'TextArea',
    time: 'Time',
    title: 'Title',
    tr: 'TableRow',
    track: 'Track',
    tt: 'TT',
    u: 'UnderLine',
    ul: 'UList',
    var: '',
    video: 'Video',
    wbr: ''
  };
  for (const [tag, type] of Object.entries(HtmlNameTypeMap)) {
    let typeName = type;
    if (!type) {
      const [first, ...others] = tag;
      typeName = first + others.join('');
    }
    Object.defineProperty(Object.prototype, `isHTML${typeName}Element`, {
      value() {
        return html[tag](this);
      }
    });
  }
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((item) => {
    Object.defineProperty(Object.prototype, `isHTML${item.toUpperCase()}HeadingElement`, {
      value() {
        return html.heading[item](this);
      }
    });
    return 0;
  });

  ['button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel'].map((item) => {
    const [first, ...others] = item;
    const item2 = first.toUpperCase() + others.join('');
    Object.defineProperty(Object.prototype, `isHTML${item2}InputElement`, {
      value() {
        return html.input[item2](this);
      }
    });
    return 0;
  });

  Object.defineProperty(Object.prototype, 'isHTMLTableSectionElement', {
    value() {
      return html.table.section(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableHeadElement', {
    value() {
      return html.table.section.thead(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableBodyElement', {
    value() {
      return html.table.tbody(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableFootElement', {
    value() {
      return html.table.section.tfoot(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableTHCellElement', {
    value() {
      return html.tcell.th(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableTDCellElement', {
    value() {
      return html.tcell.td(this);
    }
  });
}
