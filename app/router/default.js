/*
 * @Author: lts
 * @Date: 2020-12-18 20:51:28
 * @LastEditTime: 2020-12-23 10:49:57
 * @FilePath: \react-blog\blog-server\app\router\default.js
 */
module.exports = app => {
    const {router, controller} = app
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getBlogList', controller.default.home.getBlogList)
    router.get('/default/getBlogById', controller.default.home.getBlogById)
    router.get('/default/getBlogTypeName', controller.default.home.getBlogTypeName)
    
}