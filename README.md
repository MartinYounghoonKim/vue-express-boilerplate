[![Build Status](https://travis-ci.org/MartinYounghoonKim/vue-express-boilerplate.svg?branch=master)](https://travis-ci.org/MartinYounghoonKim/vue-express-boilerplate)

# vue-express-boilerplate

> A Vue.js project with Express server

## Requirement
* forever
* nodemon
* Docker compose

## Features
* Express Server@4.16.2
* VueJS@2.5.2
* webpack-dev-middleware@2.0.6
* webpack-dev-server@2.9.1

## Folder directory

```
┌── index.html/
│
├── build/    
│   ├── build.js
│   ├── check-versions.js
│   ├── dev.server.config.js
│   ├── utils.js
│   ├── vue-loader.config.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
│
├── bin/
│   └── server.js
│
├── config/
│
├── logs/    
│   ├── error.log
│   ├── out.log
│   └── forever.log
│
├── src/
│
├── static/
│
└── test/   
```

## Reference
* [Setup Express server with Webpack dev middleware to using HMR]()

## Build Docker image and container
```bash
# build docker image
$ docker-compose build --no-cache

# container up with docker image
$ docker-compose up
```
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
