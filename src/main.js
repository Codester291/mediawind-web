import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import First from './components/FirstSection.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  render: h => h(Home)
}).$mount('#home')

new Vue({
  router,
  render: h => h(First)
}).$mount('#first')