// Webpack is a module bundler, which means it takes modules with dependencies
// and packages them into one bundle file. In this configuration, it also uses
// babel to transpile the files before bundling. Webpack knows which files to include
// by starting with the 'entry' file in the config, and following the es6 import
// statements.
var webpack = require('webpack');
var path = require('path');
var createHistory = require('history').createBrowserHistory

// Build directory is where the bundle file will be placed
// var BUILD_DIR = path.resolve(__dirname, '.');
// App directory is where all of your raw JSX files will be placed
// var APP_DIR = path.resolve(__dirname, 'react-client/src');

var config = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
       query: {
        presets: ['react', 'es2015', 'stage-1']
        }
    }]
  },
  babel: {
    presets: ["es2015", "stage-2"],
 "plugins": [
  ]
},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = config;
