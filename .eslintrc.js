module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 12,
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'prettier',
        'react',
        'react-hooks',
    ],
    rules: {
        'no-void': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    settings: {
        'react': {
            "version": "detect",
        },
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
    root: true,
};

