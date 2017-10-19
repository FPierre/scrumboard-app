import sprints from '../api/sprints'

export const state = () => ({
  all: [],
  current: {}
})

export const getters = {
  findBy (state, { id }) {
    return state.all.find(s => s.id === id)
  }
}

export const actions = {
  async all ({ commit }) {
    await sprints.all(sprints => commit('all', { sprints }))
  }
}

export const mutations = {
  async all (state, { sprints }) {
    state.all = sprints
    state.current = [...sprints].pop()
  }
}
