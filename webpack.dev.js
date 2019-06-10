const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4000,
    hot: true,
    proxy: {
      '/kugou': {
        target: 'http://m.kugou.com/',
        changeOrigin: true,
        pathRewrite: { '^/kugou': '' }
      },
      '/yy_kugou': {
        target: 'http://www.kugou.com/yy/',
        changeOrigin: true,
        pathRewrite: { '^/yy_kugou': '' }
      },
      '/mobilecdn': {
        target: 'http://mobilecdn.kugou.com',
        changeOrigin: true,
        pathRewrite: { '^/mobilecdn': '' }
      }
    }
  }
});
