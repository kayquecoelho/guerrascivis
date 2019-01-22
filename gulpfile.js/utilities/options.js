// Plugins
const { imageminPngquant } = require('../plugins/imagemin');

const options = {
  htmlmin: {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true
  },
  postcss: {
    uncss: {
      html: ['src/index.html'],
      ignore: []
    }
  },
  imagemin: {
    verbose: true,
    use: [imageminPngquant()]
  },
  imageminPlugins: {
    gifsicle: {
      interlaced: true
    },
    jpegtran: {
      progressive: true
    },
    optipng: {
      optimizationLevel: 5
    },
    svgo: {
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    },
  },
  browserSync: {
    init: {
      server: {
        baseDir: "./build",
        index: "index.html",
        routes: {
            "/node_modules": "node_modules"
        }
      }
    }
  },
  sassDoc: {
    dest: 'docs/sassdoc'
  }
}

module.exports = {
  options
}