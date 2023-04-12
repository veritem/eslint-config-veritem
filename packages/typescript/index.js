// TODO:
// Check if it's inside a typescript project

module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        '@veritem/eslint-config-base'
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
        }
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'off'
    }
}
