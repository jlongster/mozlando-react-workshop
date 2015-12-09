var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var frontendConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3000/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=es2015'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

new WebpackDevServer(webpack(frontendConfig), {
  publicPath: frontendConfig.output.publicPath,
  hot: true
}).listen(3000, 'localhost', function (err, result) {
  if(err) {
    console.log(err);
  }
  else {
    console.log('webpack dev server listening at localhost:3000');
  }
});
