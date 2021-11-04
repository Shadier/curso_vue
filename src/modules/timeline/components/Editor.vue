<template>
    <div class="editor">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column">
                        <textarea class="textarea" v-model="message" :placeholder="placeholder"></textarea>
                    </div>        
                </div>
                <div class="columns">
                    <div class="column">
                        <button :disabled="!message" @click="dispatchPost">Publicar</button>
                    </div>        
                </div>
            </div>
        </div>
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
<style lang="scss" scoped>

</style>