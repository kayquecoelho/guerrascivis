// Utilities
const { src, dest, series, parallel } = require('../utilities/api');
const { pathTo } = require('../utilities/paths');

// Dependency tasks
const { cleanBuild } = require('./folderCleaner');
const { generateCode } = require('./codeGenerator');

// Tasks
function copySourceStaticFiles() {

  return src(pathTo.srcStaticFiles)
          .pipe(dest('build/'));
}

function copyBuildStaticFiles() {

  return src(pathTo.buildStaticFiles)
          .pipe(dest('dist/'));
}

const buildFiles = series(
                    cleanBuild, 
                    parallel(copySourceStaticFiles, generateCode)
                  );

module.exports = {
  buildFiles,
  copySourceStaticFiles,
  copyBuildStaticFiles
}