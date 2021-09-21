import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import {fileURLToPath} from 'url';
import path from 'path' 

// 动态生成代码模板
export function createPackageTemplate(config) {

    const __dirname=path.dirname(fileURLToPath(import.meta.url));  //在es模块中获取当前目录路径

    // 读取对应的koa基本模板
    const template=fs.readFileSync(path.resolve(__dirname,'./template/package.ejs'),'utf-8');

    const code=ejs.render(template,{
        packageName:config.packageName,
        router:config.router,
        static:config.static
    });

    return prettier.format(code,{
        parser:'json'
    })
}