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
  
}

</style>
