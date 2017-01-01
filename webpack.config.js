module.exports = {

  entry: {
    javascript: "./js/app.jsx",
    html: "./index.html",
  },
  devtool: 'inline-source-map', // or 'source-map',
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
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