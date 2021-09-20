const {
    promisify
} = require('util');

const figlet = promisify(require('figlet'));

const clear = require('clear');

const chalk = require('chalk');

const log = content => console.log(chalk.red(content));

const {
    clone
} = require('./download');

const {open}=require('open');

// 解决windows兼容性问题
// const syncSpawn=(...args)=>{
//     const options=args[args.length-1];

//     if(process.platform==='win32'){
//         options.shell=true;
//     }
// }

const spawn = async (...args) => {

    const {
        spawn
    } = require('child_process');

    return new Promise(resolve => {
         const proc=spawn(...args);
        // 输出流子进程合并到主进程
        proc.stdout.pipe(process.stdout);
        const ret=[];
        proc.stdout.on('data',data=>{
            ret.push(data);
        })
        proc.stderr.pipe(process.stderr);

        proc.on('close',()=>{
            resolve(Buffer.concat(ret).toString());
        })
    })
}

module.exports = async name => {
    // 欢迎界面
    clear();
    const data = await figlet('TapTaq Cli welcome');
    log(data);


    // 创建项目模板
    log(`创建项目${name}`)
    // await clone('github:taptaq/sendFile', name);

    // 下载依赖
    log(`安装依赖中...`);
    // window系统中为npm.cmd
    await spawn(process.platform ==="win32" ?"npm.cmd" :"npm", ['install'],{cwd:`./${name}`});
    log(chalk.blue(`
        安装完成
        To get start
        ===================
            cd ${name}
            npm run serve
        ===================
    `))

    // 自动安装依赖并运行程序
    // open('http://localhost:8085');
    // await spawn('npm',['run','serve'],{cwd:`./${name}`});
}