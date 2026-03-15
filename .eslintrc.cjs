module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// For a detailed explanation of each configuration property, visit: https://eslint.org/docs/latest/use/configure/options
// For a detailed explanation of each React-specific rule, visit: https://eslint.org/docs/latest/use/rules/react
// For a detailed explanation of each React Hooks-specific rule, visit: https://eslint.org/docs/latest/use/rules/react-hooks
// For a detailed explanation of each React Refresh-specific rule, visit: https://eslint.org/docs/latest/use/rules/react-refresh
  
