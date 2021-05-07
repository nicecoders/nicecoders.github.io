import { defineConfig } from 'dumi';

const repo = 'pineapple';

export default defineConfig({
  title: repo,
  favicon:
    'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  logo:
    'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/j710328466',
    },
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd'
    ],
  ],
});
