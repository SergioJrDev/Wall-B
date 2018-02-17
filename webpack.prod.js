const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    target: "web",
    entry: [
        "./src/index.js",
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                  use: ['style-loader', 'css-loader']
              },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
        new HtmlWebpackPlugin({
            title: 'Wall-B',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                collapseInlineTagWhitespace: true
              },
            inject: false,
            template: require('html-webpack-template'),
            meta: [
                {
                  name: 'description',
                  content: 'A better default template for html-webpack-plugin.'
                }
              ],
              mobile: true,
              lang: 'pt-BR',
              bodyHtmlSnippet: '<div id="root"></div><link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700" rel="stylesheet">',
        }),
        //if you want to pass in options, you can do so:
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
}