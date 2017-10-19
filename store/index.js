import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const getters = {
  isAuth (state) {
    return !!state.authUser
  }
}

export const actions = {
  // Called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit, dispatch }, { req }) {
    console.log('nuxtServerInit')
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }

    dispatch('sprint/all')
  },

  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }

      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}
