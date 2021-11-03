<template>
    <div class="timeline">
        <Editor @post="createPost"/>
        <template v-for="post in posts">
            <Card :key="post.uid" :uid="post.uid" :content="post.content" :time-ago="post.date" />
        </template>
    </div>
</template>
<script>
import { v4 as uuid } from 'uuid';
import Editor from './components/Editor';
import Card from './components/Card';

export default {
    name: 'Timeline',
    components: {
        Editor,
        Card,
    },
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        createPost(content) {
            const postBody = {
                content,
                uid: uuid(),
                date: new Date(),
            };
            this.posts.push(postBody);
        },
    }
}
</script>
<style lang="scss" scope>
</style>