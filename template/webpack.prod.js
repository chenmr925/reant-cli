const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
});

const config = {
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new UglifyJSPlugin(),
        extractSass,
        new CopyWebpackPlugin([
            {
                from: './public/favicon.ico',
                to: './favicon.ico'
            }
        ])
    ]
};

const webpackConfig = merge(baseConfig, buildConfig, config);

module.exports = webpackConfig;
