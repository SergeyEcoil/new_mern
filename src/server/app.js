import express from "express";
import path from "path";
import cors from "cors";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack.config.js";

const app = express();
const compiler = webpack(webpackConfig);

app.use(cors());

// Использование webpack-dev-middleware
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

// Использование webpack-hot-middleware
app.use(webpackHotMiddleware(compiler));

// Статические файлы должны быть настроены после middleware
app.use(express.static(path.join(__dirname, "../../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

export default app;
