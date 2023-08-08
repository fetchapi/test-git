const todoModule = {
    namespaced: true,
    state: {
        list: [
            { id: 1, title: 'Viec 1', completed: false },
            { id: 2, title: 'Viec 2', completed: false },
            { id: 3, title: 'Viec 3', completed: false },
        ]
    },
    mutations: {
        addTodo(state, payload) {
            console.log(state, payload)
        },
        testTodo(state, payload) {
            console.log(state, payload)
        },

        deleteTodo(state, payload) {
            console.log(state, payload)
        },
        updateTodo(state, payload) {

            console.log(state, payload)
        }
    }
}

export default todoModule