const webpack = require('webpack');

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./config/config.json');
var environment = process.env.NODE_ENV || 'local';

var apiUrl = config[environment] || '';

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new ExtractTextPlugin('application.css',{
        allChunks: true
    }),
    new CopyWebpackPlugin([{
        from: 'assets',
        to: 'assets'
    }]),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
        template: 'index.html',
        chunksSortMode: 'dependency'
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
        ApiUrl : JSON.stringify(apiUrl)
    })
];

/*Adding minification for All environments except local*/
if(environment !== 'local'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }));
}

module.exports = {
    debug: true,
    devtool: 'cheap-module-source-map', // 'source-map' : prod
    context : path.resolve(__dirname, 'src'),
    entry : {
        'polyfills': './polyfills.browser.ts',
        'vendor': './vendor.browsers.ts',
        'main': './main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders : [
            {test: /\.ts$/, loaders: ['ts', 'angular2-template-loader']},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /app\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')},
            {test: /\.(ttf|eot|svg|png|jpg)(\?v=.+)?$/, loader: 'file-loader'},
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.css', '.scss', '.json']
    },
    plugins: plugins
};
