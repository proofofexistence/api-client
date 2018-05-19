const path = require('path')
const webpack = require('webpack')

const envPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
})

const prod = process.env.NODE_ENV === 'production'


const plugins = prod ?
  [
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js','common.js'),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    envPlugin
  ]
  :
  []

const devtool = prod ? 'cheap-module-source-map' : 'inline-sourcemap'
const watch = !prod

module.exports = {
  entry: './lib/index.js',
  devtool: devtool,
  watch: watch,
  mode : prod ? "production" : "development",
  output: {
    library: 'proofx',
    path: path.resolve(__dirname, 'dist'),
    filename: 'proofx.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
