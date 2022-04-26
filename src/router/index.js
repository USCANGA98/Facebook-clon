import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/play",
    name: "Play",
    component: () => import(/* webpackChunkName: "home" */ "../views/Play.vue")
  },
  {
    path: "/store",
    name: "Store",
    component: () => import(/* webpackChunkName: "home" */ "../views/Store.vue")
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import(/* webpackChunkName: "home" */ "../views/Groups.vue")
  },
  {
    path: "/stream",
    name: "Stream",
    component: () => import(/* webpackChunkName: "home" */ "../views/Stream.vue")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
