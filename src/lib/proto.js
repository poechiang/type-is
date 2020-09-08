"use strict"
import extend from 'extend';
import fnToStr from '../core/fnToStr.js';
import getTypeRegex from '../core/getTypeRegex.js';

import getType from './type.js';

import isArgs from './isArgs.js';

import isArray from './isArray.js';

import isBool from './isBool.js';

import isDate from './isDate.js';

import isEmpty from './isEmpty.js';

import isError from './isError.js';

import isFunction from './isFunction.js';

import isObject from './isObject.js';

import isNumber from './isNumber.js';

import isPromise from './isPromise.js';

import isRegExp from './isRegExp.js';

import isString from './isString.js';

import isSymbol from './isSymbol.js';

import isWindow from './isBom.js';

import { html, xml } from './isDom.js'

const extendObj = function ( ...objects ) {
    const [ deep, ...list ] = objects;
    if ( typeof deep === 'object' ) {
        return extend( this, deep, ...list )
    } else {
        return extend( deep, this, ...list )
    }
}

if ( !Object.prototype.extend ) {
    Object.defineProperty( Object.prototype, 'extend', { value: extendObj } )
}

if ( !Object.extend ) {
    Object.defineProperty( Object, 'extend', { value: extendObj } )
}
if ( !Object.type ) {
    Object.defineProperty( Object, 'type', {
        value: function ( ) {
            return getType( this );
        }
    } )
}

if ( !Object.prototype.is ) {
    Object.defineProperty( Object.prototype, 'is', {
        value: function ( type ) {
            return getTypeRegex( type ).test( fnToStr.call( this ) );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArgs', {
        value: function ( ) {
            return isArgs( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isDate', {
        value: function ( ) {
            return isDate( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArgs', {
        value: function ( ) {
            return isArgs.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isArray', {
        value: function ( ) {
            return isArray( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyArray', {
        value: function ( ) {
            return isArray.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'likeArray', {
        value: function ( ) {
            return isArray.like( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isBool', {
        value: function ( ) {
            return isBool( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmpty', {
        value: function ( ) {
            return isEmpty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isError', {
        value: function ( ) {
            return isError( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isFunction', {
        value: function ( ) {
            return isFunction( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isObject', {
        value: function ( ) {
            return isObject( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyObject', {
        value: function ( ) {
            return isObject.empty( this );
        }
    } )


    Object.defineProperty( Object.prototype, 'isPromise', {
        value: function ( ) {
            return isPromise( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isPlainObject', {
        value: function ( ) {
            return isObject.plain( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isNumber', {
        value: function ( ) {
            return isNumber( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isFloatNumber', {
        value: function ( ) {
            return isNumber.float( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isIntNumber', {
        value: function ( ) {
            return isNumber.int( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEvenIntNumber', {
        value: function ( ) {
            return isNumber.even( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isOddIntNumber', {
        value: function ( ) {
            return isNumber.odd( this );
        }
    } )


    Object.defineProperty( Object.prototype, 'isRegExp', {
        value: function ( ) {
            return isRegExp( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isSymbol', {
        value: function ( ) {
            return isSymbol( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isString', {
        value: function ( ) {
            return isString( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isEmptyString', {
        value: function ( ) {
            return isString.empty( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isWindow', {
        value: function ( ) {
            return isWindow( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isLocation', {
        value: function ( ) {
            return isWindow.location( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isHistory', {
        value: function ( ) {
            return isWindow.history( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isScreen', {
        value: function ( ) {
            return isWindow.screen( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isNavigator', {
        value: function ( ) {
            return isWindow.navigator( this );
        }
    } )
    Object.defineProperty( Object.prototype, 'isHTMLDocument', {
        value: function ( ) {
            return isWindow.htmlDocument( this );
        }
    } )

    Object.defineProperty( Object.prototype, 'isXMLDocument', {
        value: function ( ) {
            return isWindow.xmlDocument( this )
        }
    } )
    Object.defineProperty( Object.prototype, 'isXMLElement', {
        value: function ( ) {
            return xml( this )
        }
    } )
    Object.defineProperty( Object.prototype, 'isHTMLDocument', {
        value: function ( ) {
            return html.document( this )
        }
    } )
    Object.defineProperty( Object.prototype, 'isHTMLElement', {
        value: function ( ) {
            return html( this )
        }
    } )





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
    for ( const [ tag, type ] of Object.entries( HtmlNameTypeMap ) ) {
        let typeName = type
        if ( !type ) {
            let [ first, ...others ] = tag;
            typeName = first + others.join( '' );

        }
        Object.defineProperty( Object.prototype, `isHTML${typeName}Element`, {
            value: function ( ) {
                return html[ tag ]( this );
            }
        } );
    }
    [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ].map( ( item ) => {

        Object.defineProperty( Object.prototype, `isHTML${item.toUpperCase()}HeadingElement`, {
            value: function ( ) {
                return html.heading[ tag ]( this );
            }
        } );
    } );

    [ 'button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel' ].map( ( item ) => {

        const [ first, ...others ] = item;
        item = first + others.join( '' );
        Object.defineProperty( Object.prototype, `isHTML${item}InputElement`, {
            value: function ( ) {
                return html.input[ item ]( this );
            }
        } );
    } );

    Object.defineProperty( Object.prototype, `isHTMLTableSectionElement`, {
        value: function ( ) {
            return html.table.section( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableHeadElement`, {
        value: function ( ) {
            return html.table.section.thead( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableBodyElement`, {
        value: function ( ) {
            return html.table.tbody( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableFootElement`, {
        value: function ( ) {
            return html.table.section.tfoot( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableCellElement`, {
        value: function ( ) {
            return html.tcell( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableTHCellElement`, {
        value: function ( ) {
            return html.tcell.th( this );
        }
    } );
    Object.defineProperty( Object.prototype, `isHTMLTableTDCellElement`, {
        value: function ( ) {
            return html.tcell.td( this );
        }
    } );









}