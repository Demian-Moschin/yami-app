var gulp = require('gulp');
var run = require('run-sequence');
var sass = require('gulp-sass');
var browserify = require('browserify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var handlebars = require('gulp-compile-handlebars');

gulp.task('sass', function () {
    var bundle = gulp.src('./sass/materialize.scss').pipe(sass()).on('error', function (error) {
        console.log(error);
        this.emit('end');
    });

    return bundle.pipe(concat('style.css')).pipe(gulp.dest('../build/css/'));
});

gulp.task('sources', function () {

    return gulp.src(['./images/**/*'])
        .pipe(gulp.dest('../build/images'));
});


gulp.task('js', function () {
    var bundle = browserify('./index.js', {debug: true})
                    .transform(reactify)    
                    .bundle()
                    .on('error', function (error) {
                        console.log('no se pudo load el js !!!' + error);
                        this.emit('end');
                    });
    bundle.pipe(source('boundle.js'));


    return gulp.src([bundle, ' '])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('../build/js/'));
});

gulp.task('html', function () {
    var bundle = gulp.src('./html/index.html').pipe(handlebars()).on('error', function (error) {
        console.log(error);
        this.emit('end');
    });

    return bundle.pipe(gulp.dest('../build'));
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
    ], ['js', browserSync.reload]);
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
    run('html', 'js', 'sass', 'sources', 'browser-sync', cb);
});
