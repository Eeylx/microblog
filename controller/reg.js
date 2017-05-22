/**
 * @Author: lyx
 * @Date: 2017/5/11
 */
'use strict';

var fs = require('fs');
var path = require('path');
var sha1 = require('sha1');

var userModel = require('../models/users');

exports.reg = function regg(req, res, next) {
    return res.render('reg');
};

exports.register = function register(req, res, next) {
    var userInfo = {};
    userInfo.name = req.body.name;
    userInfo.password = req.body.password;
    userInfo.repassword = req.body.repassword;
    userInfo.gender = req.body.gender;
    userInfo.avatar = req.file;
    userInfo.bio = req.body.bio;

    try {
        checkRegUserInfo(userInfo);
    } catch (e) {
        // 注册失败, 异步删除上传的头像
        userInfo.avatar && fs.unlink(userInfo.avatar.path);
        req.flash('error', e.message);
        return res.redirect('/reg');
    }

    // 待写入数据库的用户信息
    var user = {
        name: userInfo.name,
        password: sha1(userInfo.password),    // 使用sha1加密用户密码
        gender: userInfo.gender,
        avatar: userInfo.avatar.filename,
        bio: userInfo.bio
    };

    // 用户信息写入数据库
    userModel
        .create(user)
        .then(function (result) {
            // 此user是插入mongodb后的值,包含id
            user = result.ops[0];
            // 将用户信息存入session
            delete user.password;
            req.session.user = user;

            req.flash('success', '注册成功!');
            res.redirect('/posts');
        })
        .catch(function (e) {
            // 注册失败, 异步删除上传的头像
            avatar && fs.unlink(avatar.path);
            // 用户名被占用则跳回注册页, 而不是错误页
            if (e.message.match('E11000 duplicate key')) {
                req.flash('error', '用户名已被占用!');
                return res.redirect('/reg');
            }
            next(e);
        });
};

// 检查用户提交的注册信息是否正确
var checkRegUserInfo = function checkRegUserInfo(userInfo) {
    if (!(1 <= userInfo.name.length && userInfo.name.length <= 10)) {
        throw new Error('名字请限制在1-10个字符内!');
    }
    if (userInfo.password.length < 6) {
        throw new Error('密码至少6个字符!');
    }
    if (userInfo.password !== userInfo.repassword) {
        throw new Error('两次密码输入不一致!');
    }
    if (-1 === ['m', 'f', 'x'].indexOf(userInfo.gender)) {
        throw new Error('性别只能是m,f或x!');
    }
    if (!userInfo.avatar) {
        throw new Error('缺少头像!');
    }
    if (!(1 <= userInfo.bio.length && userInfo.bio.length <= 30)) {
        throw new Error('个人介绍请限制在1-30个字符内!');
    }
};