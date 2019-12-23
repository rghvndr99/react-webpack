const path = require("path");
const devMode = process.env.NODE_ENV !== 'production'
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const htmlplugin=new HtmlWebPackPlugin({
      template:"./src/index.html",
      filename: "index.html"
});

const cleanHtml=new CleanWebpackPlugin(["dist"]);

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "styles/[name].css",
  chunkFilename: "[id].css"
})

module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve("public"),
        filename: "js/bundle.js"
    },
	devServer: {
		port: 5055
  },
  devtool: "source-map",
    module:{
        rules:[
            {
            test:/\.jsx$/,
            enforce:"pre",
            loader:"eslint-loader",
            exclude:/node_modules/,
            options:{
              emitWarning:true,
              fix:true,
              configfile:"./.eslintrc"
            }
          },
         {
             test:/\.js$/,
             enforce:"pre",
             exclude: /node_modules/,
             loader:"eslint-loader",
             options:{
                     failOnError:true,
                     fix:true
                 }
             },
            {
             test:/\.js$/,
             exclude: /node_modules/,
             loader:"babel-loader"
            },

         {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
         },

         {
             test: /\.(gif|png|svg|jpe?g)$/,
             use:[
                 {
                    loader:"file-loader",
                     options:{
                         bypassOnDebug:true,
                         disable:true,
                         outputPath: 'images/',
                         name(file) {
                          return '[name].[ext]';
                        }
                      }
                 }
              ]
          }

        ]
    },
    plugins:[htmlplugin,cleanHtml, miniCssExtractPlugin]
}