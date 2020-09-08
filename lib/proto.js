"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extend = _interopRequireDefault(require("extend"));

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var _type = _interopRequireDefault(require("./type.js"));

var _isArgs = _interopRequireDefault(require("./isArgs.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isBool = _interopRequireDefault(require("./isBool.js"));

var _isDate = _interopRequireDefault(require("./isDate.js"));

var _isEmpty = _interopRequireDefault(require("./isEmpty.js"));

var _isError = _interopRequireDefault(require("./isError.js"));

var _isFunction = _interopRequireDefault(require("./isFunction.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

var _isNumber = _interopRequireDefault(require("./isNumber.js"));

var _isPromise = _interopRequireDefault(require("./isPromise.js"));

var _isRegExp = _interopRequireDefault(require("./isRegExp.js"));

var _isString = _interopRequireDefault(require("./isString.js"));

var _isSymbol = _interopRequireDefault(require("./isSymbol.js"));

var _isBom = _interopRequireDefault(require("./isBom.js"));

var _isDom = require("./isDom.js");

var extendObj = function extendObj() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var deep = objects[0],
      list = objects.slice(1);

  if ((0, _typeof2["default"])(deep) === 'object') {
    return _extend["default"].apply(void 0, [this, deep].concat((0, _toConsumableArray2["default"])(list)));
  } else {
    return _extend["default"].apply(void 0, [deep, this].concat((0, _toConsumableArray2["default"])(list)));
  }
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
  Object.defineProperty(Object.prototype, 'isHTMLDocument', {
    value: function value() {
      return _isDom.html.document(this);
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
    input: 'Image',
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
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        tag = _Object$entries$_i[0],
        type = _Object$entries$_i[1];

    var typeName = type;

    if (!type) {
      var _tag = (0, _toArray2["default"])(tag),
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
        return _isDom.html.heading[tag](this);
      }
    });
  });
  ['button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel'].map(function (item) {
    var _item = item,
        _item2 = (0, _toArray2["default"])(_item),
        first = _item2[0],
        others = _item2.slice(1);

    item = first + others.join('');
    Object.defineProperty(Object.prototype, "isHTML".concat(item, "InputElement"), {
      value: function value() {
        return _isDom.html.input[item](this);
      }
    });
  });
  Object.defineProperty(Object.prototype, "isHTMLTableSectionElement", {
    value: function value() {
      return _isDom.html.table.section(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableHeadElement", {
    value: function value() {
      return _isDom.html.table.section.thead(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableBodyElement", {
    value: function value() {
      return _isDom.html.table.tbody(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableFootElement", {
    value: function value() {
      return _isDom.html.table.section.tfoot(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableCellElement", {
    value: function value() {
      return _isDom.html.tcell(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableTHCellElement", {
    value: function value() {
      return _isDom.html.tcell.th(this);
    }
  });
  Object.defineProperty(Object.prototype, "isHTMLTableTDCellElement", {
    value: function value() {
      return _isDom.html.tcell.td(this);
    }
  });
}