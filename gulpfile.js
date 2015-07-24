"use strict";

var gulp = require('gulp'),
    angularFilesort = require('gulp-angular-filesort'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    naturalSort = require('gulp-natural-sort'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat');



gulp.task('js:compile', function() {
    return gulp.src('./app/scripts/**/*.js')
        .pipe(naturalSort())
        .pipe(angularFilesort())
        .pipe(concat('all.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('vendorJs:concat', function() {
    return gulp.src([
        'app/bower_components/angular/angular.min.js',
        'app/bower_components/angular-route/angular-route.min.js'
    ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./dist/vendor/'))
});

gulp.task('vendorCss:copy', function() {
    return gulp.src('app/bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./dist/vendor'))
});

gulp.task('css:copy', function() {
    return gulp.src('app/styles/main.css')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('templates:copy', function() {
    return gulp.src('./app/templates/**/*.html')
        .pipe(gulp.dest('./dist/templates/'));
});

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('build', ['vendorJs:concat', 'js:compile', 'vendorCss:copy', 'css:copy', 'templates:copy'], function() {

    var target = gulp.src('./app/index.html');
    var sources = gulp.src([
        './dist/vendor/*.{js,css}', './dist/all.js', './dist/main.css'
    ], {read: false});

    return target.pipe(inject(sources, {ignorePath: 'dist/', addRootSlash: false}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean'], function() {
    return gulp.start('build');
});