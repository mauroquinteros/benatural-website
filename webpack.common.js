const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/app.js"),
    home: path.resolve(__dirname, "src/js/home.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/views/index.pug"),
      filename: "index.html",
      chunks: ["app", "home"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/views/about.pug"),
      filename: "nosotros.html",
      chunks: ["app"],
    }),
  ],
};
