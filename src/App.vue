<template>
  <div id="app" class="app">
    <ThemeController :is-dark="isDark">
      <router-view />
    </ThemeController>
  </div>
</template>
<script>
import ThemeController from './shared/layouts/ThemeController.vue'

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
  }
}
</script>

<style lang="scss">
.app {
  
}

</style>
