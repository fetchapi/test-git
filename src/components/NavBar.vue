<template>
    <div class="navbar">
        <h1 class="title">{{ title }} <span v-if="email">- {{ fullName }} - {{ email }}</span></h1>
        <b-nav pills>
            <b-nav-item exact-active-class="active" to="/">
               Home
            </b-nav-item>
            <b-nav-item active-class="active" to="/about">
               About
            </b-nav-item>
            <b-nav-item v-if="email">
                Logout
            </b-nav-item>
            <b-nav-item v-else active-class="active" to="/login">
                Login
            </b-nav-item>
        </b-nav>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'NavBar',
    computed: {
        fullName() {
            return this.user.fullName
        },
        email() {
            return this.user.email
        },
        ...mapState(['user'])
    },
    props: {
        title: String
    },
}
</script>
<style scoped   >
  .title {
    width: 100%;
  }
</style>