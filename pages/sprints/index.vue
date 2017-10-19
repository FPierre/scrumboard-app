<template>
  <div class='sprints-page'>
    Sprints: {{ $store.state.sprint.all }}

    <nuxt-link :to='{ name: "sprints-create" }'>Create sprint</nuxt-link>
    <nuxt-link :to='{ name: "sprints-stats" }'>Stats</nuxt-link>
  </div>
</template>

<script>
</script>
