var loader = require('gulp-load-plugins')();
var gulp = require("gulp");
var less = require('gulp-less');
var clean = require('gulp-clean');
var browserify = require("gulp-browserify");
var path = require("path");
//更名
var rename = require('gulp-rename');
//压缩js
var uglify = require('gulp-uglify');
//实时检测
var connect = require('gulp-connect');
//node报错友好提示
var plumber = require('gulp-plumber');

var gulpReact = require('gulp-react');


var config = {
    browserify: "browserify",
    browserifyPort: 12580,
    react: "react",
    reactPort: 12550
};

//清理css文件夹
gulp.task('clean-browserify-css', function () {
    return gulp;
    return gulp.src(config.browserify + '/css/**/*.*', {
        read: false
    }).pipe(clean({force: true}));
});

gulp.task('browserify-less', ['clean-browserify-css'], function () {
    return gulp.src([config.browserify + '/less/**/*.less'])
        .pipe(less({
            project: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(config.browserify + '/css/'))
});
//browserify-test
gulp.task('browserify-js', function () {
    return gulp.src(config.browserify + '/script/pages/*.*')
        .pipe(plumber())
        .pipe(browserify())
        .pipe(gulp.dest(config.browserify + '/script/dist'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({
            mangle: {except: ['require', '$', 'define', 'module', "exports", "use", "config"]}
        }))
        .pipe(gulp.dest(config.browserify + '/script/dist'))
});

//创建服务器
gulp.task('browserify-connect', function () {
    connect.server({
        host: '127.0.0.1',           //Server host
        root: "./",
        port: config.browserifyPort,
        debug: true,
        livereload: true
    });
});

gulp.task('watcher-browserify-less', ['browserify-less'], function () {
    gulp.watch(config.browserify + '/less/**/*.less', ['browserify-less', "browserify-js-reload"]); //当less文件发生改变时，自动编译成css
});
//重新reload
gulp.task('browserify-less-reload', ['browserify-less'], function () {
    gulp.src([config.browserify + '/html/**/*.html'])
        .pipe(connect.reload());

});
gulp.task('watcher-browserify-js', ['browserify-js'], function () {
    gulp.watch([config.browserify + '/script/pages/**/*.js'], ['browserify-js', 'browserify-less-reload']);
});

//重新reload
gulp.task('browserify-js-reload', ['clean-browserify-css', 'browserify-js'], function () {
    gulp.src([config.browserify + '/html/**/*.html'])
        .pipe(connect.reload());
});

//重新reload
gulp.task('browserify-html-reload', function () {
    gulp.src([config.browserify + '/html/**/*.html'])
        .pipe(connect.reload());
});

//重新reload
gulp.task('watcher-browserify-html', function () {
    gulp.watch([config.browserify + '/html/**/*.html'], ['browserify-html-reload']);
});

//2016.10.10 react服务器搭建
//创建服务器
gulp.task('react-connect', function () {
    connect.server({
        host: '127.0.0.1',           //Server host
        root: "./",
        port: config.reactPort,
        debug: true,
        livereload: true
    });
});


gulp.task('default', ['watcher-browserify-js', 'watcher-browserify-less', 'watcher-browserify-html', 'browserify-connect'], function () {
    console.log("default task done");
});

//重新reload
gulp.task('watcher-react-jsx', function () {
    gulp.watch([config.react + '/myreact/**/*.*'], ['react-build']);
});

gulp.task('react-build', function () {
    return gulp.src([config.react + '/myreact/**/*.jsx'])
        .pipe(gulpReact())
        .pipe(gulp.dest(config.react + '/static/'));
});

gulp.task('reactTask', ['react-connect', 'react-build', 'watcher-react-jsx'], function () {
    console.log("react task done");
});
