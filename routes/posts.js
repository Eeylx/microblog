/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var check = require('../middlewares/check');


// 检测是否已登录, 已登录状态下才能进行操作
router.use(check.checkLogin);

// GET /posts 所有用户或特定用户的文章页
// 例如: /posts?author=xxx
router.get('/', function (req, res) {
    res.send(req.flash());
});

// POST /posts 发表一篇文章
router.post('/', function (req, res) {
    res.send(req.flash());
});

// GET /posts/create 发表文章页
router.get('/create', function (req, res) {
    res.send(req.flash());
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function (req, res) {
    res.send(req.flash());
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', function (req, res) {
    res.send(req.flash());
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', function (req, res) {
    res.send(req.flash());
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', function (req, res) {
    res.send(req.flash());
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', function (req, res) {
    res.send(req.flash());
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', function (req, res) {
    res.send(req.flash());
});


module.exports = router;