const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBar = require('webpackbar');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/../../dist',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
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
                use: ['style-loader', 'css-loader'],
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
    externals: {
        '@types/react': '@types/react',
        '@types/react-dom': '@types/react-dom',
        react: 'react',
        'react-dom': 'react-dom',
        'styled-components': 'styled-components',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            '__ENVIRONMENT__.ASSET_LOCATION': JSON.stringify('http://assets.myonlinestore.com'),
        }),
        new WebpackBar(),
        new Visualizer({
            filename: '../reports/webpack/statistics-circle.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree.html',
        }),
    ],
};
