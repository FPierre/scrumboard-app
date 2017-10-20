const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  head: {
    title: 'scrumboard-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Monitor your SCRUM' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    '@/assets/stylesheets/bulma-override.scss'
  ],
  modules: [
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    { src: '~plugins/vue-chartjs', ssr: false },
    { src: '~plugins/vue-scrollto' },
    { src: '~plugins/vue-touch', ssr: false }
  ],
  build: {
    vendor: [
      'axios',
      'chart.js',
      'vue-chartjs',
      'vue-scrollto',
      'vue-touch'
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware (add /api/login & /api/logout routes)
    '~/api'
  ]
}
