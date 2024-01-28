"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));
var _chalk = _interopRequireDefault(require("chalk"));
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _utils = require("../utils");
var _prompt = _interopRequireDefault(require("./prompt"));
var _crossSpawn = _interopRequireDefault(require("cross-spawn"));
var _which = _interopRequireDefault(require("which"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const create = async function (program) {
  const {
    args
  } = program;
  const projectName = args[0];
  let config = {
    projectName
  };
  const answers = await (0, _prompt.default)(config);
  config = Object.assign(config, answers);
  const dest = _path.default.join(process.cwd(), config.projectName);

  // is exists ?
  if (_fsExtra.default.existsSync(dest)) {
    (0, _utils.error)(`${_chalk.default.yellow(dest)} 目录已存在，请重新指定项目名称`);
  }
  (0, _utils.info)(`[1/3] 创建新项目到 ${_chalk.default.yellow(dest)}`);
  await _fsExtra.default.mkdir(dest);
  const downloadUrl = answers.tempUrl || `github:nicecoders/templates#${answers.type}`;
  (0, _downloadGitRepo.default)(downloadUrl, dest, {
    clone: true
  }, async function (error) {
    if (error) {
      await _fsExtra.default.remove(dest);
      (0, _utils.warn)('项目初始化失败，请检查仓库地址是否正确');
      process.exit(1);
    }
    process.chdir(dest);
    const hasYarn = _which.default.sync('yarn', {
      nothrow: true
    });
    const pkgTool = hasYarn ? 'yarn' : 'npm';
    (0, _utils.info)(`[2/3] 安装项目依赖`);
    try {
      const io = await (0, _crossSpawn.default)(pkgTool, ['install'], {
        stdio: 'inherit'
      });
      io.on('close', function (code) {
        (0, _utils.info)(`[3/3] 项目初始化成功`);
        process.exit(code);
      });
      io.on('error', function () {
        loading.fail();
        process.exit(1);
      });
    } catch (e) {
      loading.fail();
      console.log(e);
    }
  });
};
var _default = exports.default = create;