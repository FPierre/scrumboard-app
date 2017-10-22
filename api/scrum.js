import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004/'

export default {
  async all () {
    const { data } = await axios.get('scrums/1?_embed=sprints')

    return { scrum: data }
  },

  async create (newSprint) {
    const { data } = await axios.post('scrums/1/sprints', newSprint)

    return { sprint: data }
  }
}
