import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { VueMaskDirective } from 'v-mask'
import VueTheMask from 'vue-the-mask'




Vue.config.productionTip = false
Vue.directive('mask',VueMaskDirective)
Vue.use(VueTheMask)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
