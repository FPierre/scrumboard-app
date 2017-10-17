<template>
  <div class='sprints-stats-page'>
    <bar-chart :data='barChartData' :options='{ maintainAspectRatio: false }'></bar-chart>
  </div>
</template>

<script>
import BarChart from '~/components/BarChart'

export default {
  data () {
    return {
      barChartData: {
        labels: ['label 1'],
        datasets: [
          {
            label: 'Nuxt.js Commit Activity',
            backgroundColor: '#41b883',
            data: [1, 2]
          }
        ]
      }
    }
  },
  components: {
    BarChart
  }
}
</script>
