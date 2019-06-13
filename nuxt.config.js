module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxttest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/brands.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/fontawesome.css'}
    ],
    script: [
      { src: 'https://code.iconify.design/1/1.0.2/iconify.min.js' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: [
      require('postcss-nested')(),
      require('postcss-simple-vars')(),
      require('postcss-color-function')(),
    ]
  }
}
