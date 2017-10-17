<template>
  <div class='sprint-page'>
    <div class='container'>
      <h1 class='title'>Sprint #{{ id }}</h1>
      <h2 class='subtitle'>Day {{ day }}/{{ days }}</h2>

      <div class='field'>
        <label class='label'>How many effort point done yesterday?</label>

        <div class='control'>
          <input class='input' type='text' placeholder='3, 4, 5, ...' v-model='pointsDone'>
        </div>
      </div>

      <button class='button is-medium is-success'>Save</button>

      <burndown-chart v-if='showLine' :data='burndownData' :options='options'/>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      pointsDone: null,
      showLine: false
    }
  },
  asyncData ({ params }) {
    // let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    // Mock
    let { sprints } = JSON.parse({
      "sprints": [
        {
          "id": 1,
          "developers": 4,
          "days": 5,
          "points": 50,
          "progress": [
            { "day": 1, "done": 4 },
            { "day": 2, "done": 11 },
            { "day": 3, "done": 8 },
            { "day": 4, "done": 9 },
            { "day": 5, "done": 10 }
          ]
        }
      ]
    })

    const { progress, points, days } = sprints[0]

    const labels = progress.map(d => d.day)
    const actuallyDone = progress.map(d => d.done)
    const supposedlyDone = this.supposedToBeDone(points, days)

    const burndownData = {
      labels,
      datasets: [
        {
          borderColor: '#ce473f',
          data: supposedlyDone,
          fill: false,
          label: 'Effort supposedly done',
          lineTension: 0,
          pointRadius: 0
        },
        {
          borderColor: '#ce473f',
          data: actuallyDone,
          fill: false,
          label: 'Effort actually done',
          lineTension: 0,
          pointRadius: 0
        }
      ]
    }

    const options = { responsive: false }

    return {
      day: 2,
      days: 5,
      burndownData,
      options
    }
  },
  mounted () {
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  },
  method: {
    supposedToBeDone (points, days) {
      // return [points / days]
    }
  }
}
</script>
