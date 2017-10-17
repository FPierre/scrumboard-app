<template>
  <div class='app-navbar-component'>
    <nav class='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div class='navbar-start'>
        <nuxt-link :to='{ name: "Home" }' class='navbar-item'>
          <span class='icon is-medium has-text-white'>
            <i class='fa fa-long-arrow-left'></i>
          </span>
        </nuxt-link>
      </div>

      <!-- <div class='navbar-end'>
        <div class='navbar-item'>
          Create
        </div>
      </div> -->
    </nav>
  </div>
</template>
