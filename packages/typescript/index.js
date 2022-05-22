// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@veritem/eslint-config-base')

module.exports = {
    extends: [
    // "plugin:import/typescript",
        'plugin:@typescript-eslint/recommended',
        '@veritem/eslint-config-base'
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
        }
    },
    overrides: basic.overrides,
    rules: {
        '@typescript-eslint/no-unused-vars': 'off'
    }
}
