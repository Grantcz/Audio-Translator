import Vue from 'vue';
import Router from 'vue-router';
import translate from '@/components/translate';
import vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueAnalytics from 'vue-ua';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'translate',
      component: translate
    }
  ]
})
