/**
 * @Author: lyx
 * @Date: 2017/5/22
 *
 * 更多用法请参考multer的官方地址:
 *      https://github.com/expressjs/multer
 */
'use strict';

var multer = require('multer');

// diskStorage: 磁盘存储, memoryStorage: 内存存储
var storage = multer.diskStorage({
    // 设置上传后的文件路径, avatar文件夹会自动创建
    destination: function (req, file, cb) {
        cb(null, '/public/avatar');
    },
    // 给上传的文件重命名, 获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split('.');
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
});

// 添加配置文件到multer对象
var upload = multer({
    storage: storage
});


module.exports = upload;