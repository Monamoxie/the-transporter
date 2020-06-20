import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
