<template>
    <div class="card">
        <div class="card animated fadeInDown">
            <div class="card-content">
                <div class="content">
                    {{ content }}
                    <br>
                    <time class="has-text-grey" :datetime="datetime">
                        {{ hour }} - {{ date }}
                    </time>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    name: 'Card',
    props: {
        uid: { type: String, required: true },
        content: { type: String, required: true },
        timeAgo: { type: Date, required: true },  
    },
    computed: {
        $moment() {
            return moment(this.timeAgo);
        },
        hour() {
            return this.$moment.format('h:mm a');
        },
        date() {
            return this.$moment.format('MMM Do YYYY');
        },
        datetime() {
            return this.$moment.toISOString();
        }
    },
    data() {
        return {

        }
    },

}
</script>
<style lang="scss" scoped>
.card {
    time {
        font-size: 0.8em;
    }
}
</style>