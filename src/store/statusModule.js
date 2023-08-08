const statusModule = {
    namespaced: true,
    state: {
        isLoading: false,
        error: false,
        message: ''
    },
    mutations: {
       setLoading(state, payload) {
        state.isLoading = payload
       },
       setError(state, payload) {
        state.error = payload.error
        state.message = payload.message
       }
    }
}

export default statusModule