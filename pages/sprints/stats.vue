<template>
  <div class='sprints-stats-page'>
    <velocity-chart v-if='showLine' :data='velocityData' :options='options'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLine: false
    }
  },
  asyncData () {
    const velocityData = {
      labels: ['#1', '#2', '#3', '#4', '#5'],
      datasets: [
        {
          label: 'Points done',
          borderColor: '#ce473f',
          fill: false,
          pointRadius: 0,
          data: [40, 55, 43, 39, 50]
        }
      ]
    }

    const options = { responsive: false }

    return { velocityData, options }
  },
  mounted () {
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  }
}
</script>
