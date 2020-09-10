import { JSDOM } from 'jsdom';

const win = (new JSDOM()).window;

export default typeof window !== 'undefined' ? window : win;
