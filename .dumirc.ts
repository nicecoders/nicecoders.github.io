import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'nicecode',
  logo: 'https://i.niupic.com/images/2021/06/07/9krN.png',
  favicons: ['https://i.niupic.com/images/2021/06/07/9krN.png'],
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  themeConfig: {
    name: 'Nice Code',
    socialLinks: {
      github: 'https://github.com/nicecoders',
    },
  },
  exportStatic: {},
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
  scripts: [
    {
      src: 'https://umami.jiangzhixiong.com/script.js',
      'data-website-id': '711d1ded-2a17-48c5-8d8f-5efb02778ec1'
    }
  ],
  alias: {
    '@nicecode/hooks': path.join(__dirname, 'packages/hooks/src'),
    '@nicecode/func': path.join(__dirname, 'packages/func/src'),
    '@nicecode/meta': path.join(__dirname, 'packages/meta/src'),
    '@nicecode/changelog': path.join(__dirname, 'packages/changelog/src'),
    '@nicecode/sensitiveWords': path.join(__dirname, 'packages/sensitiveWords/src'),
    '@nicecode/cli': path.join(__dirname, 'packages/cli/src'),
    '@nicecode/player': path.join(__dirname, 'packages/player/src'),
    '@nicecode/funny': path.join(__dirname, 'packages/funny/src'),
    '@nicecode/spider': path.join(__dirname, 'packages/spider/src'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'func', dir: 'packages/func/src' },
      { type: 'meta', dir: 'packages/meta/src' },
      { type: 'types', dir: 'packages/types/src' },
      { type: 'funny', dir: 'packages/funny/src' },
      { type: 'other', dir: 'packages/cli/src' },
      { type: 'other', subType: 'changelog', dir: 'packages/changelog/src' },
      { type: 'other', subType: 'commit', dir: 'packages/commit/src' },
      { type: 'other', subType: 'commit-lint', dir: 'packages/commit-lint/src' },
      { type: 'other', subType: 'sensitiveWords', dir: 'packages/sensitiveWords/src' },
      { type: 'other', subType: 'snippets', dir: 'packages/snippets/src' },
      { type: 'other', subType: 'player', dir: 'packages/player/src' },
      { type: 'other', subType: 'spider', dir: 'packages/spider/src' },
    ],
  },
  monorepoRedirect: {
    srcDir: ['packages', 'src'],
    peerDeps: true,
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
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
});
