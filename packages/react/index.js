module.exports = {
    extends: [
        'plugin:react/recommended',
        '@veritem/eslint-config-ts'
    ],
    settings: {
        react: {
            version: '18.2.0'
        }
    },
    rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0
    }
}
