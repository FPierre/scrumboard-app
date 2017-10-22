<template>
  <div id='sprints-create-page'>
    <!-- <h1 class='title'>New sprint #{{ id }}</h1> -->

    <section class='hero is-fullheight'>
      <div class='hero-body'>
        <div class='container has-text-centered'>
          <div class='columns'>
            <div class='column is-half is-offset-one-quarter'>
              <div class='field'>
                <label class='label'>How many developers participate?</label>

                <div class='control'>
                  <input type='text'
                         class='input'
                         placeholder='3, 4, 5, ...'
                         v-model='developers'
                         @keyup.enter.stop='scrollToInput("#points-input-wrapper")'
                         autofocus>
                </div>
              </div>
            </div>

            <div class='column is-1'>
              <steps :size='3' :current='1' class='is-pulled-right'></steps>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='points-input-wrapper' class='hero is-fullheight'>
      <div class='hero-body'>
        <div class='container has-text-centered'>
          <div class='columns'>
            <div class='column is-half is-offset-one-quarter'>
              <div class='field'>
                <label class='label'>How many points are planned?</label>

                <div class='control'>
                  <input type='text'
                         class='input'
                         placeholder='40, 75.5, 100, ...'
                         v-model='points'
                         @keyup.enter.stop='scrollToInput("#days-input-wrapper")'>
                </div>
              </div>
            </div>

            <div class='column is-1'>
              <steps :size='3' :current='2' class='is-pulled-right'></steps>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='days-input-wrapper' class='hero is-fullheight'>
      <div class='hero-body'>
        <div class='container has-text-centered'>
          <div class='columns'>
            <div class='column is-half is-offset-one-quarter'>
              <div class='field' id='days-input-wrapper'>
                <label class='label'>How many days the sprint will covers?</label>

                <div class='control'>
                  <input type='text'
                         class='input'
                         placeholder='5, 10, 20, ...'
                         v-model='days'>
                </div>
              </div>
            </div>

            <div class='column is-1'>
              <steps :size='3' :current='3' class='is-pulled-right'></steps>
            </div>
          </div>

          <section class='section'>
            <small class='is-block'>
              The new sprint #{{ newSprintId }} will be composed of {{ developers }} developers who must complete {{ points }} points on {{ days }} days.
            </small>

            <button class='button is-medium is-inline-block is-success' @click='submit'>Create</button>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Steps from '~/components/Steps'

export default {
  data () {
    return {
      days: 0,
      developers: 0,
      points: 0
    }
  },
  computed: mapGetters({
    newSprintId: 'scrum/newSprintId'
  }),
  methods: {
    ...mapActions({
      createSprint: 'scrum/createSprint'
    }),
    scrollToInput (elementId) {
      this.$scrollTo(elementId, 500, {
        onDone: () => document.querySelector(`${elementId} input`).focus()
      })
    },
    submit () {
      this.createSprint({
        days: this.days,
        developers: this.developers,
        points: this.points
      })

      this.$router.replace({ name: 'sprints' })
    }
  },
  components: {
    Steps
  }
}
</script>
