<template>
  <div class='steps-component'>
    <div class='steps is-flex'>
      <div class='step' v-for='(step, index) in size' :class='{ active: current > index }'></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'current']
}
</script>

<style lang='scss' scoped>
@import '~assets/stylesheets/bulma-override';

.steps-component {
  height: 100%;
}

.steps {
  align-items: center;
  flex-direction: column;
  margin-top: 1.7rem;
}

.step {
  background-color: $grey-lighter;
  border-radius: 9px;
  height: 9px;
  margin: .2rem;
  width: 9px;

  &.active {
    background-color: $grey-darker;
  }
}
</style>
