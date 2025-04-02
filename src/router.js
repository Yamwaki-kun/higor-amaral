import { createRouter, createWebHistory } from 'vue-router';
import Galeria from './views/Galeria.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const routes = [
  { path: '/', component: Galeria },
  { path: '/project/:id', component: ProjectDetail, props: true }
];

const router = createRouter({
  history: createWebHistory('/higor-amaral/'), // Define o base path para corresponder ao publicPath do Vite
  routes
});

export default router;