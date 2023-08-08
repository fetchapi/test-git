const statusModule = {
    namespaced: true,
    state: {
        isLoading: true,
        error: true,
        message: '',
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