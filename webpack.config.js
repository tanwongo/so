var path = require('path')
var webpack = require('webpack')
const glob = require('glob')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

let entrylist = {}

let jslist = glob.sync('./jssrc/*.ts')

jslist.forEach(v=>{

  let name = path.basename(v, '.ts')
  entrylist[name] = v
})


// let lesslist = glob.sync('./src/less/*.less')


// lesslist.forEach(v=>{
//   let name =path.basename(v, '.less') //加个前缀防止重名
//   entrylist[name] = v
// })



module.exports = {
  entry:entrylist,
  output: {
    path: path.resolve(__dirname, './public/js/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options:{
            configFile: 'fe_tsconfig.json'
          }
        },

      },
      
      // {
      //   test: /\.less$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'less-loader'
      //   ]
      // },
      {
        test: /\.(html|ejs|art|dot|css)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpg|gif|png)$/i,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 80000
            }
        }]
      },
    {
        test: /\.art$/,
        loader: "art-template-loader"
    },
    {
        test: /\.jpg$/,
        loader: "file-loader"
    },
    // {
    //   test: /\.(jpg|gif|png)$/i,
    //   include: path.resolve(__dirname, './src/less/'),
    //   use: [{
    //       loader: 'url-loader',
    //       options: {
    //         esModule: false,
    //         limit: 20000,
    //         name: '[hash:10].[ext]',
    //         publicPath: '',
    //         outputPath: '../../images/'
    //       }
    //   }]
    // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  mode: 'development',
  devtool: 'source-map'
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '../css/[name].css'
  //   })
  // ]
}