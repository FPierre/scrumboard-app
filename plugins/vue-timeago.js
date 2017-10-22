import Vue from 'vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})
