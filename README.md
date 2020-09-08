# @poech/type-is

JavaScript library for type detection

## Install

npm
```bash
$ npm install @poech/type-is --dev-save
```

yarn
```bash
$ yarn add @poech/type-is -D
```

## Usage


Introduce a global object, which can ensure that the existing type prototype is not polluted:

```js
// >=2.0.0 
// const is = require( '@poech/type-is' );
import is from '@poech/type-is';

let O = {a:1,b:2};
let o = {};

console.log(is(O).object());		// true
console.log(is(O).object.empty())	// false
console.log(is.object(o))			// true
console.log(is.object.empty(o))		// true
```


Or use the following method to personalize the object prototype chain and use it directly through object instances:

```js
// >=2.0.0 
// require( '@poech/type-is/lib/proto' );
import '@poech/type-is/lib/proto.js';

let O = {a:1,b:2};
let o = {};

console.log(O.isObject());			// true
console.log(O.isEmptyObject())		// false
console.log(o.isObject())			// true
console.log(o.isEmptyObject())		// true
```

## API

+ is()
    - args()
        * empty()
    - array()
        * empty()
        * like()
    - bool()
    - date()
    - empty()
    - error()
    - function()
    - html() 
        * a() <kbd>a</kbd>
    	* abbr() <kbd>abbr</kbd>
    	* address() <kbd>address</kbd>
    	* area() <kbd>area</kbd>
    	* article() <kbd>article</kbd>
    	* aside() <kbd>aside</kbd>
    	* audio() <kbd>audio</kbd>
    	* b() <kbd>b</kbd>
    	* base() <kbd>base</kbd>
    	* basefont() <kbd>basefont</kbd>
    	* bdi() <kbd>bdi</kbd>
    	* blockquote() <kbd>blockquote</kbd>
    	* body() <kbd>body</kbd>
    	* br() <kbd>br</kbd>
    	* button() <kbd>button</kbd>
    	* canvas() <kbd>canvas</kbd>
    	* caption() <kbd>caption</kbd>
    	* center() <kbd>center</kbd>
    	* cite() <kbd>cite</kbd>
    	* code() <kbd>code</kbd>
    	* col() <kbd>col</kbd>
    	* colgroup() <kbd>colgroup</kbd>
    	* command() <kbd>command</kbd>
    	* datalist() <kbd>datalist</kbd>
    	* dd() <kbd>dd</kbd>
    	* del() <kbd>del</kbd>
    	* details() <kbd>details</kbd>
    	* dfn() <kbd>dfn</kbd>
    	* dialog() <kbd>dialog</kbd>
    	* dir() <kbd>dir</kbd>
    	* div() <kbd>div</kbd>
    	* dl() <kbd>dl</kbd>
    	* dt() <kbd>dt</kbd>
    	* em() <kbd>em</kbd>
    	* embed() <kbd>embed</kbd>
    	* fieldset() <kbd>fieldset</kbd>
    	* figcaption() <kbd>figcaption</kbd>
    	* figure() <kbd>figure</kbd>
    	* font() <kbd>font</kbd>
    	* footer() <kbd>footer</kbd>
    	* form() <kbd>form</kbd>
    	* frame() <kbd>frame</kbd>
    	* frameset() <kbd>frameset</kbd>
    	* h1() <kbd>h1</kbd>
    	* h2() <kbd>h2</kbd>
    	* h3() <kbd>h3</kbd>
    	* h4() <kbd>h4</kbd>
    	* h5() <kbd>h5</kbd>
    	* h6() <kbd>h6</kbd>
    	* head() <kbd>head</kbd>
    	* heading() <kbd>heading h1 ~ h6</kbd>
            * h1()
            * h2()
            * h3()
            * h4()
            * h5()
            * h6()
    	* header() <kbd>header</kbd>
    	* hr() <kbd>hr</kbd>
    	* html() <kbd>html</kbd>
    	* i() <kbd>i</kbd>
    	* iframe() <kbd>iframe</kbd>
    	* img() <kbd>img</kbd>
    	* input() <kbd>input</kbd>
    		* button() <kbd>input type = button</kbd>
    		* checkbox() <kbd>input type = checkbox</kbd>
    		* color() <kbd>input type = color</kbd>
    		* date() <kbd>input type = date</kbd>
    		* datetime() <kbd>input type = datetime</kbd>
    		* datetimeLocale() <kbd>input type = datetime-locale</kbd>
    		* email() <kbd>input type = email</kbd>
    		* file() <kbd>input type = file</kbd>
    		* hidden() <kbd>input type = hidden</kbd>
    		* image() <kbd>input type = image</kbd>
    		* month() <kbd>input type = month</kbd>
    		* number() <kbd>input type = number</kbd>
    		* password() <kbd>input type = password</kbd>
    		* radio() <kbd>input type = radio</kbd>
    		* range() <kbd>input type = range</kbd>
    		* reset() <kbd>input type = reset</kbd>
    		* search() <kbd>input type = search</kbd>
    		* submit() <kbd>input type = submit</kbd>
    		* tel() <kbd>input type = tel</kbd>
    	* ins() <kbd>ins</kbd>
    	* kbd() <kbd>kbd</kbd>
    	* keygen() <kbd>keygen</kbd>
    	* label() <kbd>label</kbd>
    	* legend() <kbd>legend</kbd>
    	* li() <kbd>li</kbd>
    	* link() <kbd>link</kbd>
    	* main() <kbd>main</kbd>
    	* map() <kbd>map</kbd>
    	* mark() <kbd>mark</kbd>
    	* marquee() <kbd>marquee</kbd>
    	* menu() <kbd>menu</kbd>
    	* menuitem() <kbd>menuitem</kbd> // firefox
    	* meta() <kbd>meta</kbd>
    	* meter() <kbd>meter</kbd>
    	* nav() <kbd>nav</kbd>
    	* noframes() <kbd>noframes</kbd>
    	* noscript() <kbd>noscript</kbd>
    	* object() <kbd>object</kbd>
    	* ol() <kbd>ol</kbd>
    	* optgroup() <kbd>optgroup</kbd>
    	* option() <kbd>option</kbd>
    	* output() <kbd>output</kbd>
    	* p() <kbd>p</kbd>
    	* param() <kbd>param</kbd>
    	* picture() <kbd>picture</kbd>
    	* pre() <kbd>pre</kbd>
    	* progress() <kbd>progress</kbd>
    	* q() <kbd>q</kbd>
    	* rp() <kbd>rp</kbd>
    	* rt() <kbd>rt</kbd>
    	* ruby() <kbd>ruby</kbd>
    	* samp() <kbd>samp</kbd>
    	* script() <kbd>script</kbd>
    	* section() <kbd>section</kbd>
    	* select() <kbd>select</kbd>
    	* small() <kbd>small</kbd>
    	* source() <kbd>source</kbd>
    	* span() <kbd>span</kbd>
    	* strike() <kbd>strike</kbd>
    	* strong() <kbd>strong</kbd>
    	* style() <kbd>style</kbd>
    	* sub() <kbd>sub</kbd>
    	* summary() <kbd>summary</kbd>
    	* sup() <kbd>sup</kbd>
    	* table() <kbd>table</kbd>
			* section() <kbd>table</kbd>
				* thead() <kbd>table</kbd>
				* tbody() <kbd>table</kbd>
				* tfoot() <kbd>table</kbd>
    	* tcell() <kbd>td & th</kbd>
            * th() <kbd>table th</kbd>
            * td() <kbd>table td</kbd>
    	* textarea() <kbd>textarea</kbd>
    	* time() <kbd>time</kbd>
    	* title() <kbd>title</kbd>
    	* tr() <kbd>tr</kbd>
    	* track() <kbd>track</kbd>
    	* tt() <kbd>tt</kbd>
    	* u() <kbd>u</kbd>
    	* ul() <kbd>ul</kbd>
    	* var() <kbd>var</kbd>
    	* video() <kbd>video</kbd>
        * wbr <kbd>wbr</kbd>
    - object()
        * empty()
        * plain()
    - null()
    - number()
    	* float() 
    	* infinite()
    	* int() 
    	* even() 
    	* odd()
        * nan()
    - promise()
    - regexp() 
    - symbol()
    - string()
        * empty()
    - undefined()
    - window()

