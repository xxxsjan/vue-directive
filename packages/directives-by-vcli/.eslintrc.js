module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly',
    ElMessage: 'readonly',
    ElNotification: 'readonly',
    ElMessageBox: 'readonly'
  }
};
