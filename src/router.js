import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes aqui
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;