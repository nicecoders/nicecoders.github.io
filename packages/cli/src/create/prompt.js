import inquirer from 'inquirer'

const askProjectName = (config, prompts = []) => {
  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称'
    })
  }
}

const askTemplate = (config, prompts = []) => {
  if (!config.type) {
    prompts.push({
      type: 'list',
      name: 'type',
      message: '请选择模板类型',
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
    })
  }
}

export default (config) => {
  let prompts = []
  askProjectName(config, prompts)
  askTemplate(config, prompts)

  return inquirer.prompt(prompts)
}
