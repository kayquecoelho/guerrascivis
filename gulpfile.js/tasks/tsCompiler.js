// Utilities
const { src, dest } = require('../utilities/api');
const { pathTo } = require('../utilities/paths');

// Plugins
const { ts, sourcemaps } = require('../plugins/plugins.manifest');

// Main task
// Typescript project configuration file
const tsProject = ts.createProject('tsconfig.json');

function compileTS() {
  const tsResult = src(pathTo.tsFiles)
                    .pipe(sourcemaps.init())
                    .pipe(tsProject())
                    .pipe(sourcemaps.write('./'));

  return tsResult
          .pipe(dest('./src/js/'));
}

module.exports = {
  compileTS
};