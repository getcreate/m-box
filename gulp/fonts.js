const gulp = require('gulp');

// Копируем все шрифты из папки dev в dist

module.exports = function fonts() {
  return gulp.src('./source/fonts/**/*.*')
    .pipe(gulp.dest('./public_html/assets/fonts'))
};
