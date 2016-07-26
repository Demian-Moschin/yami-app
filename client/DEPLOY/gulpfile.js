var babelify = require('babelify');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulpConf = require('./gulp/gulp-conf');
var es2015 = require('babel-preset-es2015');
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var run = require('run-sequence');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

gulp.task('sass', function () {
    var bundle = gulp.src(gulpConf.css.origin).pipe(sass()).on('error', function (error) {
        console.log(error);
        this.emit('end');
    });

    return bundle.pipe(concat('style.css')).pipe(gulp.dest(gulpConf.css.dest));
});

gulp.task('sources', function () {

    return gulp.src(['./images/**/*'])
        .pipe(gulp.dest('../build/images'));
});

gulp.task('fonts', function () {

    return gulp.src([gulpConf.fonts.origin])
        .pipe(gulp.dest(gulpConf.fonts.dest));
});

gulp.task('js', function () {
    browserify({
            entries: ['./js/bin/materialize.js'] //can receive multiple entries
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('../build/js/'));
});

gulp.task('js2', function () {
    browserify({
            entries: ['./index.js'] //can receive multiple entries
        })
        .transform(babelify.configure({
            presets: ["es2015", "react"]
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('../build/js/'));
});

gulp.task('html', function () {
    var bundle = gulp.src(gulpConf.html.origin).pipe(handlebars()).on('error', function (error) {
        console.log(error);
        this.emit('end');
    });

    return bundle.pipe(gulp.dest(gulpConf.html.dest));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        open: false,
        server: {
            baseDir: '../build/'
        },
        port: '8080'
    });

    gulp.watch([
        'stores/**/*.js',
        'actions/*.js',
        'WebAPI UTILS/*.js',
        'index.js',
        'components/**/*.js',
        'libs/**/*.js',
        'views/**/*.js'
    ], ['js2', browserSync.reload]);
    gulp.watch([
        'html/**/*.html'
    ], ['html', browserSync.reload]);
    gulp.watch([
        'components/**/*.scss',
        'sass/**/*.scss',
        'views/**/*.scss'
    ], ['sass', browserSync.reload]);
});

gulp.task('default', function (cb) {
    run('html', 'js', 'js2', 'sass', 'sources', 'fonts', 'browser-sync', cb);
});
