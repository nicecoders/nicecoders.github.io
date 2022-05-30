"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _tools = require("@nicecode/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(config) {
  let prompts = [];

  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称'
    });
  }

  return _inquirer.default.prompt([...prompts, {
    type: 'input',
    name: 'haveTemp',
    message: '是否使用自有模板（yes/no）?'
  }, {
    type: 'input',
    name: 'tempUrl',
    message: '请输入模板地址: ',
    validate: function (input) {
      // Declare function as asynchronous, and save the done callback
      var done = this.async(); // Do async stuff

      setTimeout(function () {
        if (!input.test((0, _tools.validator)('url'))) {
          // Pass the return value in the done callback
          done('You need to provide a number');
          return;
        } // Pass the return value in the done callback


        done(null, true);
      }, 1000);
    },
    when: function (answer) {
      return answer.haveTemp === 'y' || answer.haveTemp === 'yes';
    }
  }, {
    type: 'list',
    name: 'type',
    message: '请选择模板类型',
    when: function (answer) {
      return answer.haveTemp !== 'y' && answer.haveTemp !== 'yes';
    },
    choices: [{
      name: 'Vue - 通用',
      value: 'vue'
    }, {
      name: 'React - Mobile',
      value: 'react/mobile'
    }, {
      name: 'React - PC',
      value: 'react/pc'
    }, {
      name: 'Taro',
      value: 'taro'
    }, {
      name: 'Next.js - SSR',
      value: 'next'
    }, {
      name: 'Gulp - 通用',
      value: 'gulp'
    }]
  }]);
};

exports.default = _default;