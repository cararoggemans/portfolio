module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      'jest/globals': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jest/recommended', // Use Jest recommended rules
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'jest'],

  };
  