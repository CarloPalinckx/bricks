const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    return {
        ...config,
        node: {
            fs: 'empty',
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        devServer: {
            quiet: true,
            host: '0.0.0.0',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: __dirname + '/../typescript/tsconfig.json',
                    },
                },
                {
                    test: /^.*(?<!\.color)\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        removingTags: ['title', 'desc', 'defs', 'style'],
                    },
                },
                {
                    test: /\.color\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: false,
                    },
                },
                {
                    test: /\.css$/,
                    use: 'css-loader',
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                },
            ],
        },
        plugins: [...config.plugins, new FriendlyErrorsWebpackPlugin()],
    };
};
