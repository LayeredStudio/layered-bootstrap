const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: { 'layered': './src/layered.js' },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}
