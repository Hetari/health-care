import { bg1, bg2, bg3, bg4 } from '@/assets/images';
const bgImages = [bg1, bg2, bg3, bg4];
import {
  createWebHistory,
  createRouter,
  RouteMeta,
  RouteRecordRaw,
} from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';

interface IRouteMeta {
  title: string;
}

export const base = '/health-care';
const routes: RouteRecordRaw[] = [
  {
    path: `${base}/`,
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/register`,
    name: 'Register',
    component: Register,
    beforeEnter: [preloadImage],
    meta: {
      title: 'Register',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/login`,
    name: 'Login',
    component: Login,
    beforeEnter: [preloadImage],
    meta: {
      title: 'Login',
    } as RouteMeta & IRouteMeta,
  },
  // {
  //   path: `${base}/dashboard`,
  //   name: 'Dashboard',
  //   component: () => import('@/views/dashboard/index.vue'),
  //   meta: {
  //     title: 'Home',
  //   } as RouteMeta & IRouteMeta,
  // },
  // 404 page
  // {
  //   path: '/:pathMatch(.*)',
  //   name: 'not-found',
  //   component: () => import('@/views/404.vue'),
  //   meta: {
  //     title: 'Page Not Found',
  //   } as RouteMeta & IRouteMeta,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function preloadImage(to, from, next) {
  // if (window.innerWidth < 1024) {
  //   return next();
  // }
  const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  const img = new Image();
  img.src = randomImage;
  img.onload = () => {
    to.meta.bgImage = randomImage;
    next();
  };
}

export default router;
