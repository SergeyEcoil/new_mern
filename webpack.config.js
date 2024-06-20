const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
    "./src/client/main.js",
  ],
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
            plugins: ["react-refresh/babel"],
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
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    hot: true,
    port: 3000,
    proxy: [
      {
        context: ["/api", "/socket.io"],
        target: "http://localhost:3001",
        changeOrigin: true,
        ws: true,
      },
    ],
  },
};
