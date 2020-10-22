const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    "react-validation-code": "./src/index.js",
    "react-validation-code.min": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "[name].js",
    library: 'VCode',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 1024 * 10,
          name: "[name].[hash:8].[ext]"
        }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  optimization: {
      minimize: true,
      minimizer: [
          new TerserPlugin({
              include: /\.min\.js$/
          })
      ]
  },
  externals: { // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
};
