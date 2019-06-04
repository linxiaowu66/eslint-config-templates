module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports'
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'airbnb-base'  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'promise'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: './tsconfig.json'
      }
    }
  },
  env: {
    node: true
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'no-useless-constructor': 0,
    'semi': ['error', 'never'],
    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * 'import/named' temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * 'import/export' temporary disable.
     */
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': ['warn', {
      'allowShortCircuit': true,
      'allowTernary': true
    }], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use 'type'
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    '@typescript-eslint/indent': 'off' // avoid conflict with airbnb
    /**
     * @description rules of eslint-plugin-prettier
     */
    // 'prettier/prettier': [
    //   'error', {
    //     singleQuote: true,
    //     semi: false,
    //     trailingComma: true // be same with airbnb comma-dangle rule
    //   }
    // ]
  },
};
