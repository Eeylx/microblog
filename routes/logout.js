/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var check = require('../middlewares/check');


// 检测是否已登录, 已登录状态下才能登出
router.use(check.checkLogin);

// GET /logout 登出
router.get('/', function (req, res) {
    res.render(req.flash());
});


module.exports = router;