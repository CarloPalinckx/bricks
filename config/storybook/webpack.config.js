const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (baseConfig, env, config) => {
    config.devServer = {
        quiet: true,
        host: '0.0.0.0',
        stats: {
            chunks: false,
            assets: false,
            modules: false,
            version: false,
            hash: false,
            entrypoints: false,
            builtAt: false,
        },
    };

    config.devtool = 'source-map';

    config.resolve.extensions.push('.ts');
    config.resolve.extensions.push('.tsx');
    config.resolve.extensions.push('.js');
    config.resolve.extensions.push('.jsx');
    config.resolve.extensions.push('.json');
    console.log(config.module);
    // loaders

    config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
            configFile: __dirname + '/../typescript/tsconfig.json',
        },
    });

    config.module.rules.push({
        test: /^.*(?<!\.color)\.svg$/,
        loader: 'svg-inline-loader',
        options: {
            removeTags: true,
            removingTags: ['title', 'desc', 'defs', 'style'],
            removingTagAttrs: ['class'],
        },
    });

    config.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
    });

    // plugins

    config.plugins.push(new FriendlyErrorsWebpackPlugin());

    return config;
};
