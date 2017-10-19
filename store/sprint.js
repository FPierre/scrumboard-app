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
    console.log('action sprints all')
    try {
      console.log('try')

      await sprints.all(data => {
        console.log('await action sprints all', data)
        commit('all', { data })
      })
    } catch (e) {
      console.log('catch')
      console.log(e)
    }
  }
}

export const mutations = {
  all (state, { sprints }) {
    // console.log('mutation all', sprints)
    state.all = sprints
    state.current = [...sprints].pop()
  }
}
