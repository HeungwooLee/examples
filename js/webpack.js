const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, "src/index.ts")]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js', '.json']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
  ]
};