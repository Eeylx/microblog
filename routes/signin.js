/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var check = require('../middlewares/check');


// 检测是否未登录, 在未登录状态下才能登陆
router.use(check.checkNotLogin);

// GET /signin 登录页
router.get('/signin', function (req, res) {
    res.send(req.flash());
});

// POST /signin 用户登录
router.post('/signin', function (req, res) {
    res.send(req.flash());
});


module.exports = router;