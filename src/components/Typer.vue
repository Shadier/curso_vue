<template>
    <div class="typer">
      <h1>Type your <em>Hello</em> message: </h1>
      <input v-model="message" @input="onInput"/>
    </div>
</template>

<script>
export default {
    name: 'Typer',
    data() {
        return {
            message: 'Welcome to your VueJS App',
        }
    },
    methods: {
        onInput() {
            this.$emit('input-event', this.message)
        },
    }
}
</script>
<style lang="scss" scoped>
.typer {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 1em;
        color: red;
    }
    input {
        display: block;
        width: 300px;
        padding: 1em;
        font-size: 1.4em;
    }
}
</style>