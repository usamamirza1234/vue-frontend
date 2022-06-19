import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blogs',
    name: 'BlogView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blogs" */ '../views/BlogView.vue')
  },
  {
    path: '/view',
    name: 'ViewBlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blogs" */ '../views/ViewBlog.vue')
  },
  {
    path: '/new',
    name: 'CreateBlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blogs" */ '../views/CreateBlog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
