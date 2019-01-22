// Utilities
const { src, dest } = require('../utilities/api');
const { options } = require('../utilities/options');

// Plugins
const { useref, gulpIf, uglify, htmlmin } = require('../plugins/plugins.manifest');
const { postcss, autoprefixer, cssnano, uncss } = require('../plugins/postcss');

// Main task
function optimizeCode() {
  const postcssPlugins = [
    cssnano(),
    autoprefixer(),
    uncss(options.postcss.uncss),
  ];

  return src('build/*.html')
          .pipe(useref())
          .pipe(gulpIf('*.js', uglify()))
          .pipe(gulpIf('*.css', postcss(postcssPlugins)))
          .pipe(gulpIf('*.html', htmlmin(options.htmlmin)))
          .pipe(dest('dist'));
}

module.exports = {
  optimizeCode
};