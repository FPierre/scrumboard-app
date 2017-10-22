<template>
  <div class='sprint-component'>
    <div class='card'>
      <div class='card-content'>
        <p class='title'>Sprint #{{ sprint.id }}</p>
        <p class='subtitle'>Done</p>

        <!-- <time :datetime='sprint.start'>{{ sprint.start }}</time> -->
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
export default {
  props: ['sprint'],
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
