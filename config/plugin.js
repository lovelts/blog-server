/*
 * @Author: lts
 * @Date: 2020-12-18 20:19:06
 * @LastEditTime: 2020-12-21 10:29:30
 * @FilePath: \react-blog\blog-server\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.mysql = {
  enable: true,
  package:'egg-mysql'
}
exports.cors = {
  enable: true,
  package: 'egg-cors'
}
