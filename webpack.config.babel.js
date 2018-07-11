import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import DotenvPlugin from 'webpack-dotenv-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const createConfig = (env = 'development') => {
    return {
        entry: {
            script: './src/js/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: ['style-loader'],
                        use: [
                            'css-loader?modules&importLoaders=0&localIdentName=[name]__[local]___[hash:base64:5]',
                            'postcss-loader',
                            'sass-loader',
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: ['style-loader'],
                        use: ['css-loader'],
                    }),
                },
                {
                    test: /\.(png|jpg|woff|woff2|ogg)$/,
                    use: 'file-loader?name=[name].[ext]',
                },
                {
                    test: /\.(xml|html|txt|md)$/,
                    use: 'raw-loader',
                },
                {
                    test: /\.svg$/,
                    use: 'svg-inline-loader',
                },
            ],
        },
        devtool: 'source-map',
        plugins: [
            new DotenvPlugin({
                sample: './.env.example',
                path: './.env',
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css',
                allChunks: true,
                disable: env !== 'production',
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CopyWebpackPlugin([
                {
                    context: './src/favicon/',
                    from: '**/*',
                },
                {
                    from: './src/manifest.json',
                },
                {
                    from: './src/browserconfig.xml',
                },
            ]),
        ],
        devServer: {
            port: process.env.PORT || 1337,
            host: '127.0.0.1',
            publicPath: '/',
            contentBase: './src',
            historyApiFallback: true,
            https: false,
        },
    };
};

module.exports = createConfig;
