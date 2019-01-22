// Official Gulp plugins
const sourcemaps = require('gulp-sourcemaps');
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const cache = require('gulp-cache');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');

const { postcss, autoprefixer, uncss, cssnano } = require('./postcss');
const { imagemin, imageminPngquant } = require('./imagemin');

module.exports = {
  // Official
  sourcemaps,
  htmlmin,
  ts,
  uglify,
  useref,
  cache,
  sass,
  gulpIf,
  postcss,
  imagemin,
  ghPages,
  // Third party dependency plugins
    // PostCSS
    autoprefixer,
    uncss,
    cssnano,
    // ImageMin
    imageminPngquant
}