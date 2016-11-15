var path = require('path');
var fs = require('fs');
var yargs = require('yargs').argv;
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var tap = require('gulp-tap');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

var option = {
    base: 'src'
};
var dist = __dirname + '/dist';

gulp.task('build:style', function() {
    var banner = [
        '/*!',
        ' * WeUI v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n');
    gulp.src('src/style/weui.less', option)
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(nano({
            zindex: false
        }))
        .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('build:example:assets', function() {
    gulp.src('src/example/**/*.?(png|jpg|gif|js)', option)
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example:style', function() {
    gulp.src('src/example/example.less', option)
        .pipe(less().on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(nano({
            zindex: false
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example:html', function() {
    gulp.src('src/example/index.html', option)
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            var contents = file.contents.toString();
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function(match, $1) {
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return '<script type="text/html" id="tpl_' + id + '">\n' + content + '\n</script>';
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example', ['build:example:assets', 'build:example:style', 'build:example:html']);

gulp.task('release', ['build:style', 'build:example']);

gulp.task('watch', ['release'], function() {
    gulp.watch('src/style/**/*', ['build:style']);
    gulp.watch('src/example/example.less', ['build:example:style']);
    gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
    gulp.watch('src/**/*.html', ['build:example:html']);
});

gulp.task('server', function() {
    yargs.p = yargs.p || 8080;
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
        startPath: '/example'
    });
});

// 参数说明
//  -w: 实时监听
//  -s: 启动服务器
//  -p: 服务器启动端口，默认8080
gulp.task('default', ['release'], function() {
    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }
});

gulp.task('light', function() {
    yargs.p = yargs.p || 40001;
    browserSync.init({
        server: {
            baseDir: "./src"
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


gulp.task('copy', function() {
    return gulp.src(['src/index.html','src/lib/*.js','src/example/*','src/example/*/*','src/views/*','src/views/*/*'], option)
        .pipe(gulp.dest('dist'))
});

gulp.task('zen:js', function() {
    return gulp.src(['src/js/*.js','src/zen/*/index.js'], option)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist'))
        // .pipe(rename('zen.min.js'))
        // .pipe(gulp.dest('dist'));
});
gulp.task('zen:css', function() {
    return gulp.src(['src/css/*.css','src/zen/*/index.css'], option)
        .pipe(concat('common.css'))
        .pipe(gulp.dest('dist'))
        // .pipe(rename('zen.min.js'))
        // .pipe(gulp.dest('dist'));
});
gulp.task('zen:html', function() {
    return gulp.src('src/zen/*/index.html', option)
        .pipe(concat('zen.html'))
        .pipe(gulp.dest('dist'))
        // .pipe(rename('zen.min.js'))
        // .pipe(gulp.dest('dist'));
});

gulp.task('zen:watch', ['release'], function() {
    gulp.watch('src/common.css', ['build:style']);
    gulp.watch('src/example/example.less', ['build:example:style']);
    gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
    gulp.watch('src/**/*.html', ['build:example:html']);
});

gulp.task('zen:server', function() {
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

gulp.task('zen', ['copy','zen:js', 'zen:css', 'zen:html', 'zen:server']);
