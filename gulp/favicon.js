const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('./source/pictures/favicon/**/*.*')
    .pipe(gulp.dest('./public_html/favicon'))
};