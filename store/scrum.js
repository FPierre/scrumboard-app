import scrumApi from '../api/scrum'

export const state = () => ({
  points: {},
  sprints: [],
  velocity: 0
})

export const getters = {
  currentSprint (state) {
    return [...state.sprints].pop()
  },

  pointsDone (state) {
    return state.sprints.map(s => s.points.done)
  },

  plannedPoints (state) {
    return state.points.planned
  },

  unplannedPoints (state) {
    return state.points.unplanned
  },

  findBy (state, { id }) {
    return state.sprints.find(s => s.id === id)
  }
}

export const actions = {
  async all ({ commit }) {
    const { scrum } = await scrumApi.all()

    commit('updateScrum', { scrum })
  },

  async createSprint ({ commit, state }, sprint) {
    commit('appendSprint', sprint)

    const { points, sprints, velocity } = state
    const { scrum } = await scrumApi.create({ points, sprints, velocity })

    commit('updateScrum', { scrum })
  }
}

export const mutations = {
  appendSprint (state, { sprint }) {
    state.sprints.push(sprint)
  },

  updateScrum (state, { scrum }) {
    state.points = scrum.points
    state.sprints = scrum.sprints
    state.velocity = scrum.velocity
  }
}
