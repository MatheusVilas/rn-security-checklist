module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [0],
    'import/export': 0,
    'class-methods-use-this': 0,
    '@typescript-eslint/no-loop-func': 0,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/no-shadow': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'react-native/no-inline-styles': 0,
  },
}
