# vue-express-boilerplate

> A Vue.js project with Express server

## Requirement
* forever
* nodemon

## Features
* Express Server
* VueJS

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

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
