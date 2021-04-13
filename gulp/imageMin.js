const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const argv = require('yargs').argv;

module.exports = function imageMinify() {
  return gulp.src(
    ['./source/pictures/**/*.{gif,png,jpg,svg,webp}',
    '!./source/pictures/favicon/*',
    '!./source/pictures/icons/*',
    '!./source/pictures/images/**/*',
    './source/pictures/images/**/*.{gif,png,jpg,svg,webp}']
  )
    .pipe(buffer())
    .pipe(gulpif(argv.prod, imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ])))
    .pipe(gulp.dest('public_html/assets/img'))
};
