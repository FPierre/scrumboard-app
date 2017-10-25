<template>
  <div class='sprints-page'>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <div class='sprints-wrapper'>
            <no-ssr>
              <div>
                <v-touch @pan='pan'>
                  <sprint v-for='sprint in sprints' :sprint='sprint' />
                </v-touch>
              </div>
            </no-ssr>
          </div>
        </div>
      </div>

      <div class='columns'>
        <div class='column'>
          <simples-stats />
        </div>
      </div>

      <template v-if='showLine'>
        <div class='columns'>
          <div class='column'>
            <div class='notification is-white'>
              <velocity-chart :data='velocityData' :options='velocityOptions' />
            </div>
          </div>

          <div class='column'>
            <div class='notification is-white'>
              <points-chart :data='pointsData' :options='pointsOptions' />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SimplesStats from '~/components/sprints/index/SimplesStats'
import Sprint from '~/components/sprints/index/Sprint'

export default {
  head: () => ({ title: 'Sprints' }),
  data () {
    return {
      touchedSprintHtml: null,
      showLine: false
    }
  },
  computed: {
    ...mapState({
      sprints: state => state.sprints.all
    }),
    ...mapGetters({
      pointsDoneArray: 'sprints/pointsDoneArray',
      plannedPointsInt: 'scrum/plannedPointsInt',
      unplannedPointsInt: 'scrum/unplannedPointsInt'
    }),
    velocityData () {
      return {
        labels: this.pointsDoneArray.map((_, index) => index + 1),
        datasets: [
          {
            borderColor: '#ce473f',
            data: this.pointsDoneArray,
            fill: false,
            label: 'Velocity',
            lineTension: 0,
            pointRadius: 0
          }
        ]
      }
    },
    velocityOptions () {
      return {
        maintainAspectRatio: false,
        responsive: true
      }
    },
    pointsData () {
      return {
        labels: ['Planned', 'Unplanned'],
        datasets: [
          {
            backgroundColor: ['#ce473f', '#aa473f'],
            data: [this.plannedPointsInt, this.unplannedPointsInt]
          }
        ]
      }
    },
    pointsOptions () {
      return {
        maintainAspectRatio: false,
        responsive: true
      }
    }
  },
  mounted () {
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  },
  methods: {
    pan (e) {
      const sprintsWrapperHtml = e.target.closest('.sprints-wrapper')

      if (sprintsWrapperHtml) {
        sprintsWrapperHtml.style.marginLeft = `${e.deltaX}px`
      }
    }
    // pan (e) {
    //   // console.log('pan', e.target)
    //
    //   const sprintHtml = e.target.closest('.sprint-component')
    //
    //   if (sprintHtml) {
    //     this.touchedSprintHtml = sprintHtml
    //     this.touchedSprintHtml.style.marginLeft = `${e.deltaX}px`
    //   } else if (this.touchedSprintHtml) {
    //     this.touchedSprintHtml.style.marginLeft = `${e.deltaX}px`
    //   }
    // },
    // panend (e) {
    //   this.touchedSprintHtml = null
    // }
  },
  components: {
    SimplesStats,
    Sprint
  }
}
</script>

<style lang='scss' scoped>
.sprints-wrapper {
  white-space: nowrap;
}

.sprint-component {
  display: inline-block;
  height: 150px;
  margin: {
    left: .7rem;
    right: .7rem;
  }
  width: 200px;
}
</style>
