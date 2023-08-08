<template>
    <b-row>
        <b-col xl="6" offset-xl="3">
            <div class="wrapper">
                <div class="users" ref="list">
                    <p v-for="post in posts" :data-id="post.id" :key="post.id">{{ post.title }}</p>
                </div>
                <p class="text-center font-weight-bold">Login</p>
                <b-alert :show="status.error" variant="danger">{{ status.message }}</b-alert>
                <validation-observer v-slot="{ invalid }">
                    <b-form @submit.prevent="handleSubmit">
                   <validation-provider name="username" rules="required|email" v-slot="{ errors }">
                     <b-form-group>
                        <b-form-input v-model="form.username" placeholder="Username">
                        </b-form-input>
                        <span>{{ errors[0] }}</span>
                    </b-form-group> 
                   </validation-provider>

                    <b-form-group>
                        <b-form-input required type="password" v-model="form.password" placeholder="Password">
                        </b-form-input>
                    </b-form-group>

                    <b-button :disabled="status.isLoading || invalid" type="submit">{{ status.isLoading ? 'Logging in' : 'Login' }}</b-button>
                </b-form>
                </validation-observer>
            </div>
        </b-col>
    </b-row>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'LoginPage',
    mounted() {
        this.callApi()
    },
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            posts: []
        }
    },
    computed: {
        ...mapState(['status']),
    },
    methods: {
        async handleSubmit() {
            const { username, password } = this.form
            await this.login({ username, password })
        },
        async callApi() {
            console.log("call API")
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            this.posts = data
            this.scrollToItem(50)
        },
        scrollToItem(itemId) {
            // this.$nextTick(() => {
                const list = this.$refs.list;
                const item = list.querySelector(`p[data-id="${itemId}"]`);
                if (item) {
                    item.scrollIntoView({ behavior: 'smooth' });
                }
            // });
        },
        ...mapMutations('user', ['setUser']),
        ...mapActions('user', ['login'])
    },
    beforeRouteEnter(to, from, next) {
        console.log('before Route Enter', to)
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next()
  },
}
</script>
<style scoped>
    .wrapper {
        padding: 20px;
        background-color: white;
    }
</style>