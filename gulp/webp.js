const gulp = require('gulp');
const webP = require('gulp-webp')
const imagemin = require('gulp-imagemin');

module.exports = function webp() {
  return gulp.src(['./source/pictures/**/*.{jpg,jpeg,png}',
  '!./source/pictures/favicon/*',
  '!./source/pictures/icons/*',
  '!./source/pictures/images/**/*',
  './source/pictures/images/**/*.{jpg,jpeg,png}'
])
    .pipe(webP(
      imagemin({
        lossless: true,
        quality: 100,
        alphaQuality: 100,
      })
    )
    )
    .pipe(gulp.dest('./public_html/assets/img/'));
}
