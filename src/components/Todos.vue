<template>
    <div>
        <h2>Todos</h2>
        <p>Double click  the todos card to update completed true (dark-blue) or false (light-green).</p>
        <div class="todos">
            <div
                class="todo"
                :class="{ 'is-completed' : todo.completed }"
                :key="todo.id"
                v-for="todo in todos"
                @dblclick="updateTodo({ id: todo.id, completed: todo.completed })"
            >
                <button class="del-btn" @click="delTodo(todo.id)">X</button>
                {{ todo.title }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    methods: mapActions(['getTodos', 'delTodo', 'updateTodo']),
    computed: mapGetters(['todos']),
    created() {
        this.getTodos(200)
    }
}
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }

    .todo {
        background-color: #bbe6d6;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
    }

    .is-completed {
        color: #fff;
        background-color: #2c3e50;
    }

    .del-btn {
        color: #fff;
        background-color: #e74c3c;
        border: 0;
        border-radius: 50%;
        padding: 4px 8px;
        cursor: pointer;
    }

    .del-btn:hover {
        background-color: #c0392b;
    }
</style>