import axios from 'axios'

export default {
  async all () {
    console.log('api sprints all')
    try {
      console.log('try')
      const { data } = await axios.get('http://localhost:3004/sprints')
      console.log(data)

      return data
    } catch (e) {
      console.log('catch')
      return e.message
    }
  }
}
