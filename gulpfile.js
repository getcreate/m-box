const gulp = require('gulp');
const script = require('./gulp/scripts');
const fonts = require('./gulp/fonts');
const favicon = require('./gulp/favicon');
const webp = require('./gulp/webp');
const imagesMin = require('./gulp/imageMin');
const styles = require('./gulp/styles');
const clean = require('./gulp/clean');
const pug2html = require('./gulp/pug');
const spriteSVG = require('./gulp/spriteSVG');
const serve = require('./gulp/serve');

const dev = gulp.parallel(pug2html, script, styles, favicon, imagesMin, webp, spriteSVG, fonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);
