const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.css', '.sass', '.less']
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.m?(js|ts|tsx)$/,
                exclude: /(node_modules | client)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(scss|css|sass)$/i,
                exclude: /(node_modules | client)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: "ares",
        libraryTarget: "umd"
    },
    externals: {
        react: 'react',
        reactDOM: 'react-dom'
    }
};