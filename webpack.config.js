/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const env = Object.entries({
  ...require('dotenv').config(),
  ...process.env,
}).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

// eslint-disable-next-line
module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(env),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-import')(),
                  require('tailwindcss')('./tailwind.config.js'),
                  require('autoprefixer')(),
                  require('tailwindcss/nesting')(),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
