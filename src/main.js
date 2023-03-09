import MyTable from '@/components/_generic/MyTable.vue';
import MyTabControl from '@/components/_generic/MyTabControl.vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.component('my-table', MyTable);
Vue.component('my-tab-control', MyTabControl);
