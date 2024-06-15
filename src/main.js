import Vue from 'vue'
import store from './store'
import router from './router'
import './style/global.css'
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
})
