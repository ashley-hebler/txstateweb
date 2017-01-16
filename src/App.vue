<template>
  <div id="app">
    <div class="site-wrap" v-bind:class="{ menuOpen: menuActive }">
      <nav class="site-wrap__navbar navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button id="menuToggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" v-bind:class="{ menuOpen: menuActive }" v-on:click="toggleClass">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">Web Design and Publishing</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="main-nav nav navbar-nav">
                <li v-for="(link, index) in links">
                  <router-link v-bind:to="link.path" class="main-nav__link">{{ link.name }}</router-link>
                </li>
              </ul>
            </div><!--/.nav-collapse -->
          </div>
      </nav>
      <main class="main">
        <router-view></router-view>
      </main>
      <section class="site-wrap__menu">
        <div class="push-menu">
          <ul class="nav navbar-nav">
            <li class="push-menu__item" v-for="(link, index) in links" v-bind:class="{ menuOpen: menuActive }" v-on:click="toggleClass">
              <router-link v-bind:to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import NavLinks from './components/NavLinks'

export default {
  name: 'app',
  components: {
    NavLinks
  },
  data () {
    return {
      menuActive: false,
      links: [
        {
          name: 'Outline',
          path: '/outline'
        },
        {
          name: 'Assignments',
          path: '/assignments'
        },
        {
          name: 'Student Projects',
          path: '/student-projects'
        },
        {
          name: 'Tutorials',
          path: '/tutorials'
        }
      ]
    }
  },
  created() {
    // this.dynamicTitle();
  },
  methods: {
    toggleClass: function() {
        this.menuActive = !this.menuActive;
    }
  }
}
</script>

<style lang="scss">
  @import 'variables.scss';
  @import 'app.scss';
</style>
