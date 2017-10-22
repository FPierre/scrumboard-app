<template>
  <div class='sprint-component'>
    <div class='card'>
      <div class='card-content'>
        <p class='title'>Sprint #{{ sprint.id }}</p>
        <p class='subtitle'>Done</p>

        <time :datetime='sprint.start'>{{ sprint.start }}</time>
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
  props: ['sprint']
}
</script>
