const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: __dirname + "../../../dist",
        library: 'util',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    silent: true,
                    configFileName: './config/typescript/tsconfig.json'
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
};
