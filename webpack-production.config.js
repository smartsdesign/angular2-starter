var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');
var stripLoader = [
    {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: WebpackStrip.loader('console.log')
    }
]

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;