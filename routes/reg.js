/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var express = require('express');
var router = express.Router();

var upload = require('../middlewares/multerUtil');

var check = require('../middlewares/check');
var reg = require('../controller/reg');

// 检测是否未登录, 在未登录状态下才能注册
router.use(check.checkNotLogin);

// GET /reg 注册页
router.get('/', reg.reg);

// POST /reg 用户注册
router.post('/', upload.single('avatar'), reg.register);


module.exports = router;