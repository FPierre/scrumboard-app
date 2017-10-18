<template>
  <section class='hero is-primary is-fullheight'>
    <div class='hero-body'>
      <div class='container has-text-centered'>
        <h1 class='title'>
          Scrumboard
        </h1>

        <h2 class='subtitle'>
          Monitor your SCRUM
        </h2>

        <nuxt-link :to='{ name: "users-login" }' class='button' v-if='!$store.state.authUser'>
          Login
        </nuxt-link>
      </div>
    </div>

    <div class='hero-foot'>
      <nav class='tabs'>
        <div class='container'>
          <ul>
            <!-- <li class='is-active'><a>Overview</a></li> -->
            <li>
              <nuxt-link :to='{ name: "sprints" }'>Sprints</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<!--
<nuxt-link :to='{ name: "sprints-id", params: { id: 1 } }'>Sprint 1</nuxt-link>
-->
