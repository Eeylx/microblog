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

// GET /reg 注册页
router.get('/', function (req, res) {
    res.render('reg');
});

// POST /reg 用户注册
router.post('/', function (req, res) {
    var name = req.fields.name;
    var password = req.fields.password;
    var repassword = req.fields.repassword;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var avatar = req.files.avatar.path.split(path.sep).pop();

    

    res.render(req.flash());
});


module.exports = router;