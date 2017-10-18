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
        <div class='container'>
          <div class='has-text-centered'>
            <h1 class='title'>
              Login
            </h1>

            <h2 class='subtitle'>
              Please login to see the secret content
            </h2>
          </div>

          <div class='columns'>
            <div class='column is-half is-offset-one-quarter'>
              <form v-if='!$store.state.authUser' @submit.prevent='login'>
                <p class='error' v-if='error'>{{ error }}</p>

                <p class='has-text-centered'>
                  <i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i>
                </p>

                <div class='field'>
                  <label class='label'>Name</label>

                  <div class='control'>
                    <input type='text'
                           class='input'
                           placeholder='Username'
                           v-model='username'
                           autofocus>
                  </div>
                </div>

                <div class='field'>
                  <label class='label'>Name</label>

                  <div class='control'>
                    <input type='password'
                           class='input'
                           placeholder='Username'
                           v-model='password'>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })

        this.error = null
        this.username = ''
        this.password = ''

        this.$router.replace({ name: 'sprints' })
      } catch (e) {
        this.error = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
