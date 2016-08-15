const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {PluginManager, createLoaders, devServerStats} = require('synlabs-webpack-utils');


module.exports = function createWebpackConfig(env = {}) {
  const plugins = new PluginManager({
    base: [
      new HtmlWebpackPlugin({
        template: 'demo/index.html'
      })
    ],
    development: [],
    production: [
      new ExtractTextPlugin('styles.[contenthash].css')
    ]
  });

  return {
    entry: './demo/index',
    devtool: env.prod ? 'source-map' : 'eval',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: resolve(__dirname, 'demo_dist'),
      pathinfo: !env.prod
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    plugins: plugins.export(env.prod),
    devServer: {
      quiet: false,
      noInfo: false,
      stats: devServerStats
    },
    module: {
      loaders: createLoaders({
        production: false,
        pathToIndexHtml: resolve(__dirname, 'demo/index.html'),
        language: 'typescript'
      })
    }
  };
};
