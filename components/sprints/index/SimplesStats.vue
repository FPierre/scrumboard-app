<template>
  <div class='simples-stats-component'>
    <div class='notification is-primary'>
      <nav class='level is-mobile'>
        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Sprints</p>
            <p class='title'>{{ sprints.length }}</p>
          </div>
        </div>

        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Velocity</p>
            <p class='title'>{{ velocity }} pts</p>
          </div>
        </div>

        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Unplanned</p>
            <p class='title'>{{ unplannedPointsPercent }}%</p>
          </div>
        </div>

        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Likes</p>
            <p class='title'>789</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      sprints: state => state.sprints.all
    }),
    ...mapGetters({
      velocity: 'scrum/velocity',
      unplannedPointsPercent: 'scrum/unplannedPointsPercent'
    })
  }
}
</script>
