var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');     // 设置网站图标
var logger = require('morgan');             // 关于http请求的日志中间件
var cookieParser = require('cookie-parser');    // 处理请求中的 cookie
var bodyParser = require('body-parser');    // 解析 req.body 中的内容
var session = require('express-session');   // session
var mongoStore = require('connect-mongo')(session); // 用于存储 session
var flash = require('connect-flash');       // 在网页上显示通知
// var formidable = require('express-formidable'); // 处理表单及文件上传的中间件

var config = require('config-lite')(__dirname); // 查找该目录下的config文件夹, 再查找default文件
var routes = require('./routes/index');     // 路由
var pkg = require('./package.json');

var app = express();


// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

// 设置网站图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
    name: config.session.key,   // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中, 使产生的 signedCookie 防篡改
    resave: true,             // 强制更新 session
    saveUninitialized: false, // 设置为 false, 强制创建一个 session, 即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间, 过期后 cookie 中的 session id 自动删除
    },
    store: new mongoStore({    // 将 session 存储到 mongodb
        url: config.mongodb   // mongodb 地址
    })
}));

// flash 中间件, 用来显示通知, 基于 session, 故需要放在 session 之后
app.use(flash());

// 处理表单及文件上传的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 设置模板全局常量, app.locals 上通常挂载常量信息
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};
// 添加模板必须的常量, res.locals 上通常挂载变量信息
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});
// 路由, 放在设置静态文件目录之后, 避免处理静态文件请求
app.use('/',routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
