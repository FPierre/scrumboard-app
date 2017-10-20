<template>
  <div class='sprint-component'>
    <div class='card'>
      <div class='card-content'>
        <p class='title'>Sprint #{{ sprint.id }}</p>
        <p class='subtitle'>Sprint #{{ sprint.id }}</p>

        <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
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
