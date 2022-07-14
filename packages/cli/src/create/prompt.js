import inquirer from 'inquirer'
import { validator } from '@nicecode/tools'
import { TEMPLIST } from '../constants'

export default (config) => {
  let prompts = []

  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称(demo)',
      default: "demo"
    })
  }

  return inquirer.prompt([
    ...prompts,
    {
      type: 'input',
      name: 'haveTemp',
      message: '是否使用自有模板（yes/no）?',
      default: 'no',
    },
    {
      type: 'input',
      name: 'tempUrl',
      message: '请输入模板地址: ',
      validate: function (input) {
        var done = this.async();
    
        setTimeout(function() {
          if (!validator('url').test(input)) {
            done('链接不正确，需要以Http(s):、或以ssh:开头');
            return;
          }
          done(null, true);
        }, 3000);
      },
      when: answer => answer.haveTemp === 'y' || answer.haveTemp === 'yes' 
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择模板类型',
      when: answer => answer.haveTemp !== 'y' && answer.haveTemp !== 'yes',
      choices: TEMPLIST
    }
  ])
}
