<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/regboobx1024-smallsmall.png" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/projects" class="navbar-item">Projects</router-link>
          <router-link to="/uses" class="navbar-item">Uses</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
          <DarkMode class="navbar-item"></DarkMode>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Built by Andrew Truex</p>
      </div>
    </footer>
  </div>
</template>

<script>
import DarkMode from "vue-dark-mode-switcher"
export default {
  name: "App",
  components: {
    DarkMode
  },
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px; /*height of your footer*/
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.theme-dark {
  background-color: #1a2b33;
}

.theme-dark h1,
.theme-dark h2,
.theme-dark h3,
.theme-dark h4,
.theme-dark h5,
.theme-dark h6,
.theme-dark h2.title,
.theme-dark h1.title {
  color: #54c095;
}

.theme-dark .navbar .navbar-menu {
  background: #000000;
}

.theme-dark .navbar-item {
  color: #fff;
  background: black;
}

.theme-dark .navbar-brand {
  background: black;
}

.theme-dark footer {
  background-color: #000;
  color: #fff;
}
.theme-dark .box {
  background-color: #000;
  color: #fff;
}

.theme-dark h3.title,
.theme-dark p.tech-box-title,
.theme-dark p.title,
.theme-dark ul,
.theme-dark strong {
  color: white;
}
.theme-dark .card-content {
  background: #000;
}

.theme-dark .markdown-body {
  color: white;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
