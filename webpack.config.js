const path =require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'js/[name].[chunkhash].js',
        path:path.join(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                include:path.resolve(__dirname,'./src')
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './public/index.html'
        }),
      new CleanWebpackPlugin()
      ]

}