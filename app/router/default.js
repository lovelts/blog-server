/*
 * @Author: lts
 * @Date: 2020-12-18 20:51:28
 * @LastEditTime: 2021-01-11 19:39:52
 * @FilePath: \react-blog\blog-server\app\router\default.js
 */
// eslint-disable-next-line strict
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getBlogList', controller.default.home.getBlogList);
  router.get('/default/getBlogById', controller.default.home.getBlogById);
  router.get('/default/getBlogTypeName', controller.default.home.getBlogTypeName);
  router.get('/default/getBlogsByTypeId', controller.default.home.getBlogsByTypeId);

};
