import { defineConfig } from 'dumi';

const NODE_ENV = process.env.NODE_ENV

export default defineConfig({
  title: 'nicecode',
  favicon: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  logo: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  hash: true,
  dynamicImport: {},
  history: {
    type: 'hash',
  },
  mode: 'site',
  publicPath: NODE_ENV === 'production' ? '/nicecode/' : '/',
  alias: {
    // '@ife/pro-components': resolve(
    //   __dirname,
    //   './packages/pro-components/src/index.ts',
    // )
  },
  resolve: {
    includes: [
      'docs',
      'packages/tools/src',
      'packages/commit/src',
      'packages/commit-lint/src',
      'packages/changelog/src',
      'packages/css/src'
    ],
  },
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    // {
    //   title: '规范工具',
    //   children: [
    //     { title: 'changelog', path: '/changelog' },
    //     { title: 'commit', path: '/changelog' },
    //     { title: 'commit-lint', path: '/changelog' },
    //   ],
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/j710328466',
    },
  ],
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: false,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  }
  // more config: https://d.umijs.org/config
});
