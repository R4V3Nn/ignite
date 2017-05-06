const webpack = require('webpack');



module.exports = {
    // This is the "main" file which should include all other modules
    entry: './jsx/main',
    // Where should the compiled file go?
    output: {
        // To the `dist` folder
        path: __dirname + '/dist',
        publicPath: '/dist/',
        // With the filename `build.js` so it's dist/build.js
        filename: 'build.js'
    },
    module: {
        // Special compilation rules
        rules: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
             {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devtool: '#source-map',
    resolve: {

    },
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()

    ]
};