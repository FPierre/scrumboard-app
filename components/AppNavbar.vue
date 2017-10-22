<template>
  <div class='app-navbar-component'>
    <nav class='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <nuxt-link :to='{ name: "index" }' class='navbar-item'>
          <span class='icon is-medium has-text-white'>
            <i class='fa fa-long-arrow-left'></i>
          </span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
