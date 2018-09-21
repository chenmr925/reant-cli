const HotModuleReplacementPlugin = require('react-hot-loader');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');

const config = {
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: "80",
        hot: true,
        compress: true,
        historyApiFallback: {
            index: '/index.html'
        },
        host: "0.0.0.0",
        proxy: {
            "/test/": "http://127.0.0.1:8080"
        },
        watchOptions: {
            aggregateTimeout: 1000,
            ignored: /node_modules/
        }
    }
};

const webpackConfig = merge(baseConfig, buildConfig, config);

module.exports = webpackConfig;
