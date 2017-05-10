/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var check = require('../middlewares/check');


// 检测是否未登录, 在未登录状态下才能注册
router.use(check.checkNotLogin);

// GET /signup 注册页
router.get('/signup', function (req, res) {
    res.send(req.flash());
});

// POST /signup 用户注册
router.post('/signup', function (req, res) {
    res.send(req.flash());
});


module.exports = router;