// eslint.config.js — flat config (ESLint 9+)
import pluginVue from 'eslint-plugin-vue';

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: { max: 2 },
          multiline: { max: 1 }
        }
      ]
    }
  }
];
