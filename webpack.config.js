const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let outputPath = path.join(__dirname, 'public')
if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'test')
    outputPath = path.join(__dirname, 'disits')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
        bundle: './entry.js',
        vendors: [
			'babel-polyfill',
            'vue',
            'vue-resource',
            // 'vue-validator'
		]
    },
	output: {
        filename: '[name].js',
        publicPath: '/assets',
        path: path.join(outputPath, 'assets')
    },
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// options: {
				// 	loaders: {
				// 		less: [
				// 			'vue-style-loader',
				// 			'css-loader',
				// 			{
				// 				loader: 'less-loader'
				// 			}
				// 		]
				// 	}
				// }
			},
            {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: __dirname
			},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
				test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
			},
			{
				test: /\.styl$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "stylus-loader" // compiles Styl to CSS
                }]
			},
			{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
			}
        ]
	},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // Specify the common bundle's name.
        }),
        new webpack.ProvidePlugin({
            config: require('config')
        })
    ],
    externals: {
        config: JSON.stringify(require('config'))
    },
	resolve: {
        extensions: [ '.js', '.vue', '.json', '.css' ],
        alias: {
            'vue$': 'vue/dist/vue.min.js',
			'vue-resource$': 'vue-resource/dist/vue-resource.min.js',
			// 'vue-validator$': 'vue-validator/dist/vue-validator.min.js',
			Source: path.join(__dirname, 'src')
		}
	}
}
