const todoModule = {
    namespaced: true,
    state: {
        list: [
            { id: 1, title: 'Viec 1', completed: false },
            { id: 3, title: 'Viec 3', completed: true },
        ]
    },
    mutations: {
        addTodo(state, payload) {
            console.log(state, payload)
        },
        testTodo(state, payload) {
            console.log(state, payload)
        },
    }
}

export default todoModule