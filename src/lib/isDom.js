/**
 *  Object
 *    EventTarget
 *      Node
 *        Docment
 *          HTMLDocument
 *        Element
 *          HTMLELEMENT
 */

import window from '../core/window';

const isNode = (node, type = 'Node') => !!window && (node instanceof window[type]);

const isDocument = (dom, type = '') => isNode(dom, `${type}Document`);

const isElement = (dom, type = '') => isNode(dom, `${type}Element`);

const isXMLElement = (dom, type = '') => isElement(dom, `XML${type}`);

const isHTMLElement = (dom, type = '') => isElement(dom, `HTML${type}`);

const getAttributeForDom = (dom, attrName) => {
  if (isHTMLElement(dom)) {
    return dom.getAttribute(attrName);
  }
  return null;
};

const XmlNameTypeMap = {};
for (const [tag, type] of Object.entries(XmlNameTypeMap)) {
  isXMLElement[tag] = (dom) => isXMLElement(dom, type);
}

const HtmlNameTypeMap = {
  a: 'Anchor',
  abbr: '',
  address: '',
  area: 'Area',
  article: '',
  aside: '',
  audio: 'Audio',
  b: '',
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
  dd: '',
  del: 'Mod',
  details: 'Details',
  dfn: '',
  dialog: 'Dialog',
  dir: 'Directory',
  div: 'Div',
  dl: 'DList',
  dt: '',
  em: '',
  embed: 'Embed',
  fieldset: 'fieldset',
  figcaption: '',
  figure: '',
  font: 'Font',
  footer: 'Footer',
  form: 'Form',
  frame: 'Frame',
  frameset: 'Frameset',
  heading: 'Heading',
  head: 'Head',
  header: '',
  hr: 'HR',
  html: 'Html',
  i: '',
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
  rp: '',
  rt: '',
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
  tt: '',
  u: '',
  ul: 'UList',
  var: '',
  video: 'Video',
  wbr: ''
};
for (const [tag, type] of Object.entries(HtmlNameTypeMap)) {
  isHTMLElement[tag] = (dom) => (
    type
      ? isHTMLElement(dom, type)
      : (dom.tagName && dom.tagName.toLowerCase() === dom.toLowerCase()));
}
isHTMLElement.button = (dom) => (isHTMLElement(dom, 'Button') || isHTMLElement.input.button(dom));

isHTMLElement.heading.h1 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h1';
isHTMLElement.heading.h2 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h2';
isHTMLElement.heading.h3 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h3';
isHTMLElement.heading.h4 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h4';
isHTMLElement.heading.h5 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h5';
isHTMLElement.heading.h6 = (dom) => isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h6';

isHTMLElement.input.button = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'button');
isHTMLElement.input.checkbox = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'checkbox');
isHTMLElement.input.color = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'color');
isHTMLElement.input.date = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'date');
isHTMLElement.input.datetime = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'datetime');
isHTMLElement.input.datetimeLocale = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'datetime-locale');
isHTMLElement.input.email = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'email');
isHTMLElement.input.file = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'file');
isHTMLElement.input.hidden = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'hidden');
isHTMLElement.input.image = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'image');
isHTMLElement.input.month = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'month');
isHTMLElement.input.number = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'number');
isHTMLElement.input.password = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'password');
isHTMLElement.input.radio = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'radio');
isHTMLElement.input.range = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'range');
isHTMLElement.input.reset = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'reset');
isHTMLElement.input.search = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'search');
isHTMLElement.input.submit = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'submit');
isHTMLElement.input.tel = (dom) => (isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'tel');

isHTMLElement.table.section = (dom) => (isHTMLElement(dom, 'TableSection'));
isHTMLElement.table.section.thead = (dom) => (isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'thead');
isHTMLElement.table.section.tbody = (dom) => (isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'tbody');
isHTMLElement.table.section.tfoot = (dom) => (isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'tfoot');
isHTMLElement.tcell.th = (dom) => (isHTMLElement(dom, 'TableCell') && dom.tagName.toLowerCase() === 'th');
isHTMLElement.tcell.td = (dom) => (isHTMLElement(dom, 'TableCell') && dom.tagName.toLowerCase() === 'td');

const html = isHTMLElement;
const xml = isXMLElement;

export { html };
export { xml };
export { isDocument };
export default { html, xml };
