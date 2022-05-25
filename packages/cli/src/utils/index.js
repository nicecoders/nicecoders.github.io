import pkg from '../../package.json'
import chalk from 'chalk'

export const getPkgVersion = () => pkg.version

export const needApproveEnv = (env) => {
  if (!env) {
    console.log(chalk.red('error'))
    process.exit(1)
  }

  return !env.includes('dev')
}

export const makePrmopts = (questions, prompts = []) => {
  questions.forEach((question) => question(prompts))
  return prompts
}

export const error = (content) => {
  console.log('')
  console.log(`🚫 ${chalk.red(content)}`)
  console.log('')
  process.exit(1)
}

export const warn = (content) => {
  console.log('')
  console.log(`⚠️  ${chalk.yellow(content)}`)
  console.log('')
  process.exit(1)
}

export const info = (content) => {
  console.log('')
  console.log(`⚡️  ${chalk.grey(content)}`)
  console.log('')
}
