const path = require('path');
const indexHtml = path.join(__dirname, "src/index.html");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: "source-map",
  target: "web",
  entry: [
    "./src/main.js",
    indexHtml,
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    open: true,
    watchContentBase: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: indexHtml,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            {
                loader: "extract-loader",
            },
            {
                loader: "html-loader",
                options: {
                    attrs: ["img:src", "link:href"],
                    interpolate: true,
                },
            },
        ],
    },
    {
      test: /\.css$/,
      loaders: [
          {
              loader: "file-loader",
          },
          {
              loader: "extract-loader",
          },
          {
              loader: "css-loader",
          },
      ],
    },
    {
        test: /\.jpg$/,
        loaders: [
            {
                loader: "file-loader"
            },
        ],
    },
  ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}