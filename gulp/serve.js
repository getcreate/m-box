const gulp = require('gulp');

const imagesMin = require('./imageMin');
const svgSprite = require('./spriteSVG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');
const webp = require('./webp');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: 'public_html',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch([
    './source/pictures/content/**/*.{jpg,jpeg,png}',
    './source/pictures/images/**/*.{jpg,jpeg,png}'
  ], gulp.series(webp)).on('change', server.reload);
  gulp.watch('./source/pictures/**/*.{gif,png,jpg,svg,webp}', gulp.series(imagesMin)).on('change', server.reload);
  gulp.watch('./source/pictures/icons/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('./source/styles/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('./source/scripts/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('./source/pages/**/*.pug', gulp.series(pug2html));
  gulp.watch('./public_html/*.html').on('change', server.reload);

  return cb()
};
