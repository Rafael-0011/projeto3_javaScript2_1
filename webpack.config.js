const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  mode: "development",

  entry: {
    main: "./src/main.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/cardLogin/login.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "/src/cardInfo/card.html",
      filename: "card.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
