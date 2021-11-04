<template>
    <div class="timeline">
        <NavBar />
        <div class="container">
            <Editor placeholder="¿Qué está pasando?" @post="createPost"/>
            <template v-for="post in posts">
                <Card :key="post.uid" :uid="post.uid" :content="post.content" :time-ago="post.date" />
            </template>
        </div>
    </div>
</template>
<script>
import { v4 as uuid } from 'uuid';
import Editor from './components/Editor';
import Card from './components/Card';
import NavBar from '../../shared/layouts/NavBar';

export default {
    name: 'Timeline',
    components: {
        Editor,
        Card,
        NavBar
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
.timeline {
  .container {
    width: 40%;
    padding: 2em;
    overflow: hidden;
  }
}
</style>