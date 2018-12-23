const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development', // 开发环境

	entry: path.join(__dirname, './src/main.js'),

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		// 在内存中生成对应的页面文件，并且在页面底部自动导入合适的 bundle.js
		new htmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	// 配置第三方 loader 模块
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			// 处理图片路径
			{ test: /\.(jpg|png|jpeg|gif|bmp)$/, use: 'url-loader?limit=51560&name=[hash:6]-[name].[ext]' },// url-loader 只是内部依赖 file-loader，此处不需要添加
			// limit 给定的值是图片大小（byte),如果引用的图片大于或等于limit值，则不会被转为 base64 字符串
			{ test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'url-loader' },
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.vue$/, use: 'vue-loader' }
		]
	},
	// 配置 webpack 寻找模块的规则
	resolve: {
		alias: {
			// 'vue$': 'vue/dist/vue.js'
		}		
	}
}