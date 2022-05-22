module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.mjs']
            }
        }
    },
    ignorePatterns: [
        '*.min.*',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'coverage',
        'public',
        'temp',
        'packages-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vitepress',
        '!.vscode'
    ],
    extends: [
        './standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended'
    ],
    plugins: [
        'unicorn'
    ],
    rules: {
    // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // common
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        curly: ['error', 'multi-or-nest', 'consistent'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        // unicorns
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',
        // Uppercase regex escapes
        'unicorn/escape-case': 'error',
        // Array.isArray instead of instanceof
        'unicorn/no-instanceof-array': 'error',
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'off',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-starts-ends-with': 'error',
        // textContent instead of innerText
        'unicorn/prefer-text-content': 'error',
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',
        // Use new when throwing error
        'unicorn/throw-new-error': 'error'
    }
}
