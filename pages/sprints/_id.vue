<template>
  <div class='sprint-page'>
    <h1 class='title'>Sprint #{{ id }}</h1>
    <h2 class='subtitle'>Day {{ day }}/{{ days }}</h2>

    <div class='field'>
      <label class='label'>How many effort point done yesterday?</label>
      <div class='control'>
        <input class='input' type='text' placeholder='3, 4, 5, ...' v-model='pointsDone'>
      </div>
    </div>

    <button>Save</button>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  async asyncData ({ params }) {
    // let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return {
      day: 2,
      days: 5
    }
  },
  data () {
    return {
      pointsDone: null
    }
  }
}
</script>
