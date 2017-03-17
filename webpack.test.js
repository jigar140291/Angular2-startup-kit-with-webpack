
const webpack = require('webpack');
/**
 * Webpack Constants
 */

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function(options) {
    var config =  {
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts',
                    exclude: ['node_modules']
                },
                {
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    exclude: [
                        'node_modules'
                    ]}

            ],
            loaders : [
                //{test: /\.ts$/, loaders: ['ts', 'angular2-template-loader']},
                {test: /\.css$/, loader: 'style-loader!css-loader'},
                {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
                {test: /app\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')},
                {test: /\.(ttf|eot|svg|png|jpg)(\?v=.+)?$/, loader: 'file-loader'},
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ],
            postLoaders: []
        }

    };
/*
    // skip coverage in watch mode
    if (!autowatch) {
        config.module.postLoaders.push(/!**
             * Instruments JS files with Istanbul for subsequent code coverage reporting.
             * Instrument only testing sources.
             *
             * See: https://github.com/deepsweet/istanbul-instrumenter-loader
             *!/
            {
                test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
                include: helpers.root('src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            });
    }*/
    return config;
}