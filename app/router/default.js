/*
 * @Author: lts
 * @Date: 2020-12-18 20:51:28
 * @LastEditTime: 2020-12-21 17:13:00
 * @FilePath: \react-blog\blog-server\app\router\default.js
 */
module.exports = app => {
    const {router, controller} = app
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getBlogList', controller.default.home.getBlogList)
    router.get('/default/getBlogById', controller.default.home.getBlogById)
}