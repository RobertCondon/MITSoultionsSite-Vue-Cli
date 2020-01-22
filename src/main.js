import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(bootstrapVue);
Vue.use(PortalVue);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