+ Oject.prototype
    - isArgs()
    - isEmptyArgs()
    - isArray()
    - isEmptyArray()
    - isLikeArray()
    - isBool()
    - isDate()
    - isEmpty()
    - isError()
    - isFunction()
    - isHTMLElement()
    - isHTMLAnchorElement()Element()
    - isHTMLAbbrElement()
    - isHTMLAddressElement()
    - isHTMLAreaElement()
    - isHTMLArticleElement()
    - isHTMLAsideElement()
    - isHTMLAudioElement()
    - isHTMLBoldElement()
    - isHTMLBaseElement()
    - isHTMLBasefontElement()
    - isHTMLBdiElement()
    - isHTMLBlockquoteElement()
    - isHTMLBodyElement()
    - isHTMLBRElement()
    - isHTMLButtonElement()
    - isHTMLCanvasElement()
    - isHTMLTableCaptionElement()
    - isHTMLCenterElement()
    - isHTMLCiteElement()
    - isHTMLCodeElement()
    - isHTMLTableColElement()
    - isHTMLColgroupElement()
    - isHTMLCommandElement()
    - isHTMLDataListElement()
    - isHTMLDDElement()
    - isHTMLModElement()
    - isHTMLDetailsElement()
    - isHTMLDfnElement()
    - isHTMLDialogElement()
    - isHTMLDirectoryElement()
    - isHTMLDivElement()
    - isHTMLDListElement()
    - isHTMLDTElement()
    - isHTMLEMElement()
    - isHTMLEmbedElement()
    - isHTMLFieldsetElement()
    - isHTMLFigcaptionElement()
    - isHTMLFigureElement()
    - isHTMLFontElement()
    - isHTMLFooterElement()
    - isHTMLFormElement()
    - isHTMLFrameElement()
    - isHTMLFramesetElement()
    - isHTMLHeadElement()
    - isHTMLHeadingElement()
    - isHTMLHeadingH1Element()
    - isHTMLHeadingH2Element()
    - isHTMLHeadingH3Element()
    - isHTMLHeadingH4Element()
    - isHTMLHeadingH5Element()
    - isHTMLHeadingH6Element()
    - isHTMLHeaderElement()
    - isHTMLHRElement()
    - isHTMLHtmlElement()
    - isHTMLItalyElement()
    - isHTMLIFrameElement()
    - isHTMLImageElement()
    - isHTMLInputElement()
    - isHTMLButtonInputElement()
    - isHTMLCheckboxInputElement()
    - isHTMLColorInputElement()
    - isHTMLDateInputElement()
    - isHTMLDatetimeInputElement()
    - isHTMLDatetimeLocaleInputElement()
    - isHTMLEmailFileInputElement()
    - isHTMLHiddenInputElement()
    - isHTMLImageInputElement()
    - isHTMLMonthInputElement()
    - isHTMLNumberInputElement()
    - isHTMLPasswordInputElement()
    - isHTMLRadioInputElement()
    - isHTMLRangeInputElement()
    - isHTMLResetInputElement()
    - isHTMLSearchInputElement()
    - isHTMLSubmitInputElement()
    - isHTMLTelInputElement()
    - isHTMLInsElement()
    - isHTMLKbdElement()
    - isHTMLKeygenElement()
    - isHTMLLabelElement()
    - isHTMLLegendElement()
    - isHTMLLIElement()
    - isHTMLLinkElement()
    - isHTMLMainElement()
    - isHTMLMapElement()
    - isHTMLMarkElement()
    - isHTMLMarqueeElement()
    - isHTMLMenuElement()
    - isHTMLMenuItemElement()
    - isHTMLMataElement()
    - isHTMLMeterElement()
    - isHTMLNavElement()
    - isHTMLNoframesElement()
    - isHTMLNoscriptElement()
    - isHTMLObjectElement()
    - isHTMLOListElement()
    - isHTMLOptGroupElement()
    - isHTMLOptionElement()
    - isHTMLOputputElement()
    - isHTMLParagraphElement()
    - isHTMLParamElement()
    - isHTMLPictureElement()
    - isHTMLPreElement()
    - isHTMLProgressElement()
    - isHTMLQuoteElement()
    - isHTMLRPElement()
    - isHTMLRTElement()
    - isHTMLRubyElement()
    - isHTMLSampElement()
    - isHTMLScriptElement()
    - isHTMLSectionElement()
    - isHTMLSelectElement()
    - isHTMLSmallElement()
    - isHTMLSourceElement()
    - isHTMLSpanElement()
    - isHTMLStrikeElement()
    - isHTMLStrongElement()
    - isHTMLStyleElement()
    - isHTMLSubElement()
    - isHTMLSummaryElement()
    - isHTMLSupElement()
    - isHTMLTableElement()
    - isHTMLTableSectionElement()
    - isHTMLTableBodyElement()
    - isHTMLTableFootElement()
    - isHTMLTableHeadElement()
    - isHTMLTableCellElement()
    - isHTMLTableTHCellElement()
    - isHTMLTableTDCellElement()
    - isHTMLTextAreaElement()
    - isHTMLTimeElement()
    - isHTMLTitleElement()
    - isHTMLTableRowElement()
    - isHTMLTrackElement()
    - isHTMLTTElement()
    - isHTMLUnderLineElement()
    - isHTMLUListElement()
    - isHTMLVarElement()
    - isHTMLVideoElement()
    - isHTMLSbrElement()


    - isObject()
    - isEmptyObject()
    - isPlainObject()
    - isNumber()
    - isFloatNumber()
    - isIntNumber()
    - isEvenIntNumber()
    - isOddIntNumber()
    - isPromise()
    - isRegExp()
    - isSymbol()
    - isString()
    - isEmptyString()
    - isWindow()
    - isScreen()
    - isLocation()
    - isHistory()
    - isDocument()
    - isNavigator()


## Logs

### 2.0.1

+ dom & bom
+ Gulp + ES6

### <=1.x (type-is.poe)

deprecated type-is.poe@<=1.1.6: If using 2.x branch, please change the name of the package to @poech/type-is and it's version to at least 2.0.1
