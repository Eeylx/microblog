/**
 * @Author: lyx
 * @Date: 2017/5/9
 */
'use strict';

var checkNotLogin = require('../middlewares/check').checkNotLogin();

module.exports = function (app) {

    // 注册页
    app.get('/signup', checkNotLogin, function (req, res) {
        res.send(req.flash());
    });

    // 用户注册
    app.post('/signup', checkNotLogin, function (req, res) {
        res.send(req.flash());
    });
};