module.exports = {
    extends: [
        'plugin:react/recommended',
        '@veritem/eslint-config-ts'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/prop-types': 0
    }
}
