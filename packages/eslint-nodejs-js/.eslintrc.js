module.exports = {
  env: {
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      modules: true
    }
  },
  extends: [
    "airbnb-base",
    "plugin:promise/recommended"
  ],
  "plugins": ["promise"],
  rules: {
    "no-console": "error",
    "prefer-arrow-callback": "error"
  }
}
