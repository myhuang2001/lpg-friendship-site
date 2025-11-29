import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const FriendIntrol = () => import('@/views/FriendIntrol.vue')
const BigThing = () => import('@/views/BigThing.vue')
const Funny = () => import('@/views/Funny.vue')
const Letter = () => import('@/views/Letter.vue')
const Login = () => import('@/views/Login.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/introl', name: 'FriendIntrol', component: FriendIntrol },
  { path: '/bigthing', name: 'BigThing', component: BigThing },
  { path: '/funny', name: 'Funny', component: Funny },
  { path: '/letter', name: 'Letter', component: Letter },
  { path: '/login', name: 'Login', component: Login },
]

export default createRouter({
  history: createWebHistory(),
  routes
})