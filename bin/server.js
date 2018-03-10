/**
 * @description Express server
 */
const express = require('express');
const path = require('path');

const app = express();

/**
 * @description env settings
 */
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'dist');

const fs = require('fs');
app.use(express.static( "dist"));

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
        publicPath: '/dist/',
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


const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Express server has started on port:${host}:${port}`);
});


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// const http = require('http');
// const server = http.createServer(app);
//
// app.get('*', function response(req, res) {
//     res.send(webpackConfig)
//     res.end();
// });
//
// server.listen(port, () => {
//     console.log(`Express server has started on port:${port}`);
// });






