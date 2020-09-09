import { isDocument } from './isDom';
import fnToStr from '../core/fnToStr';
import getTypeRegex from '../core/getTypeRegex';

const isXMLDocument = (dom, type = '') => isDocument(dom, `XML${type}`);

const isHTMLDocument = (dom, type = '') => isDocument(dom, `HTML${type}`);

const isWindow = (value) => value !== null && value === value.window;
export const isScreen = (value) => getTypeRegex('screen').test(fnToStr.call(value));

export const isLocation = (value) => getTypeRegex('location').test(fnToStr.call(value));

export const isHistory = (value) => getTypeRegex('history').test(fnToStr.call(value));

export const isNavigator = (value) => getTypeRegex('navigator').test(fnToStr.call(value));

isWindow.screen = isScreen;
isWindow.location = isLocation;
isWindow.history = isHistory;
isWindow.navigator = isNavigator;
isWindow.htmlDocument = isHTMLDocument;
isWindow.xmlDocument = isXMLDocument;

export default isWindow;
