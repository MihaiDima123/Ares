const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.css']
    },
    entry: './client/index.tsx',
    module: {
        rules: [
            {
                test: /\.m?(js|ts|jsx|tsx|json)$/,
                exclude: /(node_modules | src)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss|sass)$/i,
                exclude: /(node_modules | src)/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|OTF)([\?]?.*)$/,
                use: ['file-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'client-dist'),
        filename: 'bundle.js',
    },
    performance: {
        hints: false,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3050,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ]
};