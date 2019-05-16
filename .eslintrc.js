module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb', '@vue/prettier'],

  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'import/extensions': [
      'error',
      {
        svg: 'ignorePackages',
      },
    ],
  },
};
