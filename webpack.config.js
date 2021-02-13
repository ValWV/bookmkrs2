const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

module.exports = {
  mode: 'development',
  entry: [
    path.join(dirApp, 'app.js'),
    path.join(dirStyles, 'index.scss')
  ],

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
devtool: 'eval-source-map',
  devServer: {
   historyApiFallback: true,
   port: 8081,
   open: true
 },

  resolve: {
    modules: [
      dirApp,
      dirAssets,
      dirNode
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT: JSON.stringify('development')
    }),

    new webpack.ProvidePlugin({
       process: 'process/browser',
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html')
    }),




    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
        }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        },
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEVELOPMENT
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: IS_DEVELOPMENT
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEVELOPMENT
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
        loader: 'file-loader',
        options: {
          name (file) {
            return '[hash].[ext]'
          }
        }
      }
    ]
  }
};
