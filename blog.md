<!--
 * @Author: lts
 * @Date: 2020-12-18 20:25:01
 * @LastEditTime: 2020-12-21 17:59:39
 * @FilePath: \react-blog\blog-server\blog.md
-->
# eggjs目录结构
 | ----  app
 |      | ---- controller
 | ----  config 配置文件
 | ----  logs 日志文件
 | ----  node_modules
 | ----  run运行自动生成，运行时生成的配置文件
 | ----  test测试时的配置文件
 | ---- .autod.conf.js egg自动生成的配置文件
## 配置egg-mysql
1. 在config的目录下中的plugin.js中
```js
    exports.mysql = {
        enable: true,
        package: 'egg-mysql',
    };
```
2. 在同级目录中的config.default.js中做出如下配置
```js
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'mysql.com',
      // port
      port: '3306',
      // username
      user: 'test_user',
      // password
      password: 'admin',
      // database
      database: 'test',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
```

+ FROM_UNIXTIME(blog.create_time,'%Y-%m-%d %H:%i:%s' ) as create_time  规定时间类型

```sql
    let sql = `SELECT blog.id as id,
               blog.title as title,
               blog.introduce as introduce,
               blog.content as content,
               FROM_UNIXTIME(blog.create_time/1000,'%Y-%m-%d %H:%i:%s' ) as create_time,
               blog.view_count as view_count ,
               blog_type.type_name as type_name ,
               blog_type.id as typeId 
               FROM blog LEFT JOIN blog_type ON blog.type_id = blog_type.Id 
               WHERE blog.id='${id}'`
```
这个sql语句中的where 后面id比较要用引号引住