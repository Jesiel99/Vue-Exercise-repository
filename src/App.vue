<template>
  <div class="container">
    <Projects />
  </div>
</template>

<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
import Projects from "./components/Projects/Projects.vue";
import NewProject from "./components/NewProject/NewProject.vue";



// const app = new Vue({
//   router
// }).$mount("#app");

// export default app;

export default {
  name: 'app',
  components: {
    Projects,
    NewProject
  }
}
</script>

<style>
@import "./App.css";
</style>
