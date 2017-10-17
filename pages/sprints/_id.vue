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

      <burndown-chart v-if='showLine' :data='burndownData' :options='options' />
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

    const burndownData = {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          borderColor: '#ce473f',
          data: [50, 36, 24, 12, 0],
          fill: false,
          label: 'Effort supposedly done',
          lineTension: 0,
          pointRadius: 0
        },
        {
          borderColor: '#ce473f',
          data: [47, 40, 32, 28, 19],
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
  }
}
</script>
