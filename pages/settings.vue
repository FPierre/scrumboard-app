<template>
  <div class='settings-page'>
    <div class='container'>
      Settings

      <label class='checkbox'>
        <input type='checkbox' v-model='fillNewSprintStatus'>
        Remember me
      </label>

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
    fillNewSprintStatus: {
      get () {
        return this.fillNewSprint.status
      },
      set (status) {
        this.updateFillNewSprintStatus(status)
      }
    }
  },
  methods: mapActions({
    updateFillNewSprintStatus: 'settings/updateFillNewSprintStatus'
  })
}
</script>
