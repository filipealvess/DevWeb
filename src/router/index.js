import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('../views/Home.vue');
const Html = () => import('../views/Html.vue');
const Css = () => import('../views/Css.vue');
const Sass = () => import('../views/Sass.vue');
const Js = () => import('../views/Js.vue');
const Vuejs = () => import('../views/Vuejs.vue');

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/html',
    component: Html
  },
  {
    path: '/css',
    component: Css
  },
  {
    path: '/sass',
    component: Sass
  },
  {
    path: '/js',
    component: Js
  },
  {
    path: '/vue',
    component: Vuejs
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
