import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueDragula from 'vue-dragula';

Vue.config.productionTip = false;
Vue.use(VueDragula);

import SkeletonCards from 'vue-ultimate-skeleton-cards'
Vue.use(SkeletonCards)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
