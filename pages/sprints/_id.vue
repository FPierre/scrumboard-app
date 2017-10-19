<template>
  <div class='sprint-page'>
    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'><a @click='currentTab = "sprint"'>Sprint</a></li>
        <li><a @click='currentTab = "stats"'>Stats</a></li>
      </ul>
    </div>

    <div class='container'>
      <div class='tabs-content'>
        <template  v-if='currentTab === "sprint"'>
          <h1 class='title'>Sprint #{{ id }}</h1>
          <h2 class='subtitle'>Day {{ day }}/{{ days }}</h2>

          <div class='field'>
            <label class='label'>How many points were done yesterday?</label>

            <div class='control'>
              <input class='input' type='text' placeholder='3, 4, 5, ...' v-model='pointsDone'>
            </div>
          </div>

          <button class='button is-medium is-success'>Save</button>
        </template>

        <template  v-else-if='currentTab === "stats"'>
          <burndown-chart v-if='showLine' :data='burndownData' :options='options'/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      currentTab: 'sprint',
      pointsDone: 0,
      showLine: false
    }
  },
  async asyncData ({ params }) {
    // console.log(params)

    // Mock
    // const { data } = await axios.get(`http://localhost:3004/sprints`)
    //
    // console.log(data)
    //
    // const { id, progress, points, days } = data[0]
    //
    // const labels = progress.map(d => d.day)
    //
    // // const actuallyDone = progress.map(d => points - d.done)
    //
    // let toto = points
    // const actuallyDone = progress.reduce((memo, p, index) => {
    //   console.log(memo)
    //
    //   toto = memo[index] - p.done
    //   memo.push(toto)
    //   return memo
    // }, [points])
    //
    // //
    // const t = [points]
    // const div = points / (days - 1)
    // let rest = points
    //
    // for (let i = 0; i < days; i++) {
    //   t[i] = rest - div
    //   rest = t[i]
    // }
    //
    // const supposedlyDone = t
    //
    // console.log(supposedlyDone)
    //
    // const day = progress.findIndex(d => !d.done) + 1
    //
    // const burndownData = {
    //   labels,
    //   datasets: [
    //     {
    //       borderColor: '#bbb',
    //       data: supposedlyDone,
    //       fill: false,
    //       label: 'Points supposedly done',
    //       lineTension: 0,
    //       pointRadius: 0
    //     },
    //     {
    //       borderColor: '#ce473f',
    //       data: actuallyDone,
    //       fill: false,
    //       label: 'Points actually done',
    //       lineTension: 0,
    //       pointRadius: 0
    //     }
    //   ]
    // }

    const id = 1
    const day = 3
    const days = 5
    const burndownData = {}
    const options = { responsive: false }

    return {
      id,
      day,
      days,
      burndownData,
      options
    }
  },
  mounted () {
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  },
  methods: {
    supposedToBeDone (points, days) {
      // return [points / days]
    }
  }
}
</script>
