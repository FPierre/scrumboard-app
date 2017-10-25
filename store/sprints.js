import scrumApi from '../api/scrum'

export const state = () => ({
  all: [],
  selectedId: null
})

export const getters = {
  current (state) {
    return [...state.all].pop()
  },

  currentDay (state, getters) {
    return getters.current.progress.find(progress => !progress.done).day
  },

  selected (state) {
    if (!state.selectedId) {
      return null
    }

    return state.all.find(sprint => sprint.id === state.selectedId)
  },

  selectedIsCurrentSprint (state, getters) {
    if (!state.selectedId) {
      return null
    }

    return state.selectedId === getters.current.id
  },

  newSprintId: (state, getters) => getters.current.id + 1,

  pointsDone (state) {
    return state.all.reduce((memo, sprint) => {
      return memo + sprint.points.done
    }, 0)
  },

  pointsDoneArray: state => state.all.map(sprint => sprint.points.done)
}

export const actions = {
  setCurrentId ({ commit }, id) {
    commit('setCurrentId', id)
  },

  async create ({ commit, state }, newSprint) {
    newSprint['days'] = parseInt(newSprint.days)
    newSprint['selectedIddevelopers'] = parseInt(newSprint.developers)
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
      progress.push({
        day: parseInt(i),
        done: parseInt(0)
      })
    }

    newSprint['progress'] = progress

    const { sprint } = await scrumApi.create(newSprint)

    commit('append', sprint)
  }
}

export const mutations = {
  setCurrentId (state, id) {
    state.selectedId = id
  },

  append (state, sprint) {
    state.all.push(sprint)
  },

  updateScrum (state, { scrum }) {
    state.id = scrum.id
    state.points = scrum.points
  },

  updateSprints (state, { sprints }) {
    state.all = sprints
  }
}
