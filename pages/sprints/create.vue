<template>
  <div class='sprints-create-page'>
    <h1 class='title'>New sprint #{{ id }}</h1>

    <div class='field'>
      <label class='label'>How many developers participate?</label>
      <div class='control'>
        <input class='input' type='text' placeholder='3, 4, 5, ...' v-model='developers'>
      </div>
    </div>

    <div class='field'>
      <label class='label'>How many effort points are estimated?</label>
      <div class='control'>
        <input class='input' type='text' placeholder='40, 75.5, 100, ...' v-model='points'>
      </div>
    </div>

    <div class='field'>
      <label class='label'>How many days the sprint will covers?</label>
      <div class='control'>
        <input class='input' type='text' placeholder='5, 10, 20, ...' v-model='days'>
      </div>
    </div>

    <p>The new sprint (#{{ id }}) is composed of {{ developers }} developers who must complete {{ points }} points on {{ days }} days.</p>

    <button>Create</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 1,
      developers: null,
      points: null,
      days: null
    }
  }
}
</script>
