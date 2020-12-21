/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2020-12-18 21:10:21
 * @FilePath: \react-blog\blog-server\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

//  controller.home.list   
// controller 代表我们的控制器，home是我们的这个文件，list是我们文件中的那个方法
module.exports = app => {
  require('./router/default')(app)
};




//路由使用方法如果 没在此文件中写详细路由的话，跟express框架一样
// 我们需要require引入在其他文件配置的路由，并且传入app