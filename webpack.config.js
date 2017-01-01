module.exports = {

  entry: {
    javascript: "./src/index.js",
    html: "./src/index.html",
  },
  devtool: 'inline-source-map', // or 'source-map',
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
	  {
	    test: /\.html$/,
	    loader: "file?name=[name].[ext]",
	  },
    {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap',
    }
    ]
  }
};