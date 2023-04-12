module.exports = {
    extends: [
        'plugin:react/recommended',
        '@veritem/eslint-config-ts'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'snakecasejs/whitelist': ['externalPath', 'setNumber', 'useState', 'useMemo', 'useCallBack']
    },
    rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0
    }
}
