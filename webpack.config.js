var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry : {
    'index' : './index.js'
  },
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
  },
    resolve: {
        extensions: ['', '.js', '.jsx']
  },
  module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: [ 'es2015' , 'react']
	      }
	    },
	    {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
          },
	  ]
	}
};