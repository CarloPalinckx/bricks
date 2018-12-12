const webpack = require('webpack');
const entry = require('./entry');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackLegacy = require('../config/webpack/webpack.config');
const merge = require('webpack-merge');
const fs = require('fs');

const configureLoaders = browserlist => {
    return [
        {
            test: /\.tsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            'env',
                            {
                                debug: true,
                                modules: false,
                                useBuiltIns: true,
                                targets: {
                                    browsers: browserlist,
                                },
                            },
                        ],
                    ],
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
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                onlyCompileBundledFiles: true,
                configFile: __dirname + '/../config/typescript/tsconfig.json',
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
    ];
};

const baseConfig = {
    devtool: 'source-map',
    entry,
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
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

const modern = {
    output: {
        filename: '[name]modern.js',
        path: __dirname + '/../lib',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: configureLoaders([
            // The last two versions of each browser, excluding versions
            // that don't support <script type="module">.
            'last 2 Chrome versions',
            'not Chrome < 60',
            'last 2 Safari versions',
            'not Safari < 10.1',
            'last 2 iOS versions',
            'not iOS < 10.3',
            'last 2 Firefox versions',
            'not Firefox < 54',
            'last 2 Edge versions',
            'not Edge < 15',
        ]),
    },
    plugins: [
        new Visualizer({
            filename: '../reports/webpack/statistics-circle-modern.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree-modern.html',
        }),
    ],
};

const legacy = {
    output: {
        filename: '[name]index.js',
        path: __dirname + '/../lib',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: configureLoaders(['> 1%', 'last 2 versions', 'Firefox ESR']),
    },
    plugins: [
        new Visualizer({
            filename: '../reports/webpack/statistics-circle-es5.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree-es5.html',
        }),
    ],
};

const modernConfig = merge.smart(baseConfig, modern);
const legacyConfig = merge.smart(baseConfig, legacy);

const createCompiler = (config, name) => {
    const compiler = webpack(config);
    return () => {
        return new Promise((resolve, reject) => {
            compiler.run((err, stats) => {
                if (err) return reject(err);
                console.log(stats.toString({ colors: true }) + '\n');
                resolve();
            });
        });
    };
};

const compileModernBundle = createCompiler(modernConfig, 'modern');
const compileLegacyBundle = createCompiler(legacyConfig, 'legacy');

module.exports = async () => {
    console.log('Compiling modern bundle...');
    await compileModernBundle();
    console.log('Compiling legacy bundle...');
    await compileLegacyBundle();
};
