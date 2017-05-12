/**
 * @Author: lyx
 * @Date: 2017/5/11
 */
'use strict';


exports.reg = function regg(req, res) {
    return res.render('reg');
};

exports.register = function register(req, res) {
    var name = req.fields.name;
    var password = req.fields.password;
    var repassword = req.fields.repassword;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var avatar = req.files.avatar.path.split(path.sep).pop();


    return res.send('hahahah');
};