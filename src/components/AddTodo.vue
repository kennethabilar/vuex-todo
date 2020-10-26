<template>
    <div>
        <h2>Add Todo</h2>
        <form @submit.prevent="handleSubmit">
            <label>Title</label>
            {{ ' ' }}
            <input type="text" v-model="title">
            {{ ' ' }}
            <input type="submit" value="Add">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        handleSubmit() {
            this.addTodo(this.title)
            this.title = ''
        }
    }
}
</script>