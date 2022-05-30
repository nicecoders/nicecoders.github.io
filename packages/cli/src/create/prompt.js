import inquirer from 'inquirer'
import { validator } from '@nicecode/tools'

export default (config) => {
  let prompts = []

  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称'
    })
  }

  return inquirer.prompt([
    ...prompts,
    {
      type: 'input',
      name: 'haveTemp',
      message: '是否使用自有模板（yes/no）?'
    },
    {
      type: 'input',
      name: 'tempUrl',
      message: '请输入模板地址: ',
      validate: function (input) {
        // Declare function as asynchronous, and save the done callback
        var done = this.async();
    
        // Do async stuff
        setTimeout(function() {
          if (!input.test(validator('url'))) {
            // Pass the return value in the done callback
            done('You need to provide a number');
            return;
          }
          // Pass the return value in the done callback
          done(null, true);
        }, 1000);
      },
      when: answer => answer.haveTemp === 'y' || answer.haveTemp === 'yes' 
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择模板类型',
      when: answer => answer.haveTemp !== 'y' && answer.haveTemp !== 'yes',
      choices: [
        {
          name: 'Vue - 通用',
          value: 'vue'
        },
        {
          name: 'React - Mobile',
          value: 'react/mobile'
        },
        {
          name: 'React - PC',
          value: 'react/pc'
        },
        {
          name: 'Taro',
          value: 'taro'
        },
        {
          name: 'Next.js - SSR',
          value: 'next'
        },
        {
          name: 'Gulp - 通用',
          value: 'gulp'
        }
      ]
    }
  ])
}
