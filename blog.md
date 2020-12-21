<!--
 * @Author: lts
 * @Date: 2020-12-18 20:25:01
 * @LastEditTime: 2020-12-18 22:02:55
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