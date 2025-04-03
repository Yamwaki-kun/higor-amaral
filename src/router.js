import { createRouter, createWebHistory } from 'vue-router';
import Galeria from './views/Galeria.vue';
import ProjectDetail from './views/ProjectDetail.vue';
import EmailForm from './views/EmailForm.vue';

const routes = [
  { path: '/', component: Galeria },
  { path: '/project/:id', component: ProjectDetail, props: true },
  { path: "/contact", component: EmailForm }
];

const router = createRouter({
  history: createWebHistory('/'), // Define o base path para corresponder ao publicPath do Vite
  routes
});

export default router;