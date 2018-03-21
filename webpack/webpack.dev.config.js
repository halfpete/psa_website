var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(parentDir, 'index.js')
    ],
    module: {
        // Bundles source files.
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
                loaders: ["style-loader", 
                    "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                loader:[ 'style-loader', 'css-loader' ]
            }
		]
    },
    // Where the bundle.js file gets outputted.
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    // dev server configurations.
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
