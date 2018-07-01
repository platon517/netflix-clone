const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/style.scss'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
              url: false
            }
          },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {filename: 'style.bundle.css'}
    ),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      {from:'src/img',to:'src/img'}
    ])
  ]
};