<template>
  <div class='sprints-stats-page'>
    <burndown-chart v-if='showLine' :data='burndown' :options='options' />
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
    const burndown = {
      labels: ['#1', '#2', '#3', '#4', '#5', '#6'],
      datasets: [
        {
          label: 'Effort points done',
          backgroundColor: '#ce473f',
          data: [40, 55, 43, 39, 50, 40]
        }
      ]
    }

    const options = { responsive: false }

    return { burndown, options }
  },
  mounted () {
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  }
}
</script>
