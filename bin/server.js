const express = require('express');
const path = require('path');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

app.set('port', port);

const publicPath = path.resolve(__dirname, 'dist');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const http = require('http');
const server = http.createServer(app);

server.listen(port);
