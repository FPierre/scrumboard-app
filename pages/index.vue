<template>
  <section class='hero is-primary is-fullheight'>
    <div class='hero-head'>
      <nav class='navbar'>
        <div class='container'>
          <div class='navbar-brand'>
            <a class='navbar-item'>
              <img src='https://bulma.io/images/bulma-type-white.png' alt='Logo'>
            </a>

            <span class='navbar-burger burger' data-target='navbarMenuHeroA'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id='navbarMenuHeroA' class='navbar-menu'>
            <div class='navbar-end'>
              <a class='navbar-item is-active'>
                Home
              </a>

              <span class='navbar-item'>
                <a href='https://github.com/FPierre' class='button is-primary is-inverted'>
                  <span class='icon'>
                    <i class='fa fa-github'></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class='hero-body'>
      <div class='container has-text-centered'>
        <h1 class='title'>
          Scrumboard
        </h1>

        <h2 class='subtitle'>
          Monitor your SCRUM
        </h2>
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

<!-- <nuxt-link :to='{ name: "sprints-create" }'>Create sprint</nuxt-link>
<nuxt-link :to='{ name: "sprints-id", params: { id: 1 } }'>Sprint 1</nuxt-link>
-->
