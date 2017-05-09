/**
 * @Author: lyx
 * @Date: 2017/5/9
 * @param app
 */
'use strict';



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: 'Express'});
    });


};
