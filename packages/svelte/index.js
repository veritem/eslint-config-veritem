module.exports = {
    extends: [
        'plugin:@veritem/eslint-config-ts',
        'plugin:@unocss'
    ],
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {},
    settings: {
        'svelte3/typescript': true
    }
}
