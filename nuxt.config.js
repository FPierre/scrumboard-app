module.exports = {
  head: {
    title: 'scrumboard-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Monitor your SCRUM' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    '@/assets/stylesheets/bulma-override.scss'
  ],
  plugins: [
    { src: '~plugins/vue-chartjs', ssr: false },
    { src: '~plugins/vue-scrollto' }
  ],
  build: {
    vendor: [
      'axios',
      'chart.js',
      'vue-chartjs',
      'vue-scrollto'
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
  }
}
