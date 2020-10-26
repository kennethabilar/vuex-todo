<template>
    <div class="filter-todos">
        <label>Filter</label>
        {{ ' ' }}
        <select @change="handleFilter">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'FilterTodos',
    methods: {
        ...mapActions(['getTodos']),
        handleFilter(e) {
            const todosPerPage = parseInt(e.target.value)

            this.getTodos(todosPerPage)
        }
    }
}
</script>

<style scoped>
    .filter-todos {
        margin-top: 20px;
    }
</style>