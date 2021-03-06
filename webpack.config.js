const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
      use: [{
        loader: 'file-loader',
      }],
    },
    {
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
    },
    ],
  },
};