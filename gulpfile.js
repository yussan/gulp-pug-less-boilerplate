const gulp = require('gulp'),
    path = require('path'),
    pug = require('gulp-pug'),
    less = require('gulp-less')
browserSync = require('browser-sync');

const SITE_DIR = '_site',
    LESS_DIR = 'less',
    CSS_DIR = '_site/css';

/**
 * pug compiler
 */
gulp.task('pug', function(){
    gulp.src('*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(SITE_DIR))
        .pipe(browserSync.reload({stream: true}))
})

/**
 * less compiler
 */
gulp.task('less', function(){
    return gulp.src(LESS_DIR + '/*.less')
        .pipe(less({
            includePaths: LESS_DIR,
        }))
        .pipe(gulp.dest(CSS_DIR))
        .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', ['less', 'pug'],function(){
    browserSync({
        server: {baseDir: SITE_DIR},
        notify: true
    })
})

gulp.task('watch', function(){
    gulp.watch(LESS_DIR + '/**', ['less'])
    gulp.watch(['*pug', '**/*.pug'], ['pug'])
})

gulp.task('default', ['browser-sync', 'watch'])