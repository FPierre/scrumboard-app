<template>
  <div class='sprints-page'>
    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'><a @click='currentTab = "sprints"'>Sprints</a></li>
        <li><a @click='currentTab = "stats"'>Stats</a></li>
      </ul>
    </div>

    <div class='container'>
      <div class='tabs-content'>
        <template v-if='currentTab === "sprints"'>
          <div class='sprints-wrapper'>
            <no-ssr>
              <div>
                <v-touch @pan='pan'>
                  <sprint v-for='sprint in sprints' :sprint='sprint'></sprint>
                </v-touch>
              </div>
            </no-ssr>
          </div>
        </template>

        <template v-else-if='currentTab === "stats"'>
          <burndown-chart v-if='showLine' :data='burndownData' :options='options'/>
        </template>
      </div>
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

    <nuxt-link :to='{ name: "sprints-create" }'>Create sprint</nuxt-link>
    <nuxt-link :to='{ name: "sprints-stats" }'>Stats</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sprint from '~/components/sprintsIndexPage/Sprint'

export default {
  data () {
    return {
      currentTab: 'sprints',
      touchedSprintHtml: null
    }
  },
  computed: mapState({
    sprints: state => state.sprint.all
  }),
  methods: {
    pan (e) {
      console.log('pan')

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
