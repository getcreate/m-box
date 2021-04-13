const del = require('del');

// Полностью удаляем папку dist

module.exports = function clean(cb) {
  return del('public_html').then(() => {
    cb()
  })
};
