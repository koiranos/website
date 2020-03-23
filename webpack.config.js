const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  return {
    mode: env.NODE_ENV,
    entry: {
      app: './src/index.js'
    },
    devServer: {
      contentBase: './public',
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'], // TODO: Add eslint-loader
          exclude: /node_modules/,
        },
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
      new HtmlWebpackPlugin({
        title: 'StyleQ - Find professional stylists',
        template: HtmlWebpackTemplate,
        inject: false,
        hash: true,
        mobile: true,
        // Mount ids for main app and modal portal
        appMountIds: ['app', 'modal']
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
  };
};
