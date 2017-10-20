import axios from 'axios'

export default {
  async all () {
    const { data } = await axios.get('http://localhost:3004/scrum')

    return { scrum: data }
  },

  async create (scrum) {
    const { data } = await axios.put('http://localhost:3004/scrum', scrum)

    return { scrum: data }
  }
}
