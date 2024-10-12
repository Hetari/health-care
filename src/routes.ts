import { createWebHistory, createRouter } from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import { bg1, bg2, bg3, bg4 } from '@/assets/images';

const bgImages = [bg1, bg2, bg3, bg4];

function preloadImage(to, from, next) {
  const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  const img = new Image();
  img.src = randomImage;
  img.onload = () => {
    to.meta.bgImage = randomImage;
    next();
  };
}

const base = '/health-care';
const routes = [
  {
    path: `${base}/`,
    name: 'Home',
    component: Home,
  },
  {
    path: `${base}/login`,
    name: 'Login',
    component: Login,
    beforeEnter: [preloadImage],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
