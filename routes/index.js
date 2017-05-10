/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var signup = require('./signup');   // 注册
var signin = require('./signin');   // 登陆
var posts = require('./posts');     // 查看,发表,修改,删除文章, 留言 等
var signout = require('./signout'); // 登出

router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

// 注册
router.use(signup);
// 登陆
router.use(signin);
// 查看,发表,修改,删除文章, 留言 等
router.use(posts);
// 登出
router.use(signout);

// 返回 router 供 app 使用
module.exports = router;