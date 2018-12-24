const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: { minimize: false },
  performance: { hints: false },
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'imports-loader?graphql',
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { node: '8.10' } }]],
            },
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
};