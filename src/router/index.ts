import { bg1, bg2, bg3, bg4 } from '@/assets/images';
const bgImages = [bg1, bg2, bg3, bg4];
import {
  createWebHistory,
  createRouter,
  RouteMeta,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';

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
  {
    path: `${base}/dashboard`,
    name: 'Dashboard',
    component: () => import('@/views/dashboard/examples/Home.vue'),
    meta: {
      title: 'Dashboard',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/dashboard/task`,
    name: 'DashboardTasksIndex',
    component: () => import('@/views/dashboard/examples/tasks/Index.vue'),
    meta: {
      title: 'Tasks',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/dashboard/user`,
    name: 'DashboardUserIndex',
    component: () => import('@/views/dashboard/examples/user/Index.vue'),
    meta: {
      title: 'User',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/dashboard/settings`,
    name: 'DashboardSettingsIndex',
    component: () => import('@/views/dashboard/examples/settings/Index.vue'),
    meta: {
      title: 'Settings',
    } as RouteMeta & IRouteMeta,
  },
  {
    path: `${base}/:pathMatch(.*)*`,
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'Page Not Found',
    } as RouteMeta & IRouteMeta,
  },
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
