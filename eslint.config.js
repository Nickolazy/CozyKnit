import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Formatting rules
      'quotes': ['error', 'double'],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'never'],
      'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true, ignoreRegExpLiterals: true }],

      // Logical rules
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
);
