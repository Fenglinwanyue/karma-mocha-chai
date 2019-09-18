var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {

    return path.join(__dirname, '..', dir)
}

var webpackConfig = {

    module: {

        rules: [

            // babel-loader
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },

            // vue loader
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader'
                        },
                    }
                }]
            },

            // css loader
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            },

            // img loader
            {
                test: /\.(png|gif|jpe?g)(\?\S*)?$/,
                use: [{ loader: 'url-loader' }]
            },

            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{ loader: 'url-loader' }]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}

module.exports = webpackConfig