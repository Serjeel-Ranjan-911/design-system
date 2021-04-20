module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': ['off'],
    'no-use-before-define': ['off'],
    'import/no-unresolved': 'warn',
  },
  overrides: [
    // Typescript & components linting
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
      ],
      plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
      globals: {
        test: true,
        expect: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        ecmaVersion: 11,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.eslint.json',
          './apps/*/tsconfig.json',
          './libraries/*/tsconfig.json',
          './libraries/*/*/tsconfig.json',
        ],
      },
      settings: {
        react: {
          version: 'detect', // uses latest when "detect"
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['*.ts', '*.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: [
              './libraries/*/tsconfig.json',
              './libraries/*/*/tsconfig.json',
            ],
          },
        },
      },
      rules: {
        'prettier/prettier': ['error'],
        'no-underscore-dangle': ['off'],
        'no-use-before-define': ['off'],
        // Disabled because of Typescript
        'react/prop-types': ['off'],
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        // Disabled because of react not having default export
        'import/default': ['off'],
        'import/no-default-export': ['error'],
        'import/newline-after-import': ['error'],
        'import/prefer-default-export': ['off'],
        'import/namespace': ['error', { allowComputed: true }],
        'react/require-default-props': [
          'warn',
          {
            forbidDefaultForRequired: true,
          },
        ],
        'react/jsx-boolean-value': ['warn'],
        'react/jsx-pascal-case': ['error'],
        'react/no-danger': ['warn'],
        'react/prefer-stateless-function': ['error'],
        'react/no-unused-prop-types': ['error'],
        'react/no-array-index-key': ['error'],
        'react/no-typos': ['error'],
        'react/destructuring-assignment': ['error', 'always'],
        'jsx-a11y/accessible-emoji': ['warn'],
        'jsx-a11y/control-has-associated-label': ['warn'],
        'jsx-a11y/label-has-associated-control': [
          'warn',
          {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'either',
            depth: 25,
          },
        ],
        '@typescript-eslint/restrict-plus-operands': ['warn'],
        '@typescript-eslint/ban-ts-comment': ['warn'],
        // '@typescript-eslint/no-unsafe-member-access': ['warn'],
        // '@typescript-eslint/no-unsafe-call': ['warn'],
        // '@typescript-eslint/no-unsafe-return': ['warn'],
        // '@typescript-eslint/no-unsafe-assignment': ['warn'],
        // '@typescript-eslint/no-explicit-any': ['warn'],
      },
    },
    // Testing linting
    {
      files: ['*.test.ts*'],
      extends: ['plugin:testing-library/react'],
      plugins: ['testing-library'],

      rules: {
        // Remove these rules when linting errors in tests are fixed
        'testing-library/prefer-screen-queries': 'warn',
        'testing-library/no-node-access': 'warn',
        'testing-library/no-container': 'warn',
      },
    },
    // Stories
    {
      files: ['*.stories.ts*'],
      rules: {
        'import/no-default-export': ['off'],
      },
    },
  ],
}
