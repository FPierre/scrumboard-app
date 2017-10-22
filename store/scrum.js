import scrumApi from '../api/scrum'

export const state = () => ({
  points: {},
  sprints: []
})

export const getters = {
  velocity (state, getters) {
    return Math.round(getters.pointsDone / state.sprints.length)
  },

  currentSprint (state) {
    return [...state.sprints].pop()
  },

  pointsDone (state) {
    return state.sprints.reduce((memo, sprint) => {
      return memo + sprint.points.done
    }, 0)
  },

  pointsDoneArray (state) {
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

  async createSprint ({ commit, state }, newSprint) {
    newSprint['days'] = parseInt(newSprint.days)
    newSprint['developers'] = parseInt(newSprint.developers)
    newSprint['scrumId'] = parseInt(1)
    newSprint['points'] = {
      planned: parseInt(newSprint.points),
      unplanned: 0,
      done: 0
    }

    // Only get hours and minutes
    newSprint['start'] = new Date().getTime()

    let progress = []

    for (let i = 1; i < parseInt(newSprint.days) + 1; i++) {
      progress.push({ day: parseInt(i), done: parseInt(0) })
    }

    newSprint['progress'] = progress

    const { sprint } = await scrumApi.create(newSprint)

    commit('appendSprint', sprint)
  }
}

export const mutations = {
  appendSprint (state, sprint) {
    state.sprints.push(sprint)
  },

  updateScrum (state, { scrum }) {
    state.points = scrum.points
    state.sprints = scrum.sprints
  }
}
