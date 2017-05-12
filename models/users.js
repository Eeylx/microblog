/**
 * @Author: lyx
 * @Date: 2017/5/11
 */
'use strict';

var User = require('../lib/mongo').User;

module.exports = {

    // 注册 创建一个新用户
    create: function create(user){
        return User.create(user).exec();
    }

};