const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [
    //bez tego nie widzi reacta - nie dołącza reacta do pliku app.bundle.js
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
];

//webpack.config.js
module.exports = (env) => {
    const environment = env || 'production';

    if (env === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sourceMap: false
            })
        )
    }

    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        plugins: plugins,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};