import inquirer from 'inquirer'

export function select() {
    // 获取到用户对应的选择
    return inquirer.prompt([{
            type: 'input',
            name: 'packageName',
            message: 'set package name'
        },
        {
            type: 'number',
            name: 'port',
            message: 'set port number',
            default: () => 8086
        },
        {
            type: 'checkbox',
            name: 'middleware',
            choices: [{
                    name: 'koaRouter',
                },
                {
                    name: 'koaStatic'
                }
            ]
        }
    ])
}