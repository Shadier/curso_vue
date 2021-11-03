<template>
    <div>
        <textarea v-model="message" :placeholder="placeholder"></textarea>
        <button @click="dispatchPost">Publicar</button>
    </div>
</template>
<script>
export default {
    name: 'Editor',
    props: {
        placeholder: { type: String, default: 'Lorem ipsum...' },
    },
    data() {
        return {
            message: '',
        }
    },
    methods: {
        async dispatchPost() {
            this.$emit('post', this.message);
            this.message = '';
        }
    }
}
</script>
