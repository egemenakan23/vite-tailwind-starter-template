module.exports = {
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '**prettier**'],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        // 'vue/script-setup-uses-vars': 'off',
    },
}
