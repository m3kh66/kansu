const path = require('path');
const merge = require('webpack-merge');

const config = {
    entry: {
        'example': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    }
};

module.exports = env =>
    merge(config, require(`./${env}.config`));