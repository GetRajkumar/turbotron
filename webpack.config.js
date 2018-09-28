const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
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
        test: /\.css$/,
         use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader", // compiles Sass to CSS, using Node Sass by default
                "postcss-loader",
                {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
            ]
      },
      {
           test: /\.scss$/,
           use: [
               "style-loader", // creates style nodes from JS strings
               "css-loader", // translates CSS into CommonJS
           ]
         }
    ]
  },
  // add template into dist folder with builded js file
  plugins: [
      new HtmlWebPackPlugin({
      template: "./src/index.html",
    })
  ]

};