import axios from 'axios'

const dbApi = axios.create({
  baseURL: 'http://localhost:3004/'
})

export default {
  async all () {
    const { data } = await dbApi.get('scrums/1?_embed=sprints')

    return { scrum: data }
  },

  async create (newSprint) {
    const { data } = await dbApi.post('scrums/1/sprints', newSprint)

    return { sprint: data }
  }
}
