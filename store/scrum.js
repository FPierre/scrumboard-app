import scrumApi from '../api/scrum'

export const state = () => ({
  points: {}
})

export const getters = {
  velocity (state, getters) {
    return Math.round(getters.pointsDone / state.sprints.length)
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

    commit('updateScrum', { scrum })
  }
}

export const mutations = {
  updateScrum (state, { scrum }) {
    state.id = scrum.id
    state.points = scrum.points
    state.sprints = scrum.sprints
  }
}
