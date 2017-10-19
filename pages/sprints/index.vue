<template>
  <div class='sprints-page'>
    <div class='test'>
      <!-- <sprint v-for='sprint in sprints' :sprint='sprint'></sprint> -->

      <no-ssr>
        <div>
          <v-touch @swipe='swipe' class='t' v-for='sprint in 10'>
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
    swipe (e) {
      const m = e.target.style
      console.log(m)

      e.target.style.marginLeft = '100px'
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
