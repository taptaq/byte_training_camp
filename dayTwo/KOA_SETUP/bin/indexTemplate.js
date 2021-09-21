import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import {fileURLToPath} from 'url';
import path from 'path' 

// 动态生成代码模板
export function createIndexTemplate(config) {

    const __dirname=path.dirname(fileURLToPath(import.meta.url));  //在es模块中获取当前目录路径

    // 读取对应的koa基本模板
    const template=fs.readFileSync(path.resolve(__dirname,'./template/index.ejs'),'utf-8');

    const code=ejs.render(template,{
        router:config.router,
        static:config.static,
        port:config.port
    });

    // 返回格式化后的代码
    return prettier.format(code,{
        parser:'babel'
    })
}