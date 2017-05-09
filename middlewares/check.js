/**
 * @Author : lyx
 * @Date : 2017/5/9
 */
'use strict';

module.exports = {

    /**
     * 检测是否已登录
     */
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            return res.redirect('/signin');
        }
        next();
    },

    /**
     * 检测是否未登录
     */
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            return res.redirect('back');
        }
        next();
    }
};