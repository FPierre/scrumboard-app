<template>
  <div class='login-component'>
    <form v-if='!isAuth' @submit.prevent='login'>
      <div class='columns is-centered' v-if='error'>
        <div class='column is-half'>
          <p class='error'>{{ error }}</p>
        </div>
      </div>

      <div class='columns is-centered'>
        <div class='column is-half'>
          <p class='has-text-centered'>
            <i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i>
          </p>
        </div>
      </div>

      <div class='columns is-centered'>
        <div class='column is-half'>
          <div class='field is-horizontal'>
            <div class='field-body'>
              <div class='field'>
                <p class='control is-expanded'>
                  <input type='text' class='input' placeholder='Name' v-model='username' autofocus>
                </p>
              </div>

              <div class='field'>
                <p class='control is-expanded'>
                  <input type='password' class='input' placeholder='Password' v-model='password'>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type='submit' class='button'>Login</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      error: null,
      username: '',
      password: ''
    }
  },
  computed: mapGetters(['isAuth']),
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
    }
  }
}
</script>
