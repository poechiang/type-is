"use strict";

var _extend = _interopRequireDefault(require("extend"));

var _fnToStr = _interopRequireDefault(require("../core/fnToStr"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex"));

var _type = _interopRequireDefault(require("./type"));

var _isArgs = _interopRequireDefault(require("./isArgs"));

var _isArray = _interopRequireDefault(require("./isArray"));

var _isBool = _interopRequireDefault(require("./isBool"));

var _isDate = _interopRequireDefault(require("./isDate"));

var _isEmpty = _interopRequireDefault(require("./isEmpty"));

var _isError = _interopRequireDefault(require("./isError"));

var _isFunction = _interopRequireDefault(require("./isFunction"));

var _isObject = _interopRequireDefault(require("./isObject"));

var _isNumber = _interopRequireDefault(require("./isNumber"));

var _isPromise = _interopRequireDefault(require("./isPromise"));

var _isRegExp = _interopRequireDefault(require("./isRegExp"));

var _isString = _interopRequireDefault(require("./isString"));

var _isSymbol = _interopRequireDefault(require("./isSymbol"));

var _isBom = _interopRequireDefault(require("./isBom"));

var _isDom = require("./isDom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var extendObj = function extendObj() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var deep = objects[0],
      list = objects.slice(1);

  if (_typeof(deep) === 'object') {
    return _extend["default"].apply(void 0, [this, deep].concat(_toConsumableArray(list)));
  }

  return _extend["default"].apply(void 0, [deep, this].concat(_toConsumableArray(list)));
};

if (!Object.prototype.extend) {
  Object.defineProperty(Object.prototype, 'extend', {
    value: extendObj
  });
}

if (!Object.extend) {
  Object.defineProperty(Object, 'extend', {
    value: extendObj
  });
}

if (!Object.type) {
  Object.defineProperty(Object, 'type', {
    value: function value() {
      return (0, _type["default"])(this);
    }
  });
}

if (!Object.prototype.is) {
  Object.defineProperty(Object.prototype, 'is', {
    value: function value(type) {
      return (0, _getTypeRegex["default"])(type).test(_fnToStr["default"].call(this));
    }
  });
  Object.defineProperty(Object.prototype, 'isArgs', {
    value: function value() {
      return (0, _isArgs["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isDate', {
    value: function value() {
      return (0, _isDate["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArgs', {
    value: function value() {
      return _isArgs["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isArray', {
    value: function value() {
      return (0, _isArray["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArray', {
    value: function value() {
      return _isArray["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'likeArray', {
    value: function value() {
      return _isArray["default"].like(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isBool', {
    value: function value() {
      return (0, _isBool["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmpty', {
    value: function value() {
      return (0, _isEmpty["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isError', {
    value: function value() {
      return (0, _isError["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFunction', {
    value: function value() {
      return (0, _isFunction["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isObject', {
    value: function value() {
      return (0, _isObject["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyObject', {
    value: function value() {
      return _isObject["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPromise', {
    value: function value() {
      return (0, _isPromise["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPlainObject', {
    value: function value() {
      return _isObject["default"].plain(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isNumber', {
    value: function value() {
      return (0, _isNumber["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFloatNumber', {
    value: function value() {
      return _isNumber["default"]["float"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isIntNumber', {
    value: function value() {
      return _isNumber["default"]["int"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEvenIntNumber', {
    value: function value() {
      return _isNumber["default"].even(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isOddIntNumber', {
    value: function value() {
      return _isNumber["default"].odd(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isRegExp', {
    value: function value() {
      return (0, _isRegExp["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isSymbol', {
    value: function value() {
      return (0, _isSymbol["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isString', {
    value: function value() {
      return (0, _isString["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyString', {
    value: function value() {
      return _isString["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isWindow', {
    value: function value() {
      return (0, _isBom["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isLocation', {
    value: function value() {
      return _isBom["default"].location(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHistory', {
    value: function value() {
      return _isBom["default"].history(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isScreen', {
    value: function value() {
      return _isBom["default"].screen(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isNavigator', {
    value: function value() {
      return _isBom["default"].navigator(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLDocument', {
    value: function value() {
      return _isBom["default"].htmlDocument(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isXMLDocument', {
    value: function value() {
      return _isBom["default"].xmlDocument(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isXMLElement', {
    value: function value() {
      return (0, _isDom.xml)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLElement', {
    value: function value() {
      return (0, _isDom.html)(this);
    }
  });
  var HtmlNameTypeMap = {
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
    menuitem: 'MenuItem',
    // firefox
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
    "var": '',
    video: 'Video',
    wbr: ''
  };

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        tag = _Object$entries$_i[0],
        type = _Object$entries$_i[1];

    var typeName = type;

    if (!type) {
      var _tag = _toArray(tag),
          first = _tag[0],
          others = _tag.slice(1);

      typeName = first + others.join('');
    }

    Object.defineProperty(Object.prototype, "isHTML".concat(typeName, "Element"), {
      value: function value() {
        return _isDom.html[tag](this);
      }
    });
  };

  for (var _i = 0, _Object$entries = Object.entries(HtmlNameTypeMap); _i < _Object$entries.length; _i++) {
    _loop();
  }

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(function (item) {
    Object.defineProperty(Object.prototype, "isHTML".concat(item.toUpperCase(), "HeadingElement"), {
      value: function value() {
        return _isDom.html.heading[item](this);
      }
    });
    return 0;
  });
  ['button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel'].map(function (item) {
    var _item = _toArray(item),
        first = _item[0],
        others = _item.slice(1);

    var item2 = first.toUpperCase() + others.join('');
    Object.defineProperty(Object.prototype, "isHTML".concat(item2, "InputElement"), {
      value: function value() {
        return _isDom.html.input[item2](this);
      }
    });
    return 0;
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableSectionElement', {
    value: function value() {
      return _isDom.html.table.section(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableHeadElement', {
    value: function value() {
      return _isDom.html.table.section.thead(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableBodyElement', {
    value: function value() {
      return _isDom.html.table.tbody(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableFootElement', {
    value: function value() {
      return _isDom.html.table.section.tfoot(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableTHCellElement', {
    value: function value() {
      return _isDom.html.tcell.th(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isHTMLTableTDCellElement', {
    value: function value() {
      return _isDom.html.tcell.td(this);
    }
  });
}