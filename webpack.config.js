const path = require('path');

const config = {
  entry: './src/quill-autoformat.js',
  output: {
    filename: 'quill-autoformat.js',
    path: path.resolve(__dirname, 'dist'),
    library: "QuillAutoformat",
    libraryTarget: "umd"
  },
  target: "web",
  externals: {
    quill: {
      commonjs: 'quill',
      commonjs2: 'quill',
      amd: 'quill',
      root: 'Quill'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    'last 2 Chrome major versions',
                    'last 2 Firefox major versions',
                    'last 2 Safari major versions',
                    'last 2 Edge major versions',
                    'last 2 iOS major versions',
                    'last 2 ChromeAndroid major versions',
                  ]
                }
              }
            ]]
          }
        }
      }
    ]
  }
};

module.exports = config;