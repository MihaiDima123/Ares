const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx']
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
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: "ares",
        libraryTarget: "umd"
    }
};