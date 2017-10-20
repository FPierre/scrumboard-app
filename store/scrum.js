import scrumApi from '../api/scrum'

export const state = () => ({
  // currentSprint: {},
  points: {},
  sprints: [],
  velocity: 0
})

export const getters = {
  pointsDone (state) {
    return state.sprints.map(s => s.points.done)
  },

  findBy (state, { id }) {
    return state.sprints.find(s => s.id === id)
  }
}

export const actions = {
  async all ({ commit }) {
    const { scrum } = await scrumApi.all()
    commit('all', { scrum })
  }
}

export const mutations = {
  all (state, { scrum }) {
    // state.currentSprint = [...scrum.sprints].pop()
    state.points = scrum.points
    state.sprints = scrum.sprints
    state.velocity = scrum.velocity
  }
}
