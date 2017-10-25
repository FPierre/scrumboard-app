// import settingsApi from '../api/scrum'

export const state = () => ({
  fillNewSprint: {
    days: null,
    developers: null,
    points: null
  }
})

export const getters = {

}

export const actions = {
  updateFillNewSprint ({ commit }, { key, value }) {
    commit('updateFillNewSprint', { key, value })
  }
}

export const mutations = {
  updateFillNewSprint (state, { key, value }) {
    state.fillNewSprint[key] = value
  }
}
