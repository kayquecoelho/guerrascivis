const globFor = {
  images: `**/*.{ico,png,jpeg,gif,svg}`,
  fonts: `**/*.{ttf,eot,woff,woff2}`,
  html: `**/*.html`,
}

const pathTo = {
  sassFiles: `./src/scss/**/*.scss`,
  tsFiles: `./src/ts/**/*.ts`,
  fontsFiles: `./assets/fonts/**/*`,
  imagesFiles: `./assets/img/**/*`,

  srcStaticFiles: [
    `./src/${globFor.html}`,
    `./src/${globFor.fonts}`,
    `./src/${globFor.images}`
  ],
  
  buildStaticFiles: [
    `./build/${globFor.fonts}`,
  ]
}

module.exports = {
  pathTo,
  globFor
}