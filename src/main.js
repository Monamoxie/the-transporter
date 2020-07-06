import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
require('./assets/css/home.css')
// import './assets/js/three.min.js'
// import './assets/js/postprocessing.js'
// import './assets/js/InfiniteLights.js'
// import './assets/js/Distortions.js' 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
