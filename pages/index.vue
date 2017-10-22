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

        <template v-if='!isAuth'>
          <button class='button' @click='displayLogin = true' v-if='!displayLogin'>Login</button>
          <login v-if='displayLogin' />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '~/components/indexPage/Login'

export default {
  data () {
    return {
      displayLogin: false
    }
  },
  computed: mapGetters(['isAuth']),
  components: {
    Login
  }
}
</script>

<!--
<nuxt-link :to='{ name: "sprints-id", params: { id: 1 } }'>Sprint 1</nuxt-link>
-->
