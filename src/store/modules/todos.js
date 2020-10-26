import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const state = {
    todos: []
}

const getters = {
    todos: state => state.todos
}

const actions = {
    async getTodos({ commit }, todosPerPage) {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${todosPerPage}`)

        commit('getTodos', res.data)
    },
    async addTodo({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })

        res.data.id = uuidv4()
        commit('addTodo', res.data)
    },
    async delTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('delTodo', id)
    },
    async updateTodo({ commit }, { id, completed }) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, { id, completed: !completed })

        commit('updateTodo', id)
    }
}

const mutations = {
    getTodos: (state, todos) => state.todos = todos,
    addTodo: (state, newTodo) => state.todos.unshift(newTodo),
    delTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, id) => {
        state.todos = state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            
            return todo
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
