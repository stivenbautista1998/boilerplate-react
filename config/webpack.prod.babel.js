/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

// Important modules this config uses
const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'app/index.jsx')
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'js/[name].[chunkhash].js'
  },

  plugins: [

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:7].css',
      chunkFilename: 'css/[id].[hash:7].css'
    })
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
