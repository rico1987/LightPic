import Vue from 'vue';
import Router from 'vue-router';
/* Layout */
import Layout from '@/views/layout/Layout';
// eslint-disable-next-line
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            component: Layout,
            redirect: 'home',
            children: [{
                path: 'home',
                component: _import('home/index'),
                name: 'home',
                meta: {
                    title: 'home',
                    icon: 'home',
                    noCache: true,
                },
            }],
        },
    ],
});
