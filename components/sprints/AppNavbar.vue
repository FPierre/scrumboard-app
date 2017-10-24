<template>
  <div class='app-navbar-component'>
    <nav class='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <nuxt-link :to='{ name: "index" }' class='navbar-item'>
          <span class='icon is-medium has-text-white'>
            <i class='fa fa-long-arrow-left'></i>
          </span>
        </nuxt-link>
      </div>

      <div class='navbar-menu is-active'>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <nuxt-link :to='{ name: "sprints-create" }' class='button is-primary'>
              Create
            </nuxt-link>
          </div>

          <div class='navbar-item'>
            <button class='button is-primary' @click='logout'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.replace({ name: 'index' })
    }
  }
}
</script>
