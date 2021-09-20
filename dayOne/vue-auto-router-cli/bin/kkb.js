#!/usr/bin/env node

const program =require('commander');

program.version(require('../package').version);   //设定显示对应的版本
program.command('init <name>')
       .description('init project')
       .action(require('../lib/init'));

program.parse(process.argv);

// console.log(process.argv)