/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2020-12-18 20:43:10
 * @FilePath: \react-blog\blog-server\app\controller\default\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口'
  }
}

module.exports = HomeController;
