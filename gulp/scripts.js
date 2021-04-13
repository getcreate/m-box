const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('./source/scripts/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(argv.prod, terser()))
    .pipe(gulp.dest('./public_html/assets/js/'));
};
