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
    to.meta.bgImage = randomImage; // Store the preloaded image in route meta
    next(); // Proceed to the route after image is loaded
  };
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
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
