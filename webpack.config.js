const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    // entry: { 
    //     app: "./src/index.ts",
    //     print: "./src//print.js",
    // },
    entry: ['./src/index.ts'],
    output: {
        // filename: "bundle.js",
        //  使用动态名称, name是动态替换入口文件名称，，contenthash 是文件hash值，
        // 当文件更新得时候，hash 值不一样, 就不会走cache了
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    // 开启生产代码和开发代码得映射
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        hot: true,
    },
    module: {
        rules: [
            // 处理ts文件
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // in order to import a css file， we need to install and config style-loader and css-loader
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            // resolve the picture, 图像将被处理并添加到output目录中，引入的image变量会被被变成一个最终的url.
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        // 清理打包文件内得打包文件,只生产打包当前项目得依赖文件
        new CleanWebpackPlugin(),
        // 自动生成html 文件，并将依赖引入

        new HtmlWebpackPlugin({
            title: "贪食蛇",
            template: './src/index.html',
        }),
    ],
    optimization: {
        // 将runtime 代码单独分离到一个chunk,
        runtimeChunk: 'single',
        // 使用splitChunksPlugins得cacheGroups配置 来实现 对引用得库集中打包，，
        // 因为不经常改动，所以包单独剥离出来打包，利用长效缓存机制，减少请求，并减少向server得请求得资源包体积
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },

}