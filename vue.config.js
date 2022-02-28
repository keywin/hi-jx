const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // productionSourceMap: false,
  // 环境配置  
  devServer: {
    https: true
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './md'), // 要拷贝的源目录, 必填
          to: path.resolve(__dirname, 'dist/md'), // copy到此目录, 不填写默认copy到打包的output输出地
          ignore: [ '*.txt', '.*' ] // 忽略文件
        }
      ])
    ]
  }
}