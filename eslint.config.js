// eslint.config.js — flat config using @nuxt/eslint
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: { max: 3 },
        multiline: { max: 1 }
      }
    ]
  }
});
