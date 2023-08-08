<template>
  <div class="default-layout">
    <b-container>
       <b-spinner v-if="status.isLoading" label="Spinning"></b-spinner>
      <nav-bar v-bind:title="title" />
      <button class="button" @click="onClickChangeTitleButton">Change title</button>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from 'vuex'
export default {
  name: "DefaultLayout",
  components: { NavBar },
  data() {
    return {
      title: "Hello Vue 2",
    };
  },
  computed: {
        ...mapState(['status']),
  },
  methods: {
    onClickChangeTitleButton() {
      const newTitle = "new title"
      this.title = newTitle
      console.log(this.title)
    },
  }
};
</script>

<style lang="scss">
  @import '../global-style.scss';

  .default-layout {
    background-color: rgb(219, 219, 219);
    min-height: 100vh;
  }

  .button {
    @include customButton();
  }

</style>
