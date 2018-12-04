const path = require('path');
const webpack = require('webpack');
const entry = require('../../scripts/entry');
const config = {
    "publicPath": "/",
    "publicDir": "dist",
    "publicStaticPath": "/",
    "publicStaticDir": "dist",
  }
  
const configureBabelLoader = (browserlist) => {
  return {
    test: /\.tsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            debug: true,
            modules: false,
            useBuiltIns: true,
            targets: {
              browsers: browserlist,
            },
          }],
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
  };
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
};
const modernConfig = Object.assign({}, baseConfig, {
  output: {
    path: path.resolve(__dirname, '..', config.publicDir),
    publicPath: '/',
    filename: '[name]index.mjs',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader([
        // The last two versions of each browser, excluding versions
        // that don't support <script type="module">.
        'last 2 Chrome versions', 'not Chrome < 60',
        'last 2 Safari versions', 'not Safari < 10.1',
        'last 2 iOS versions', 'not iOS < 10.3',
        'last 2 Firefox versions', 'not Firefox < 54',
        'last 2 Edge versions', 'not Edge < 15',
      ]),
    ],
  },
});
const legacyConfig = Object.assign({}, baseConfig, {
  output: {
    path: path.resolve(__dirname, '..', config.publicDir),
    publicPath: '/',
    filename: '[name]index.es5.js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader([
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ]),
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
    new Visualizer({
        filename: '../reports/webpack/statistics-circle.html',
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: '../reports/webpack/statistics-tree.html',
    }),
    new PeerDepsExternalsPlugin(),
],
});
const createCompiler = (config) => {
  const compiler = webpack(config);
  return () => {
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) return reject(err);
        console.log(stats.toString({colors: true}) + '\n');
        resolve();
      });
    });
  };
};
const compileModernBundle = createCompiler(modernConfig);
const compileLegacyBundle = createCompiler(legacyConfig);
module.exports = async () => {
  await compileModernBundle();
  await compileLegacyBundle();
};