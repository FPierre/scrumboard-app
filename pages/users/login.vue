<template>
  <div class='users-login-page'>
    <section class='hero is-primary is-fullheight'>
      <div class='hero-head'>
        <nav class='navbar'>
          <div class='navbar-start'>
            <nuxt-link :to='{ name: "index" }' class='navbar-item'>
              <span class='icon is-medium has-text-white'>
                <i class='fa fa-long-arrow-left'></i>
              </span>
            </nuxt-link>
          </div>
        </nav>
      </div>

      <div class='hero-body'>
        <div class='container has-text-centered'>
          <h1 class='title'>
            Login
          </h1>

          <h2 class='subtitle'>
            Please login to see the secret content
          </h2>

          <form v-if='!$store.state.authUser' @submit.prevent='login'>
            <p class='error' v-if='formError'>{{ formError }}</p>

            <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>

            <div class='field'>
              <label class='label'>Name</label>

              <div class='control'>
                <input class='input' type='text' name='username' placeholder='Username' v-model='formUsername'>
              </div>
            </div>

            <div class='field'>
              <label class='label'>Name</label>

              <div class='control'>
                <input class='input' type='password' name='password' placeholder='Username' v-model='formPassword'>
              </div>
            </div>

            <button type='submit' class='button'>Login</button>
          </form>
          <div v-else>
            Hello {{ $store.state.authUser.username }}!
            <pre>I am the secret content, I am shown only when the use is connected.</pre>
            <p><i>You can also refresh this page, you'll still be connected!</i></p>

            <button class='button' @click='logout'>Logout</button>
          </div>

          <p><nuxt-link to='/users/secret'>Super secret page</nuxt-link></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
