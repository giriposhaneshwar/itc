/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    // place code for your default task here
    console.log("hellow world");
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
