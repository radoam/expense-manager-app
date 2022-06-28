const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: { index: '/', disableDotRule: true }
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Unicoin',
      favicon: path.join(__dirname, 'public', 'favicon.svg'),
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.[id].css'
    }),
    new ProvidePlugin({
      React: 'react'
    })
  ]
};
