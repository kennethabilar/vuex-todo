<template>
    <div id="app">
        <h1>Vuex Todos</h1>
        <AddTodo />
        <FilterTodos />
        <Todos />
    </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'
import Todos from './components/Todos'

export default {
    name: 'App',
    components: {
        AddTodo,
        FilterTodos,
        Todos
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 84%;
    margin: 0 auto;
}
</style>
