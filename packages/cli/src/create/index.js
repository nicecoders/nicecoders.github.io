import download from 'download-git-repo'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs-extra'
import { error, warn, info } from '../utils'
import prompts from './prompt'
import spawn from 'cross-spawn'
import which from 'which'

const create = async (program) => {
  const { args } = program
  const projectName = args[0]

  let config = { projectName }
  const answers = await prompts(config)
  config = Object.assign(config, answers)

  const dest = path.join(process.cwd(), config.projectName)



  if (fs.existsSync(dest)) {
    error(`${chalk.yellow(dest)} 目录已存在，请重新指定项目名称`)
  }

  info(`[1/3] 创建新项目到 ${chalk.yellow(dest)}`);

  await fs.mkdir(dest)

  download(`github:nicecoders/templates#${answers.type}`, dest, { clone: true }, async (error) => {
    if (error) {
      await fs.remove(dest)
      warn('项目初始化失败，请检查仓库地址是否正确')
      process.exit(1)
    }

    process.chdir(dest)

    const hasYarn = which.sync('yarn', { nothrow: true })
    const pkgTool = hasYarn ? 'yarn' : 'npm'

    info(`[2/3] 安装项目依赖`)

    try {
      const io = await spawn(pkgTool, ['install'], {
        stdio: 'inherit'
      })

      io.on('close', (code) => {
        info(`[3/3] 项目初始化成功`)
        process.exit(code)
      })

      io.on('error', () => {
        loading.fail()
        process.exit(1)
      })
    } catch (e) {
      loading.fail()
      console.log(e)
    }
  })
}

export default create
