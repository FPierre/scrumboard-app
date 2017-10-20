import axios from 'axios'

export default {
  async all () {
    const { data } = await axios.get('http://localhost:3004/scrum')

    return { scrum: data }
  }
}
