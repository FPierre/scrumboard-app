<template>
  <div class='steps-component'>
    <div class='steps'>
      <span class='step' v-for='(step, index) in size' :class='{ active: current > index }'></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'current']
}
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
}

.step {
  background-color: #ccc;
  height: 11px;
  width: 11px;
  border-radius: 10px;
  margin: .2rem;
}

.step.active {
  background-color: #777;
}
</style>
