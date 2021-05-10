import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'nicecode',
  favicon: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  logo: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  hash: true,
  mode: 'site',
  alias: {
    // '@ife/pro-components': resolve(
    //   __dirname,
    //   './packages/pro-components/src/index.ts',
    // )
  },
  resolve: {
    includes: ['docs', 'packages/tools/src'],
  },
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/j710328466',
    },
  ],
  // more config: https://d.umijs.org/config
});
