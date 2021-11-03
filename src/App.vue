<template>
  <div id="app" class="app">
    <ThemeController :is-dark="isDark">
      <div class="navigation">
        <a @click="redirect({ name: 'timeline' })">
          Timeline
        </a>
        <a @click="redirect({ name: 'login' })">
          Login
        </a>
      </div>
      <div class="hello">
        <h1>Hola mundo</h1>
        <button @click="toggleTheme">Alternar tema</button>
      </div>
      <router-view />
    </ThemeController>
  </div>
</template>
<script>
import ThemeController from './shared/layouts/ThemeController.vue'
import router from './state/router'

export default {
  name: 'App',
  components: {
    ThemeController,
  },
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
    redirect(route) {
      router.push(route);
    }
  }
}
</script>

<style lang="scss">
.app {
  .hello {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 2em;
      margin: .5em;
    }
    button {
      display: block;
      margin: .5em;
      font-size: 1em;
      padding: .6em 1em;
      outline: 0;
      border: 0;
      border-radius: 2em;
      cursor: pointer;
    }
  }
}

</style>
