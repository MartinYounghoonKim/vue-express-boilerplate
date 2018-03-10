const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const mainPath = path.resolve(__dirname, 'app', 'main.js');
// var nodeModulesPath = path.resolve(__dirname, 'node_modules');
// var buildPath = path.resolve(__dirname, 'public', 'build');

//
// var config = {
//     devtool: 'eval',
//     entry: [
//         'webpack/hot/dev-server',
//         'webpack-dev-server/client?http://localhost:8080',
//         mainPath
//     ],
//     output: {
//         path: buildPath,
//         filename: 'bundle.js',
//         publicPath: '/build/'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel',
//                 exclude: [nodeModulesPath]
//             },
//             {
//                 test: /\.css$/,
//                 loader: 'style!css'
//             }
//
//         ]
//     },
//     plugins: [new Webpack.HotModuleReplacementPlugin()]
// };
//
// module.exports = config;

const devWebpackConfig = merge(baseWebpackConfig, {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
});



module.exports = devWebpackConfig;
