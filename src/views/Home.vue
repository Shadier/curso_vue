<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="hellowMessage"/>
    <Typer @input-event="onInput"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Typer from '@/components/Typer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Typer,
  },
  data() {
    return {
      hellowMessage: 'Welcome to your VueJS App',
    }
  },
  created() {
    console.log('El componente fué creado');
  },
  mounted() {
    console.log('El componente está montado en nuestra UI');
  },
  destroyed() {
    console.log('El componente home se destruyo');
  },
  methods: {
    onInput(message) {
      this.hellowMessage = message;
    },
  }
}
</script>
