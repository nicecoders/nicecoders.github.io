module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  ignorePatterns: ['/docs-dist', '/packages/**'],
  rules: {
    '@typescript-eslint/no-unused-expressions': 0,
  },
};
