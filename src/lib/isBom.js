/**
 * 	Object
 * 		EventTarget
 * 			Node
 * 				Docment
 * 					HTMLDocument
 * 				Element
 * 					HTMLELEMENT
 */

import { isDocument } from '../isDom.js';


if ( window == null ) {
    window = jsdom( ).createWindow( );
    // assume window is a jsdom instance...
    // jsdom includes an incomplete version of XMLHttpRequest
    window.XMLHttpRequest = XMLHttpRequest;
    // trick jQuery into thinking CORS is supported (should be in node-XMLHttpRequest)
    window.XMLHttpRequest.prototype.withCredentials = false;

    if ( window.location == null ) {
        window.location = location;
    }

    if ( window.navigator == null ) {
        window.navigator = navigator;
    }
}

const isXMLDocument = ( dom, type = '' ) => isDocument( dom, `XML${type}` );

const isHTMLDocument = ( dom, type = '' ) => isDocument( dom, `HTML${type}` );



const isWindow = ( value ) => !isNull( value ) && obj === obj.window;
export const isScreen = ( value ) => getTypeRegex( 'screen' ).test( fnToStr.call( value ) )

export const isLocation = ( value ) => getTypeRegex( 'location' ).test( fnToStr.call( value ) )

export const isHistory = ( value ) => getTypeRegex( 'history' ).test( fnToStr.call( value ) )

export const isNavigator = ( value ) => getTypeRegex( 'navigator' ).test( fnToStr.call( value ) )


isWindow.screen = isScreen;
isWindow.location = isLocation;
isWindow.history = isHistory;
isWindow.navigator = isNavigator;
isWindow.htmlDocument = isHTMLDocument;
isWindow.xmlDocument = isXMLDocument;

export default isWindow;