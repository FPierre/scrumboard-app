<template>
  <section class='hero is-primary is-fullheight'>
    <div class='hero-body'>
      <div class='container has-text-centered'>
        <h1 class='title'>
          Scrumboard
        </h1>

        <h2 class='subtitle'>
          Monitor your SCRUM
        </h2>

        <nuxt-link :to='{ name: "users-login" }' class='button' v-if='!isAuth'>
          Login
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['isAuth'])
}
</script>

<!--
<nuxt-link :to='{ name: "sprints-id", params: { id: 1 } }'>Sprint 1</nuxt-link>
-->
