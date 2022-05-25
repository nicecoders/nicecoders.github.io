"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const askProjectName = function (config, prompts = []) {
  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称'
    });
  }
};

const askTemplate = function (config, prompts = []) {
  if (!config.type) {
    prompts.push({
      type: 'list',
      name: 'type',
      message: '请选择模板类型',
      choices: [{
        name: 'Vue - 通用',
        value: 'vue'
      }, {
        name: 'React - Mobile',
        value: 'taro'
      }, {
        name: 'React - PC',
        value: 'react/pc'
      }, {
        name: 'Next.js - SSR',
        value: 'next'
      }, {
        name: 'Gulp - 通用',
        value: 'gulp'
      }]
    });
  }
};

var _default = function _default(config) {
  let prompts = [];
  askProjectName(config, prompts);
  askTemplate(config, prompts);
  return _inquirer.default.prompt(prompts);
};

exports.default = _default;