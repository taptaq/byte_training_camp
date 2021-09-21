#!/usr/bin/env node

import fs from 'fs';
import execa from 'execa';
import path from 'path';

import {createIndexTemplate} from './indexTemplate.js';
import {createPackageTemplate} from './packageJsonTemplate.js';

import {select} from './select/index.js'

import {createConfig} from './createConfig.js'

// 用户选择的选项
const res=await select();

const inputConfig=createConfig(res);


// 创建文件夹（项目名）
fs.mkdirSync(getRootPath());

// 创建index.js文件
fs.writeFileSync(getRootPath()+'/index.js',createIndexTemplate(inputConfig));

// 创建package.json文件
fs.writeFileSync(getRootPath()+'/package.json',createPackageTemplate(inputConfig));

// 安装依赖（利用execa自动执行yarn命令安装依赖包）
// execa('yarn',{
//     cwd:getRootPath(),
//     stdio:[1,1,1]
// });

// 取得创建项目的根路径
function getRootPath(){
    return path.resolve(process.cwd(),inputConfig.packageName)
}