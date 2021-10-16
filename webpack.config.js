const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: { filename: "bundle.[hash].js" },
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
