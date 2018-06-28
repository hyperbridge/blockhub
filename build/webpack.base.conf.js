'use strict'

const helpers = require('./helpers')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: helpers.root('/src/main.js')
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      // {
      //   test: /\.ts$/,
      //   use: [ // {loader: 'babel-loader'}, 
      //     // {
      //     //   loader: require.resolve('babel-loader'),
      //     //   options: {
      //     //     compact: true,
      //     //   },
      //     // },
      //     {
      //       loader: require.resolve('ts-loader'),
      //       options: {
      //         "configFile": require("../tsconfig.json"),
      //         appendTsSuffixTo: [/\.vue$/],
      //       }
      //     }
      //   ],
      //   "exclude": [
      //     // instead of /\/node_modules\//
      //     path.join(process.cwd(), 'node_modules')
      //   ],
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        "exclude": [
          // instead of /\/node_modules\//
          path.join(process.cwd(), 'node_modules')
        ]
        //include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.yaml$/,
        "exclude": [
          path.join(process.cwd(), 'node_modules')
        ],
        loader: 'yaml-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
