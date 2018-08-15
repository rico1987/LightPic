import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/scss/themes/default/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import * as filters from './filters';
import App from './App';
import store from './store';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});

Vue.use(ElementUI);


// eslint-disable-next-line
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
