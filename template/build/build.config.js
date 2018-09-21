//用于多页面
const HtmlWebpackPlugin = require('html-webpack-plugin');

const template = "./public/index.html";
const PUBLIC_URL = "./public";

const config = {
    entry: {
        index: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: template,
            filename: 'index.html',
            chunks: ["vendor", "index"],
            PUBLIC_URL: PUBLIC_URL,
            hash: true,
            title: "index"
        })
    ]
}

module.exports = config;
