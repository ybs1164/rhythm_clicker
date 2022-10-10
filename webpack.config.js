const path = require('path');

module.exports = {
    entry: './src/js/main.mjs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: { contentBase: "./" },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.wav$/,
                include: [
                    path.resolve(__dirname, 'musics')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    target: 'node',
    mode: 'development'
};