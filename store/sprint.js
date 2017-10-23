import scrumApi from '../api/scrum'

export const state = () => ({
  sprints: [],
  selectedSprintId: null
})

export const getters = {
  currentSprint (state) {
    return [...state.sprints].pop()
  },

  currentDay (state, getters) {
    return getters.currentSprint.progress.find(progress => !progress.done).day
  },

  selectedSprint (state) {
    if (!state.selectedSprintId) {
      return null
    }

    return state.sprints.find(sprint => sprint.id === state.selectedSprintId)
  },

  selectedIsCurrentSprint (state, getters) {
    if (!state.selectedSprintId) {
      return null
    }

    return state.selectedSprintId === getters.currentSprint.id
  },

  newSprintId (state, getters) {
    return getters.currentSprint.id + 1
  },

  pointsDone (state) {
    return state.sprints.reduce((memo, sprint) => {
      return memo + sprint.points.done
    }, 0)
  },

  pointsDoneArray (state) {
    return state.sprints.map(sprint => sprint.points.done)
  }
}

export const actions = {
  async all ({ commit }) {
    const { scrum } = await scrumApi.all()

    commit('updateScrum', { scrum })
  },

  setCurrentSprintId ({ commit }, id) {
    commit('setCurrentSprintId', id)
  },

  async createSprint ({ commit, state }, newSprint) {
    newSprint['days'] = parseInt(newSprint.days)
    newSprint['selectedSprintIddevelopers'] = parseInt(newSprint.developers)
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
  setCurrentSprintId (state, id) {
    state.selectedSprintId = id
  },

  appendSprint (state, sprint) {
    state.sprints.push(sprint)
  },

  updateScrum (state, { scrum }) {
    state.id = scrum.id
    state.points = scrum.points
    state.sprints = scrum.sprints
  }
}
