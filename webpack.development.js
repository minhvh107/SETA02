const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: ['@babel/polyfill', './src/index.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].js',
        publicPath: '/',
    },
    devServer: {
        port: 8000,
        open: true,
        stats: 'errors-only',
        inline: true,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        compress: true,
    },
    resolve: {
        extensions: ['.js', '.sass', '.json'],
        modules: ['node_modules'],
        alias: {
            "@node_modules": path.resolve(__dirname, './node_modules'),
            "@static": path.resolve(__dirname, './static'),
            "@views": path.resolve(__dirname, './src/views'),
            "@states": path.resolve(__dirname, './src/state'),
            "@utils": path.resolve(__dirname, './src/utils'),
            "@constants": path.resolve(__dirname, './src/constants'),
            "@duck": path.resolve(__dirname, './src/state/duck'),
            "@containers": path.resolve(__dirname, './src/views/containers'),
            "@components": path.resolve(__dirname, './src/views/components'),
            "@styles": path.resolve(__dirname, './src/views/styles'),
            "@basesControl": path.resolve(__dirname, './src/bases/control'),
            "@basesShared": path.resolve(__dirname, './src/bases/shared'),
            "@basesSection": path.resolve(__dirname, './src/bases/section'),
        }
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            mimetype: 'application/font-woff'
                        }
                    }
    
                ]
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                loaders: ['file-loader']
            }    

        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new ProgressBarPlugin(),
      
    ],
    optimization: {
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'vendor';
            },
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: 'vendor',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};
