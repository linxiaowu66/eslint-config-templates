module.exports =  {
  parser:  'babel-eslint',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2015, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // enable JSX
      impliedStrict: true // enable global strict mode
    }
  },
  extends:  [
    'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
    'plugin:promise/recommended',
    // 'prettier', // Use prettier, it can pretty file before executing eslint --fix
    // 'prettier/react' // Use prettier/react to pretty react syntax
  ],
  settings: {
    'import/resolver': { // This config is described in article []()
      webpack: {
        config: './webpack/webpack-common-config.js'
      }
    },
  },
  env: {
    browser: true // enable all browser global variables
  },
  plugins: ['react-hooks', 'promise'], // ['prettier', 'react-hooks']
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    semi: ['error', 'never'],
    'react/jsx-one-expression-per-line': 0,
    /**
     * @description rules of eslint-plugin-prettier
     */
    // prettier/prettier: [
    //   error, {
    //     singleQuote: true,
    //     semi: false
    //   }
    // ]
  },
};
