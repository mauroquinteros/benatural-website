const common = require("./webpack.common");
const merge = require("webpack-merge");

const path = require("path");
const { PORT } = require("./src/config");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: `http://localhost:${PORT}/`,
    filename: "js/[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: PORT,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg?e|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
});
