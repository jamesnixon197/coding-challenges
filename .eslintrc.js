module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0, maxEOF: 0}],
        'no-param-reassign': ['error', {props: false}],
        'object-curly-spacing': ['error'],
    },
};
