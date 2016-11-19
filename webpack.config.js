/**
 * Created by ruslansalahov on 18/11/2016.
 */

'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './app/index.js',

  output: {
    path: __dirname + '/public',
    filename: 'app.min.js'
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 300
  },

  devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map": null,

  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(NODE_ENV)
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'app'],
    extensions: ['', '.js', 'less']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: __dirname + '/node_modules',
      loaders: ['ng-annotate', 'babel-loader']
    }, {
      test: /\.html$/,
      loaders: ['raw']
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'autoprefixer?browsers=last 2 versions', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer?browsers=last 2 versions']
    }, {
      test: /\.(png|jpg|svg)$/,
      loaders: ['file?name=resources/[name].[ext]']
    }]
  }
};

if(NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      drop_console: true,
      unsafe: true
    })
  );
}