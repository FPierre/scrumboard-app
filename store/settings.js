// import settingsApi from '../api/scrum'

export const state = () => ({
  fillNewSprint: {
    status: true,
    default: {
      days: 0,
      developers: 0,
      points: 0
    }
  }
})

export const getters = {

}

export const actions = {
  updateFillNewSprintStatus ({ commit }, status) {
    commit('updateFillNewSprintStatus', { status })
  }
}

export const mutations = {
  updateFillNewSprintStatus (state, { status }) {
    state.status = status
  }
}
