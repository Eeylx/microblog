/**
 * @Author : lyx
 * @Date : 2017/5/9
 */
'use strict';

module.exports = {

    /**
     * 检测是否是已登录状态
     */
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            return res.redirect('/reg');
        }
        next();
    },

    /**
     * 检测是否是未登录状态
     */
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            return res.redirect('back');
        }
        next();
    }
};