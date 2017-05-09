/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var signup = require('./signup');   // 注册
var signin = require('./signin');   // 登陆
var signout = require('./signout'); // 登出
var posts = require('./posts');     // 查看,发表,修改,删除文章, 留言 等

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: 'Express'});
    });

    signup(app);
    signin(app);
    signout(app);
    posts(app);
};
