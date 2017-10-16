<template>
  <div>
    <h1 class='title'>
      scrumboard-app
    </h1>

    <h2 class='subtitle'>
      Monitor your SCRUM
    </h2>

    <nuxt-link :to='{ name: "sprints-create" }'>Create sprint</nuxt-link>
    <nuxt-link :to='{ name: "sprints-id", params: { id: 1 } }'>Sprint 1</nuxt-link>
    <nuxt-link :to='{ name: "sprints" }'>Sprints</nuxt-link>
  </div>
</template>
