module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ], // Enforce prettier style guide
    'import/no-unresolved': 'off', // Disabled for root imports -- @/components
    'import/extensions': 'off', // Disables requiring file exentions
    'import/no-cycle': 'off', //! Dependancy cycle created when using context
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Only warn for console logs left; some may be required or intended
    'react/react-in-jsx-scope': 'off', // React not required to be in scope using nextjs
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'eqeqeq': ['error', 'smart'],
    'unused-imports/no-unused-imports': 'error',
    'no-underscore-dangle': 'off',
    'camelcase': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'radix': 0,
  },
  ignorePatterns: ['jsconfig.json'],
};
