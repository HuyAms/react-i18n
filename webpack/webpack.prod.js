const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',

	devtool: 'source-map',

	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(?:sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [postcssPresetEnv()],
						},
					},
				],
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),

		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),

		new OptimizeCssAssetsPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
	],
})
