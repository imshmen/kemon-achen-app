module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'prettier/prettier': 1,
    'no-template-curly-in-string': 0,
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'dot-notation': 0,
    'no-console': 0,
    'react/require-default-props': 0,
    'no-param-reassign': 0,
    'react/jsx-curly-newline': 0,
    'import/no-unresolved': 0,
    radix: 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
