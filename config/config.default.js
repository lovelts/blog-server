/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2021-01-12 19:53:02
 * @FilePath: \react-blog\blog-server\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608293935875_7026';

  // add your middleware config here
  config.middleware = [];
  // 修改默认端口号
  config.cluster = {
    listen: {
      path: '',
      port: 3255,
      hostname: '0.0.0.0',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'admin',
      // database
      database: 'next_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  return {
    ...config,
    ...userConfig,
  };
};
