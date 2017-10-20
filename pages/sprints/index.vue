<template>
  <div class='sprints-page'>

    <div class='toto'>
      <no-ssr>
        <div>
          <v-touch @pan='panToto'>
            <sprint v-for='sprint in sprints' :sprint='sprint'></sprint>
          </v-touch>
        </div>
      </no-ssr>
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
      touchedSprintHtml: null
    }
  },
  computed: mapState({
    sprints: state => state.sprint.all
  }),
  methods: {
    panToto (e) {
      console.log('panToto')
      const totoHtml = e.target.closest('.toto')

      if (totoHtml) {
        totoHtml.style.marginLeft = `${e.deltaX}px`
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



.toto {
  // overflow-x: auto;
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
