<template>
  <div>
    <app-navbar></app-navbar>

    <section class='section'>
      <nuxt />
    </section>
  </div>
</template>

<script>
import AppNavbar from '@/components/sprintsPage/AppNavbar'

export default {
  // middleware: 'auth',
  components: {
    AppNavbar
  }
}
</script>
