<template>
  <div class='app-navbar-component'>
    <div class='navbar-menu'>
      <div class='navbar-start'>
        <nuxt-link :to='{ name: "" }' class='navbar-item'>
          <span class='icon is-medium has-text-white'>
            <i class='fa fa-long-arrow-left'></i>
          </span>
        </nuxt-link>
      </div>

      <div class='navbar-end'>
        <div class='navbar-item'>
          Create
        </div>
      </div>
    </div>
  </div>
</template>
