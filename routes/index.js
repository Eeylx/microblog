/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var reg = require('./reg');   // 注册
var login = require('./login');   // 登陆
var posts = require('./posts');     // 查看,发表,修改,删除文章, 留言 等
var logout = require('./logout'); // 登出

router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

// 注册
router.use('/reg', reg);
// 登陆
router.use('/login', login);
// 查看,发表,修改,删除文章, 留言 等
router.use('/posts', posts);
// 登出
router.use('/logout', logout);

// 返回 router 供 app 使用
module.exports = router;