<template>
  <div class='sprints-page'>
    <div class='test'>
      <!-- <sprint v-for='sprint in sprints' :sprint='sprint'></sprint> -->

      <no-ssr>
        <div>
          <v-touch class='t' @pan='pan' v-for='sprint in 3'>
            Swipe me!
          </v-touch>
        </div>
      </no-ssr>
    </div>

    <nuxt-link :to='{ name: "sprints-create" }'>Create sprint</nuxt-link>
    <nuxt-link :to='{ name: "sprints-stats" }'>Stats</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sprint from '~/components/sprintsIndexPage/Sprint'

export default {
  computed: mapState({
    sprints: state => state.sprint.all
  }),
  methods: {
    pan (e) {
      // console.log('pan', e)

      // const m = e.target
      // console.log('m.offsetLeft', m.offsetLeft)

      // e.target.style.marginLeft = `${m.offsetLeft + e.deltaX}px`
      e.target.style.marginLeft = `${e.deltaX}px`
    }
  },
  components: {
    Sprint
  }
}
</script>

<style lang='scss' scoped>
.test {
  // overflow-x: auto;
  white-space: nowrap;
}

.sprint-component,
.t {
  background-color: red;
  display: inline-block;
  height: 150px;
  margin: {
    left: .7rem;
    right: .7rem;
  }
  width: 200px;
}
</style>
