/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2020-12-18 20:36:20
 * @FilePath: \react-blog\blog-server\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const {ctx} = this
    ctx.body = '<h1>hi,lalallala!</h1>'
  }
}

module.exports = HomeController;
