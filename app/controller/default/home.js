/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2021-01-12 11:13:48
 * @FilePath: \react-blog\blog-server\app\controller\default\home.js
 */
'use strict';

const Controller = require('egg').Controller;

const moment = require('moment');
const dateFormat = 'YYYY-MM-DD HH:mm:ss';
class HomeController extends Controller {
  async index() {
    // let data = await this.app.mysql.get('blog',{})
    this.ctx.body = 'api接口';
    // console.log(data)
  }
  async getBlogList() {
    // console.log(this.ctx.query)
    const { query } = this.ctx;
    if (query.hasOwnProperty('pageSize') && query.hasOwnProperty('currentPage')) {
      const { pageSize } = query;
      const { currentPage } = query;
      const startNum = (currentPage - 1) * pageSize;
      const sql = `select  blog.id as id,
                 blog.title as title,
                 blog.introduce as introduce,
                 blog.view_count as view_count,
                 blog.create_time as create_time,
                 blog.last_edit_time as last_edit_time,
                 blog_type.type_name as type_name,
                 (select count(*) from blog) as total
                 from blog left join blog_type
                 on blog.type_id = blog_type.id
                 order by create_time desc
                 limit ${startNum},${pageSize}
                 `;
      const ret = await this.app.mysql.query(sql);
      // console.log(ret)
      ret.forEach(item => {
        // console.log(parseInt(item.create_time))
        item.create_time = moment(parseInt(item.create_time)).format(dateFormat);
        //  = ''
        item.last_edit_time = moment(parseInt(item.last_edit_time)).format(dateFormat);
      });
      this.ctx.body = { data: ret };
    } else {
      this.ctx.body = { data: '参数出错啦' };
    }


  }
  async getBlogById() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.query.id;
    if (this.ctx.query.hasOwnProperty('id')) {
      const sql = `SELECT blog.id as id,
      blog.title as title,
      blog.introduce as introduce,
      blog.content as content,
      FROM_UNIXTIME(blog.create_time/1000,'%Y-%m-%d %H:%i:%s' ) as create_time,
      blog.view_count as view_count ,
      blog_type.type_name as type_name ,
      blog_type.id as typeId 
      FROM blog LEFT JOIN blog_type ON blog.type_id = blog_type.Id 
      WHERE blog.id='${id}'`;

      const result = await this.app.mysql.query(sql);
      this.ctx.body = { data: result[0] };
    } else {
      this.ctx.body = { data: '参数出错啦' };
    }

  }
  async getBlogTypeName() {
    const sql = 'select * from blog_type order by blog_type.order desc';
    const ret = await this.app.mysql.query(sql);
    // console.log(ret)
    this.ctx.body = { data: ret };
  }
  async getBlogsByTypeId() {
    console.log(this.ctx.query.id);
    if (this.ctx.query.id) {
      const { id } = this.ctx.query;
      const sql = `select  blog.id as id,
                  blog.title as title,
                  blog.introduce as introduce,
                  blog.view_count as view_count,
                  FROM_UNIXTIME(blog.create_time/1000,'%Y-%m-%d %H:%i:%s' ) as create_time,
                  (SELECT type_name from blog_type WHERE id='${id}') as type_name		
                  from blog WHERE type_id = '${id}'
                  order by create_time desc
      `;
      const ret = await this.app.mysql.query(sql);
      console.log(ret);
      this.ctx.body = { data: ret };

    } else {
      const sql = `select  blog.id as id,
                  blog.title as title,
                  blog.introduce as introduce,
                  blog.view_count as view_count,
                  FROM_UNIXTIME(blog.create_time/1000,'%Y-%m-%d %H:%i:%s' ) as create_time,
                  (select type_name from blog_type where blog.type_id = blog_type.id) as type_name
                  from blog
                  order by create_time desc
                  `;
      const ret = await this.app.mysql.query(sql);

      this.ctx.body = { data: ret };
    }
  }
}

module.exports = HomeController;

// 更改密码
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// mysql 如果以前采用的是傻瓜话安装的话，这里会报错 ，参考文档 https://www.pianshen.com/blog/79071608511/
