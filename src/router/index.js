import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutView.vue'),
  },
  {
    path: '/kek',
    name: 'kek',
    component: () => import(/* webpackChunkName: "kek" */ '../views/kek/KekView.vue'),
  },
  {
    path: '/pokemon-lookup',
    name: 'pokemon-lookup',
    component: () => import(/* webpackChunkName: "pokemon-lookup" */ '../views/pokemon-lookup/PokemonLookupView.vue'),
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import(/* webpackChunkName: "temp" */ '../views/temp/TempView.vue'),
  },
  {
    path: '/temp2',
    name: 'temp2',
    component: () => import(/* webpackChunkName: "temp" */ '../views/temp2/Temp2View.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
