// Utilities
const { src } = require('../utilities/api');
const { options } = require('../utilities/options');
const { pathTo } = require('../utilities/paths');

// Plugins
const { sassDoc } = require('../modules/modules.manifest');

function buildSassDoc() {

  return  src(pathTo.sassFiles)
            .pipe(sassDoc(options.sassDoc));
}

module.exports = {
  buildSassDoc
}