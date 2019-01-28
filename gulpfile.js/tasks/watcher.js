// Utilities
const { series, watch } = require(`../utilities/api`);
const { options } = require(`../utilities/options`);
const { pathTo, globFor } = require(`../utilities/paths`);

// Modules
const { browserSync } = require(`../modules/browserSync`);

// Dependency tasks
const { compileSass } = require(`./sassCompiler`);
const { copySourceStaticFiles } = require(`./builder`);
const { compileTS } = require(`./tsCompiler`);
const { bundleJS } = require(`./jsBundler`);

// Main task
function watchTasks() {
  const watchTS = watch(pathTo.tsFiles);
  const watchSass = watch(pathTo.sassFiles);
  const watchImages = watch(`src/${globFor.images}`);
  const watchStatic = watch(pathTo.srcStaticFiles);

  browserSync.init(options.browserSync.init);

  watchSass.on(`all`, series(compileSass, browserSync.reload));
  
  watchTS.on(`all`, series(compileTS, bundleJS, browserSync.reload));

  watchImages.on(`all`, series(browserSync.reload));
  
  watchStatic.on(`all`, series(copySourceStaticFiles, browserSync.reload));
}

module.exports = {
  watchTasks
};