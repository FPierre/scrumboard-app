import axios from 'axios'

const nuxtApi = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

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
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }

    await dispatch('scrum/all')
  },

  async login ({ commit }, { username, password }) {
    try {
      const { data } = await nuxtApi.post('login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }

      throw error
    }
  },

  async logout ({ commit }) {
    await nuxtApi.post('logout')
    commit('SET_USER', null)
  }
}

export const mutations = {
  SET_USER: (state, user) => {
    state.authUser = user
  }
}
