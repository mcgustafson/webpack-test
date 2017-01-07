const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/webpack.js",
    output: {
        path: 'dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index-template.ejs',
      })
    ]
};
