<template>
  <div class='sprints-page'>
    <div class='container'>
      <div class='sprints-wrapper'>
        <no-ssr>
          <div>
            <v-touch @pan='pan'>
              <sprint v-for='sprint in sprints' :sprint='sprint' />
            </v-touch>
          </div>
        </no-ssr>
      </div>

      <template v-if='showLine'>
        <nav class='level'>
          <div class='level-item has-text-centered'>
            <div>
              <p class='heading'>Sprints</p>
              <p class='title'>{{ sprints.length }}</p>
            </div>
          </div>

          <div class='level-item has-text-centered'>
            <div>
              <p class='heading'>Velocity</p>
              <p class='title'>{{ velocity }}</p>
            </div>
          </div>

          <div class='level-item has-text-centered'>
            <div>
              <p class='heading'>Followers</p>
              <p class='title'>456K</p>
            </div>
          </div>

          <div class='level-item has-text-centered'>
            <div>
              <p class='heading'>Likes</p>
              <p class='title'>789</p>
            </div>
          </div>
        </nav>

        <div class='columns'>
          <div class='column'>
            <velocity-chart :data='velocityData' :options='velocityOptions' />
          </div>

          <div class='column'>
            <points-chart :data='pointsData' :options='pointsOptions' />
          </div>
        </div>
      </template>
    </div>

    <!-- <div class='test'>
      <no-ssr>
        <div>
          <v-touch class='t' @pan='pan' @panend='panend' v-for='sprint in sprints'>
            <sprint :sprint='sprint'></sprint>
          </v-touch>
        </div>
      </no-ssr>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Sprint from '~/components/sprintsPage/Sprint'

export default {
  data () {
    return {
      touchedSprintHtml: null,
      showLine: false
    }
  },
  computed: {
    ...mapState({
      sprints: state => state.scrum.sprints,
      velocity: state => state.scrum.velocity
    }),
    ...mapGetters({
      pointsDoneArray: 'scrum/pointsDoneArray',
      plannedPoints: 'scrum/plannedPoints',
      unplannedPoints: 'scrum/unplannedPoints',
      velocity: 'scrum/velocity'
    }),
    velocityData () {
      return {
        labels: this.pointsDoneArray.map((_, index) => index + 1),
        datasets: [
          {
            borderColor: '#bbb',
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
            // borderColor: '#bbb',
            data: [this.plannedPoints, this.unplannedPoints]
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
    Sprint
  }
}
</script>

<style lang='scss' scoped>
// .test {
//   // overflow-x: auto;
//   white-space: nowrap;
// }
//
// .sprint-component,
// .t {
//   // background-color: red;
//   display: inline-block;
//   height: 150px;
//   margin: {
//     left: .7rem;
//     right: .7rem;
//   }
//   width: 200px;
// }


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
