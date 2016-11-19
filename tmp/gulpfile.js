gulp.task('views:one', function() {
    var path = "tmp/views";
    return gulp.src(['src/views/index.*'], option)
        .pipe(tap(function(file) {
            console.log(file.path);
            // console.log(path.dirname(file.path));
            var _path = file.path.replace(/\\/g, "/");
            if (_path.indexOf(".css") > -1) {
                var toname = "views." + file.name;
                var prefix = toname + ' = function() {/*<style>';
                var suffix = '</style>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            } else if (_path.indexOf(".js") > -1) {
                var toname = "views." + file.name;
                var prefix = toname + ' = function() {/*<script>';
                var suffix = '<script>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            }
        }))
        .pipe(concat('index.html'))
        .pipe(gulp.dest(path))
});

gulp.task('views:two', function() {
    var path = "tmp/views";
    var parent = "src/views";
    return gulp.src(['src/views/*/*'], option)
        .pipe(tap(function(file) {
            console.log(file.path);
            var _path = file.path.replace(/\\/g, "/");
            var pos = _path.indexOf("src/");
            var pathname = _path.substring(pos, _path.length);
            if (pathname.indexOf(".") == -1) {
                combine(pathname);
            } else {

            }
        }))
});

function combine(source) {
    var dist = source.replace("src", "tmp");
    var name = source.split("/").pop();
    console.log(name + " source " + source);
    return gulp.src(source, option)
        .pipe(tap(function(file) {

            // console.log(path.dirname(file.path));
            var _path = file.path.replace(/\\/g, "/");
            console.log("combine :" + _path);
            if (_path.indexOf(".css") > -1) {
                var toname = "views." + file.name;
                var prefix = toname + ' = function() {/*<style>';
                var suffix = '</style>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            } else if (_path.indexOf(".js") > -1) {
                var toname = "views." + file.name;
                var prefix = toname + ' = function() {/*<script>';
                var suffix = '<script>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            }
        }))
        .pipe(concat(name + '.html'))
        .pipe(gulp.dest(dist))
}

gulp.task('views:three', function() {
    return gulp.src(['src/views/**/*'], option)
        .pipe(tap(function(file) {
            console.log(file.path);
            // console.log(path.dirname(file.path));
            var _path = file.path.replace(/\\/g, "/");
            if (_path.indexOf(".") > -1) {

            } else {
                var toname = "views." + file.name;
                var prefix = toname + ' = function() {/*<script>';
                var suffix = '<script>*/}';
                contents = prefix + contents + suffix;
                file.contents = new Buffer(contents);
            }
        }))
        .pipe(concat('index.html'))
        .pipe(gulp.dest(path))
});
