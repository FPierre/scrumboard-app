<template>
  <div class='settings-page'>
    <div class='container'>
      <div class='columns'>
        <div class='column is-half is-offset-one-quarter'>
          <div class='field'>
            <label class='label'>How many developers participate?</label>

            <div class='control'>
              <input type='text'
                     class='input'
                     placeholder='3, 4, 5, ...'
                     v-model='developers'>
            </div>
          </div>
        </div>
      </div>

      <div class='columns'>
        <div class='column is-half is-offset-one-quarter'>
          <div class='field'>
            <label class='label'>How many points are planned?</label>

            <div class='control'>
              <input type='text'
                     class='input'
                     placeholder='40, 75.5, 100, ...'
                     v-model='points'>
            </div>
          </div>
        </div>
      </div>

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
      </div>

      {{ fillNewSprint }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  head: () => ({ title: 'Settings' }),
  computed: {
    ...mapState({
      fillNewSprint: state => state.settings.fillNewSprint
    }),
    developers: {
      get () {
        return this.fillNewSprint.developers
      },
      set (developers) {
        this.updateFillNewSprint({ key: 'developers', value: developers })
      }
    },
    points: {
      get () {
        return this.fillNewSprint.points
      },
      set (points) {
        this.updateFillNewSprint({ key: 'points', value: points })
      }
    },
    days: {
      get () {
        return this.fillNewSprint.days
      },
      set (days) {
        this.updateFillNewSprint({ key: 'days', value: days })
      }
    }
  },
  methods: mapActions({
    updateFillNewSprint: 'settings/updateFillNewSprint'
  })
}
</script>
