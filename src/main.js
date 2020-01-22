import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies'


Vue.config.productionTip = false;
Vue.use(VueLazyload);
Vue.use(bootstrapVue);
Vue.use(PortalVue);
Vue.use(VueCookies);

Vue.directive('click-outside', {
  bind () {
    this.event = event => this.vm.$emit(this.expression, event);
    this.el.addEventListener('click', this.stopProp);
    document.body.addEventListener('click', this.event);
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp);
    document.body.removeEventListener('click', this.event);
  },

  stopProp(event) { event.stopPropagation() }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
