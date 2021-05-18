module.exports = Object.assign({}, require('./packages/commit-lint'), {
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 100],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', // 类型定义字段
      [
        // '新功能',
        'feat',
        // '修复',
        // 'fix',
        // '性能优化',
        // 'perf',
        // '代码样式',
        // 'style',
        // '文档',
        // 'docs',
        // '测试',
        // 'test',
        // '重构',
        // 'refactor',
        // '构建',
        // 'build',
        // '持续集成',
        // 'ci',
        // 'chore',
        // '撤销',
        // 'revert'
      ]
    ],
    'scope-enum': [2, 'always',
      [ // 影响范围定义字段
        // 'components/Button',
        // '组件/按钮',
      ]
    ]
  }
});
