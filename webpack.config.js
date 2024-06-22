const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/client/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
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
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3001, // Используем другой порт для webpack-dev-server
    proxy: [
      {
        context: ["/api", "/socket.io"],
        target: "http://localhost:3000",
        changeOrigin: true,
        ws: true,
      },
    ],
  },
};
