const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: [
    process.env.NODE_ENV !== "production" &&
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
    "./src/client/main.js",
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              process.env.NODE_ENV !== "production" && "react-refresh/babel",
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    process.env.NODE_ENV !== "production" &&
      new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV !== "production" && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
