<template>
    <div class="editor">
        <div class="card mb-4">
            <div class="card-content">
                <div class="columns">
                    <div class="column">
                        <textarea class="textarea" v-model="message" :placeholder="placeholder"></textarea>
                    </div>        
                </div>
                <div class="columns">
                    <div class="column">
                        <Action
                            type="primary"
                            :dispatch="dispatchPost"
                            :is-disabled="!message"
                        >
                            Publicar
                        </Action>
                    </div>        
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import Action from '@/shared/components/Action'

export default {
    name: 'Editor',
    components: {
        Action,
    },
    props: {
        placeholder: { type: String, default: 'Lorem ipsum...' },
        onPost: { type: Function },
    },
    data() {
        return {
            message: '',
        }
    },
    methods: {
        async dispatchPost() {
            await this.onPost(this.message);
            this.message = '';
        }
    }
}
</script>
<style lang="scss" scoped>

</style>