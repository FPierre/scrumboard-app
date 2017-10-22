<template>
  <div class='sprint-component'>
    <div class='card'>
      <div class='card-content'>
        <p class='title'>Sprint #{{ sprint.id }}</p>
        <p class='subtitle has-text-weight-semibold' v-if='isCurrent'>Current</p>
        <p class='subtitle' v-else>Done</p>

        <timeago :since='sprint.start' :max-time='1440 * 365' :format='formatTime'></timeago>
      </div>

      <footer class='card-footer'>
        <nuxt-link :to='{ name: "sprints-id", params: { id: sprint.id }}' class='card-footer-item'>
          See
        </nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['sprint'],
  computed: {
    ...mapGetters({
      currentSprint: 'scrum/currentSprint'
    }),
    isCurrent () {
      return this.currentSprint.id === this.sprint.id
    }
  },
  methods: {
    formatTime (time) {
      const date = new Date(time)
      const shortMonth = date.getMonth() + 1
      const month = (shortMonth) < 9 ? `0${shortMonth}` : shortMonth

      return `${month}/${date.getDate()}/${date.getYear()}`
    }
  }
}
</script>
