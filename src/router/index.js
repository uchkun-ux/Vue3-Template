import Vue from "vue";
import VueRouter from "vue-router";
// import StartHere from "@/views/StartHere.vue";
// import HomeView from "@/views/HomeView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('../views/Partners.vue')
  },
  {
    path: '/dest',
    name: 'dest',
    component: () => import('../views/Destination.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
