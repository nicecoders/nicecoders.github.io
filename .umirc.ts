import { defineConfig } from 'dumi';

const NODE_ENV = process.env.NODE_ENV

export default defineConfig({
  title: 'nicecode',
  favicon: 'https://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.ico',
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
  headScripts: [
    `
    <!-- GrowingIO Analytics code version 2.1 -->
    <!-- Copyright 2015-2018 GrowingIO, Inc. More info available at http://www.growingio.com -->
    
    !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio");
      gio('init','8018ec4a95a9f64b', {});
    
    //custom page code begin here
    
    //custom page code end here
    
    gio('send');
    
    <!-- End GrowingIO Analytics code version: 2.1 -->
    `
  ],
  resolve: {
    includes: [
      'docs',
      'packages/tools/src',
      'packages/commit/src',
      'packages/commit-lint/src',
      'packages/changelog/src',
      'packages/css/src',
      'packages/player/src'
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
      path: 'https://github.com/nicecoders',
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
