import scrumApi from '../api/scrum'

export const state = () => ({
  id: null,
  points: {}
})

export const getters = {
  velocity (state, getters, rootState, rootGetters) {
    return Math.round(rootGetters['sprint/pointsDone'] / rootState.sprint.all.length)
  },

  plannedPoints (state) {
    return state.points.planned
  },

  unplannedPoints (state) {
    return state.points.unplanned
  }
}

export const actions = {
  async all ({ commit }) {
    const { scrum } = await scrumApi.all()
    const { sprints } = scrum

    delete scrum.sprints

    commit('updateScrum', { scrum })
    commit('sprint/updateSprints', { sprints }, { root: true })
  }
}

export const mutations = {
  updateScrum (state, { scrum }) {
    state.id = scrum.id
    state.points = scrum.points
    state.sprints = scrum.sprints
  }
}
