require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);
module.exports = {
  mode: 'development',
  entry: {},
  plugins: [],
  output: {
    filename: '',
  }
};
