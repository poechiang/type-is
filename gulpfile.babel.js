'use strict'

import { parallel, dest, src, series, task, env } from 'gulp' //将gulp插件包含进来
import notify from 'gulp-notify' //在控制台中加入文字描述

import sourceMap from 'gulp-sourcemaps' //处理javascript时生成sourceMap

import browserify from 'gulp-browserify';
import babel from 'gulp-babel' //将ES6转换成ES5
import concat from 'gulp-concat' //这插件是管合并的

import del from 'del'

const SRC_PATH = 'src';
const LIB_PATH = 'src/lib';
const CORE_PATH = 'src/core';
const OUT_PATH = './'
const BUILD_PATH = 'build';

const entry = [ ]

const copyIndex = ( ) => src( `${SRC_PATH}/index.js` ).pipe( dest( OUT_PATH ) );
// const copyIndex = ( ) => src( `${BUILD_PATH}/**/*.js`,{root:BUILD_PATH} ).pipe( dest( `${OUT_PATH}/lib/`) );

const compileScript = ( ) => src( [ `${LIB_PATH}/**/*.js`,
        `${CORE_PATH}/**/*.js`
    ], { base: SRC_PATH } )
    .pipe( babel( ) )
    .pipe( dest( OUT_PATH ) );


export default parallel( copyIndex, compileScript );