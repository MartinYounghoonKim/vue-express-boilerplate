/**
 * @description Express server
 */
const express = require('express');
const path = require('path');

const app = express();

const http = require('http');
const server = http.createServer(app);
/**
 * @description env settings
 */
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'dist');

const fs = require('fs');


if (!isProduction) {
    /**
     * @description webpack HMR module
     */
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../build/dev.server.config.js');
    const compiler = webpack(webpackConfig);

    const middleware = webpackDevMiddleware(compiler, {
        noInfo: true,
        hot: true,
        publicPath: publicPath,
        filename: 'bundle.js',
        quiet: false,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true,
        },
        historyApiFallback: true,
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    }));
    app.get('/', function(req, res) {
        res.send('<body><div id="app"></div><script src=\'dist/bundle.js\'></script></body>');
    });
} else {
    const template = fs.readFileSync('./dist/index.html', 'utf-8');

    app.get('/', function(req, res) {
        res.send(template);
    });
}
app.use(express.static( "dist"));

server.listen(port, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Express server has started on port:${host}:${port}`);
});
