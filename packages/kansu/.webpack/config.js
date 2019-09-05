const path = require('path');
const merge = require('webpack-merge');

const config = {
    entry: {
        'kansu': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: 'kansu',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
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