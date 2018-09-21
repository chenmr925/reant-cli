// webpack 基础配置
const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        vendor: ["react", "react-dom", "react-router-dom"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".less", ".png", ".jpg", ".jpeg", ".gif"],
        alias: {
            "actions": path.resolve(__dirname, '../src/actions'),
            "components": path.resolve(__dirname, '../src/components'),
            "images": path.resolve(__dirname, '../src/images'),
            "pages": path.resolve(__dirname, '../src/pages'),
            "reducers": path.resolve(__dirname, '../src/reducers'),
            "styles": path.resolve(__dirname, '../src/styles'),
            "utils": path.resolve(__dirname, '../src/utils'),
            "commonjs": path.resolve(__dirname, '../src/utils/common.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff)\S*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
}

module.exports = config;
