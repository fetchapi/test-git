<template>
    <div class="todo-list">
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <div v-if="ok">
            <p>Now you see me</p>
            <p>Now you see me 2</p>
        </div>
        <div v-else>
            Now you don't
        </div>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address">
        </template>
        <button type="button" class="add-new" @click="onClickButtonAddTodo">Add new</button>
        <ul>
            <li class="item" v-on:click="onClickTodoItem(todo)" v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </ul>
    </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'TotoList',
    data() {
        return {
            ok: true,
            loginType: 'username',
            message: ''
            
        }
    },
    methods: {
        onClickTodoItem(todo) {
            console.log(todo)
        },
        onClickButtonAddTodo() {
            // this.$store.commit('todo/addTodo', 'data todo')
            // this.$store.commit('user/addTodo', 'data todo user')
            this.addTodo('data todo')
            this.addTodoUser('data todo user')

        },
        ...mapMutations({
            addTodo: 'todo/addTodo',
            addTodoUser: 'user/addTodo'
        }),
    },
    computed: {
        todos() {
            return this.todo.list
        },
        ...mapState(['todo'])
    }
}
</script>
<style lang="scss">

    @import '../global-style.scss';

    .todo-list {
        .item {
            padding: 10px;
            cursor: pointer;
            margin: 10px 0;
            border-radius: 4px;
            background-color: rgb(240, 240, 240);
            color: black;
        }

        ul {
            padding: 10px;
            list-style-type: none;
            background-color: lightblue;
        }
    }

    .add-new {
        @include customButton;    
    }

</style>