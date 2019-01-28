// Utilities
const { series } = require('./utilities/api');

// Private tasks
const { runOptmizer } = require('./tasks/optmizer');
const { watchTasks } = require('./tasks/watcher');
const { deployFiles } = require('./tasks/deployer');
const { buildFiles, copyBuildStaticFiles } = require('./tasks/builder');
const { buildSassDoc } = require('./tasks/sassDoc');
const { cleanDist } = require('./tasks/folderCleaner');

const optmizeFiles = series(buildFiles, cleanDist, copyBuildStaticFiles, runOptmizer);

// Public tasks
exports.build = buildFiles;

exports.serve = series(buildFiles, watchTasks);

exports.release = optmizeFiles;

exports.deploy = series(optmizeFiles, deployFiles);

exports.sassdoc = series(buildSassDoc);
