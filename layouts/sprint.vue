<template>
  <div>
    <app-navbar></app-navbar>

    <nuxt/>
  </div>
</template>

<script>
import AppNavbar from '@/components/sprintsPage/AppNavbar'

export default {
  middleware: 'auth',
  components: {
    AppNavbar
  }
}
</script>

<style>
</style>
