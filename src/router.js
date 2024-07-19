import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import User from './User.vue';

const routes = [
  {
    path: '/Vue-Task2/',
    name: 'home',
    component: Home
  },
  {
    path: '/Vue-Task2/about',
    name: 'about',
    component: About,
    children: [
      {
        path: '/Vue-Task2/user/:userId',
        name: 'user',
        component: User,
        props: true
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
