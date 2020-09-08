'use strict'

import { parallel, dest, src, series, task, watch } from 'gulp' //将gulp插件包含进来
import notify from 'gulp-notify' //在控制台中加入文字描述

import sourceMap from 'gulp-sourcemaps' //处理javascript时生成sourceMap

import browserify from 'gulp-browserify';
import babel from 'gulp-babel' //将ES6转换成ES5

import del from 'del'

const SRC_PATH = 'src';
const LIB_PATH = 'src/lib';
const OUT_PATH = './'
const BUILD_PATH = 'build';

const entry = [ ]

const compileIndex = ( ) => src( `${SRC_PATH}/index.js` )
    .pipe( sourceMap.init( ) )
    .pipe( browserify( {
        insertGlobals: true,
        debug: true,
        sourceType: "module",
        transform: [ 'babelify' ]
    } ) )
    .pipe( sourceMap.write( './map/' ) )
    .pipe( dest( OUT_PATH ) );;
// const copyIndex = ( ) => src( `${BUILD_PATH}/**/*.js`,{root:BUILD_PATH} ).pipe( dest( `${OUT_PATH}/lib/`) );

const compileLib = ( ) => src( `${LIB_PATH}/**/*.js` )
    .pipe( sourceMap.init( ) )
    .pipe( browserify( {
        insertGlobals: true,
        debug: true,
        transform: [ 'babelify' ]
    } ) )
    .pipe( sourceMap.write( '../map/' ) )
    .pipe( dest( `${OUT_PATH}/lib` ) );

const compileScript = ( ) => src( `${SRC_PATH}/**/*.js` )
    .pipe( sourceMap.init( ) )
    .pipe( babel( ) )
    .pipe( sourceMap.write( '../map/' ) )
    .pipe( dest( `${OUT_PATH}` ) );

const watchFile = ( ) => watch( [ 'src/**/*.js' ] )
// export default series( compileLib, compileIndex );
export default compileScript;