"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.needApproveEnv = exports.makePrmopts = exports.info = exports.getPkgVersion = exports.error = void 0;

var _package = _interopRequireDefault(require("../../package.json"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPkgVersion = function () {
  return _package.default.version;
};

exports.getPkgVersion = getPkgVersion;

const needApproveEnv = function (env) {
  if (!env) {
    console.log(_chalk.default.red('error'));
    process.exit(1);
  }

  return !env.includes('dev');
};

exports.needApproveEnv = needApproveEnv;

const makePrmopts = function (questions, prompts = []) {
  questions.forEach(function (question) {
    return question(prompts);
  });
  return prompts;
};

exports.makePrmopts = makePrmopts;

const error = function (content) {
  console.log('');
  console.log(`🚫 ${_chalk.default.red(content)}`);
  console.log('');
  process.exit(1);
};

exports.error = error;

const warn = function (content) {
  console.log('');
  console.log(`⚠️  ${_chalk.default.yellow(content)}`);
  console.log('');
  process.exit(1);
};

exports.warn = warn;

const info = function (content) {
  console.log('');
  console.log(`⚡️  ${_chalk.default.grey(content)}`);
  console.log('');
};

exports.info = info;