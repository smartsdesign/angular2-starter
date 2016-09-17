'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    entry: [ 
        './node_modules/zone.js/dist/zone.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/materialize-css/dist/js/materialize.min.js',
        './src/main.ts'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loaders: ['html']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!raw-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'raw-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff$/,
                // Inline small woff files and output them below font/.
                // Set mimetype just in case.
                loader: 'url',
                query: {
                  name: 'font/[hash].[ext]',
                  limit: 50000,
                  mimetype: 'application/font-woff'
                }
      }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.webpack.js', '.js', '.ts', '.tsx', '.css', '.scss'],
        alias: {
            materialize: 'materialize-css/dist/js/materialize.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}