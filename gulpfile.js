var path = require('path');
var fs = require('fs');
var yargs = require('yargs').argv;
var gulp = require('gulp');
var header = require('gulp-header');
var tap = require('gulp-tap');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

var option = {
    base: 'src'
};
var dist = __dirname + '/dist';

gulp.task('zen:copy', function() {
    return gulp.src(['src/lib/*.js', 'src/favicon.ico', 'src/index.html'], option)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('zen:js', function() {
    return gulp.src(['src/js/*.js', 'src/zen/*/index.js'], option)
        .pipe(uglify())
        .pipe(concat('zen.js'))
        .pipe(gulp.dest('dist/zen'))
});

gulp.task('zen:css', function() {
    return gulp.src(['src/css/*.css', 'src/zen/*/index.css'], option)
        .pipe(nano({
            zindex: false
        }))
        .pipe(concat('zen.css'))
        .pipe(gulp.dest('dist/zen'))
});

gulp.task('zen:html', function() {
    var html_opt = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    return gulp.src('src/zen/*/index.html', option)
        .pipe(htmlmin(html_opt))
        .pipe(concat('zen.html'))
        .pipe(gulp.dest('dist/zen'))
});

gulp.task('zen:combine', ['zen:js', 'zen:css', 'zen:html'], function() {
    return gulp.src(['dist/zen/zen.js', 'dist/zen/zen.css', 'dist/zen/zen.html'], option)
        .pipe(tap(function(file) {
            console.log(file.path);
            var contents = file.contents.toString();
            var _path = file.path.replace(/\\/g, "/");
            var pos = _path.indexOf("views/");
            var pathname = _path.substring(pos, _path.length);
            if (pathname.indexOf("zen.css") > -1) {
                var toname = "Zen.css";
                var prefix = toname + ' = function() {/*<style>';
                var suffix = '</style>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            } else if (pathname.indexOf("zen.html") > -1) {
                var toname = "Zen.modules";
                var prefix = toname + ' = function() {/*';
                var suffix = '*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            }
        }))
        .pipe(concat('zenjs.min.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:html', function() {
    var html_opt = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    return gulp.src('src/views/**/*.html', option)
        .pipe(htmlmin(html_opt))
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = file.contents.toString();
            var _path = file.path.replace(/\\/g, "/");
            var pos = _path.indexOf("views/");
            var pathname = _path.substring(pos, _path.length);
            var toname = pathname.replace(".html", "").replace(/\//g, ".").replace(/-/g, "_");
            var prefix = toname + ' = function() {/*';
            var suffix = '*/}'
            contents = prefix + contents + suffix;
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views.js'))
        .pipe(gulp.dest('dist/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:js', function() {
    var html_opt = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    return gulp.src('src/views/**/*.js', option)
        .pipe(uglify())
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = file.contents.toString();
            var _path = file.path.replace(/\\/g, "/");
            var pos = _path.indexOf("views/");
            var pathname = _path.substring(pos, _path.length);
            var toname = pathname.replace(".js", "").replace(/\//g, ".").replace(/-/g, "_");
            var prefix = toname + ' = function() {/*<script>';
            var suffix = '</script>*/}'
            contents = prefix + contents + suffix;
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_script.js'))
        .pipe(gulp.dest('dist/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:combine', ['views:html', 'views:js'], function() {
    return gulp.src(['dist/views/views.js', 'dist/views/views_script.js'], option)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('release:zepto', ['build:zen'], function() {
    return gulp.src(['dist/lib/zepto.min.js', 'dist/lib/zenjs.min.js'], option)
        .pipe(concat('zenjs-zepto.min.js'))
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('release:jquery', ['build:zen'], function() {
    return gulp.src(['dist/lib/jquery-2.1.1.min.js', 'dist/lib/zenjs.min.js'], option)
        .pipe(concat('zenjs-jquery.min.js'))
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('server', function() {
    yargs.p = yargs.p || 40001;
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        startPath: '/'
    });
});

gulp.task('watch', ['release'], function() {
    gulp.watch('src/views/**/*', ['build:views']);
    gulp.watch('src/css/*.css', ['build:zen']);
    gulp.watch('src/js/*.js', ['build:zen']);
    gulp.watch('src/zen/**/*', ['build:zen']);
});

// 参数说明
//  -w: 实时监听
//  -s: 启动服务器
//  -p: 服务器启动端口，默认8080
gulp.task('default', ['release'], function() {
    gulp.start('release');
    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }
});

gulp.task('build:zen', ['zen:copy', 'zen:js', 'zen:css', 'zen:html', 'zen:combine']);
gulp.task('build:views', ['views:html', 'views:js', 'views:combine']);
gulp.task('release', ['build:zen', 'build:views','release:zepto','release:jquery']);
