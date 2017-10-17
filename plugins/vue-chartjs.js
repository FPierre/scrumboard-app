// https://gist.github.com/rvanzon/096132b7b46be43659cf26360c664e9a

import Vue from 'vue'
import { Bar } from 'vue-chartjs'

Vue.component('burndown-chart', {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
