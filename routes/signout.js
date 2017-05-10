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

// GET /signout 登出
router.get('/signout', function (req, res) {
    res.send(req.flash());
});


module.exports = router;