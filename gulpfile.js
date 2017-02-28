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
var gutil = require('gulp-util')
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

var option = {
    base: 'src'
};
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
var dist = __dirname + '/dist';

var ZEN = {
    path2name: function(path) {
        var _path = path.split("/");
        var name = "";
        for (var i = 0; i < _path.length; i++) {
            var item = _path[i];
            if (item) {
                name += '["' + item + '"]';
            }
        }
        return name;
    },
    to_method: function(file, name) {
        var self = this;
        var contents = file.contents.toString();
        var _path = file.path.replace(/\\/g, "/");
        var pos = _path.indexOf("views/") + 6;
        var pathname = _path.substring(pos, _path.length);
        var prefix = suffix = "";
        var toname = "Zen.views" + '["' + pathname + '"]';
        if (name) {
            toname = "Zen.views" + '["' + name + '"]';
        }
        console.log("toname:" + toname);
        if (pathname.indexOf(".css") > -1) {
            prefix = toname + ' = function() {/*<style>';
            suffix = '</style>*/}';
        } else if (pathname.indexOf(".js") > -1) {
            prefix = toname + ' = function() {/*<script>';
            suffix = '</script>*/}'
        } else {
            prefix = toname + ' = function() {/*';
            suffix = '*/}'
        }
        contents = prefix + this.encode(contents) + suffix;
        return contents;
    },
    encode: function(contents) {
        if (contents) {
            contents = contents.replace(/\/\*/g, "__block_head__").replace(/\*\//g, "__block_foot__")
            return contents;
        } else {
            return "";
        }
    }
}


gulp.task('zen:js', function() {
    return gulp.src(['zen/js/*.js', 'zen/module/*/index.js'], option)
        // .pipe(uglify())
        .pipe(uglify().on('error', function(e) {
            console.log(e);
        }))
        .pipe(concat('zen.js'))
        .pipe(gulp.dest('tmp/zen'))
});

gulp.task('zen:css', function() {
    return gulp.src(['zen/css/*.css', 'zen/module/**/*.css'], option)
        .pipe(sourcemaps.init())
        .pipe(nano({
            zindex: false
        }))
        .pipe(concat('zen.css'))
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('tmp/zen'))
});

gulp.task('zen:html', function() {
    return gulp.src('zen/module/*/index.html', option)
        .pipe(htmlmin(html_opt))
        .pipe(concat('zen.html'))
        .pipe(gulp.dest('tmp/zen'))
});

gulp.task('zen:combine', ['zen:js', 'zen:css', 'zen:html'], function() {
    return gulp.src(['tmp/zen/zen.js', 'tmp/zen/zen.css', 'tmp/zen/zen.html'], option)
        .pipe(tap(function(file) {
            console.log(file.path);
            if (file.path.indexOf("zen.css") > -1) {
                var contents = ZEN.to_method(file,"zen_css");
                file.contents = new Buffer(contents);
            } else if (file.path.indexOf("zen.html") > -1) {
                var contents = ZEN.to_method(file,"zen_modules");
                file.contents = new Buffer(contents);
            }
        }))
        .pipe(concat('zenjs.min.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('views:copy', function() {
    return gulp.src(['src/assets/**/*', 'src/views/**/*', 'src/lib/**/*', 'src/blog/**/*', 'src/favicon.ico', 'src/index.html'], option)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:html', function() {
    return gulp.src('src/views/**/*.html', option)
        .pipe(htmlmin(html_opt))
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = ZEN.to_method(file);
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_html.js'))
        .pipe(gulp.dest('tmp/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:js', function() {
    return gulp.src('src/views/**/*.js', option)
        .pipe(uglify().on('error', function(e) {
            console.log(e);
        }))
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = ZEN.to_method(file);
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_js.js'))
        .pipe(gulp.dest('tmp/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:css', function() {
    return gulp.src('src/views/**/*.css', option)
        .pipe(nano({
            zindex: false
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = ZEN.to_method(file);
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_css.js'))
        .pipe(gulp.dest('tmp/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('views:md', function() {
    return gulp.src('src/views/**/*.md', option)
        .pipe(tap(function(file) {
            console.log(file.path);
            var contents = ZEN.to_method(file);
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_md.js'))
        .pipe(gulp.dest('tmp/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('common:css', function() {
    return gulp.src('src/assets/css/*.css', option)
        .pipe(concat('common_css.css'))
        .pipe(tap(function(file) {
            console.log(file.path);
            var contents = ZEN.to_method(file,"common_css");
            file.contents = new Buffer(contents);
        }))
        .pipe(rename('common_css.js'))
        .pipe(gulp.dest('tmp/views'))
});
gulp.task('common:js', function() {
    return gulp.src('src/assets/js/*.js', option)
        .pipe(concat('common_js.js'))
        .pipe(gulp.dest('tmp/views'))
});

gulp.task('views:combine', ['common:css', 'common:js', 'views:html', 'views:js', 'views:css', 'views:md'], function() {
    return gulp.src(['tmp/views/common_css.js', 'tmp/views/common_js.js', 'tmp/views/views_html.js', 'tmp/views/views_js.js', 'tmp/views/views_css.js', 'tmp/views/views_md.js'], option)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('release:zepto', ['build:zen'], function() {
    return gulp.src(['dist/lib/zepto.min.js', 'dist/lib/fastclick.min.js', 'dist/lib/zenjs.min.js'], option)
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
    gulp.watch('src/**/*', ['build:views']);
    gulp.watch('zen/**/*', ['build:zen', 'release:zepto']);
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

gulp.task('build:zen', ['zen:js', 'zen:css', 'zen:html', 'zen:combine']);
gulp.task('build:views', ['views:copy', 'common:css', 'common:js', 'views:html', 'views:js', 'views:css', 'views:md', 'views:combine']);
gulp.task('release', ['build:zen', 'build:views', 'release:zepto', 'release:jquery']);
