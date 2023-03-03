module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'security',
    'sonarjs'
    //"standard",
    //"prettier",
  ],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended'
    //"plugin:prettier/recommended",
    //"prettier/@typescript-eslint",
    //"prettier/standard",
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off', { functions: false }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/namespace': ['off'],
    // "@typescript-eslint/indent": ["error", 2],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'functions': 'never'
    }],
    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-parameter-properties': [
      'error',
      { allows: ['readonly', 'private readonly'] }
    ],
    'no-trailing-spaces': ['error', { ignoreComments: true }]
  },
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json'
  },
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  }
}
