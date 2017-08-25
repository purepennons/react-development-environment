module.exports = {
    extends: 'react-app',
    env: {
        browser: true,
        node: true
    },
    plugins: ['react'],
    rules: {
        semi: 0,
        'react/jsx-no-bind': 0,
        'react/prefer-stateless-function': 0,
        'react/no-did-update-set-state': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './config/webpack.config.js'
            }
        }
    }
}
