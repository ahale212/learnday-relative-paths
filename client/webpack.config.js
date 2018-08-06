var path = require('path')
var HtmlWebpackPlugin = require("html-webpack-plugin")

var BUILD_DIR = path.resolve(__dirname, './build/')
var APP_DIR = path.resolve(__dirname, './src')

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({title: "Yay", template: "./src/index.html", filename: "index.html"}),

    ],
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            exclude: /\.useable\.css$/,
            loader: "style-loader!css-loader"
          },
        ]
      },
    node: {
        fs: "empty"
    },
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    }
};