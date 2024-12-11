module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2, // Allow up to 2 attributes inline
        multiline: {
          max: 1, // Force stacking for 3+ attributes
          allowFirstLine: false
        }
      }
    ]
  }
};
