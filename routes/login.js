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

// GET /login 登录页
router.get('/', function (req, res) {
    res.render(req.flash());
});

// POST /login 用户登录
router.post('/', function (req, res) {
    res.render(req.flash());
});


module.exports = router;