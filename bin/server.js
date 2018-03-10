/**
 * @description Express server
 */
const express = require('express');
const path = require('path');

/**
 * @description webpack HMR module
 */
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../build/dev.server.config.js');

const app = express();

/**
 * @description env settings
 */
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

const publicPath = path.resolve(__dirname, 'dist');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const http = require('http');
const server = http.createServer(app);

app.get('*', function response(req, res) {
    res.send('index.html')
    res.end();
});

server.listen(port, () => {
    console.log(`Express server has started on port:${port}`);
});
