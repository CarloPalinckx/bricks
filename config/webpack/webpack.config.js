// This config is deprecated since splitting the bundles. The current config can be found in script/bundles.js

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const entry = require('../../scripts/entry');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry,
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    output: {
        /* 
        "filename: [name]index.js" is a workaround to name all output files: 'index.js'. 
        When you just fill in 'index.js' without the prefix '[name]', webpack will throw an error: "Multiple assets emit to the same filename index.js"
        */
        filename: '[name]index.js',
        path: __dirname + '/../../lib',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            'babel-plugin-styled-components',
                            {
                                ssr: true,
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true,
                    configFile: __dirname + '/../typescript/tsconfig.json',
                },
            },
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            {
                test: /^.*(?<!\.color)\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: ['title', 'desc', 'defs', 'style'],
                    removingTagAttrs: ['class'],
                },
            },
            {
                test: /\.color\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    classPrefix: true,
                    removeTags: false,
                },
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'env/',
            minChunks: 2,
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new PeerDepsExternalsPlugin(),
    ],
};
