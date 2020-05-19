import Vue from 'vue'
import App from './App.vue'
// import Projects from "./components/Projects/Projects.vue";
import NewProject from "./components/NewProject/NewProject.vue";

Vue.config.productionTip = false


const routes = {
  "/": '<div>Hello world</div>' ,
  "/newproject": NewProject 
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || 'Hello worl'
    }
  },
  render (h) { return h(App) }
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
