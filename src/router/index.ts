// import { bg1, bg2, bg3, bg4 } from '@/assets/images';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import { createRouter, createWebHistory, type RouteMeta } from 'vue-router';
import DashboardLayoutVue from '@/layout/dashboard.vue';

export const base = '/health-care';

interface IRouteMeta {
  title: string;
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      // beforeEnter: [preloadImage],
      meta: {
        title: 'Register',
      } as RouteMeta & IRouteMeta,
    },
    {
      path: `${base}/login`,
      name: 'Login',
      component: Login,
      // beforeEnter: [preloadImage],
      meta: {
        title: 'Login',
      } as RouteMeta & IRouteMeta,
    },
    {
      path: `${base}/forgot-password`,
      name: 'ForgotPassword',
      meta: {
        title: 'Forgot Password',
      } as RouteMeta & IRouteMeta,
      component: () => import('@/views/ForgotPassword.vue'),
    },
    {
      path: `${base}/dashboard`,
      name: 'Dashboard',
      component: DashboardLayoutVue,
      redirect: `${base}/dashboard/home`,
      meta: {
        title: 'Dashboard',
      },
      children: [
        {
          path: 'notifications',
          name: 'Notifications',
          meta: {
            title: 'Notifications',
          } as RouteMeta & IRouteMeta,
          component: () => import('@/views/Notifications.vue'),
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/dashboard/examples/Home.vue'),
          meta: {
            title: 'DashboardHome',
          } as RouteMeta & IRouteMeta,
        },
        {
          path: 'patient',
          name: 'patient_index',
          component: () =>
            import('@/views/dashboard/examples/patient/Index.vue'),
          meta: {
            title: 'Patients',
          } as RouteMeta & IRouteMeta,
        },
        {
          path: 'patient/:patientId',
          name: 'patient_show',
          component: () =>
            import('@/views/dashboard/examples/patient/View.vue'),
          meta: {
            title: 'Patient',
          } as RouteMeta & IRouteMeta,
        },
        {
          path: 'user',
          name: 'user_index',
          component: () => import('@/views/dashboard/examples/user/Index.vue'),
          meta: {
            title: 'User',
          } as RouteMeta & IRouteMeta,
        },
        {
          path: 'settings',
          name: 'settings_index',
          component: () =>
            import('@/views/dashboard/examples/settings/Index.vue'),
          meta: {
            title: 'Settings',
          } as RouteMeta & IRouteMeta,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: 'Page Not Found',
      } as RouteMeta & IRouteMeta,
    },
  ],
});

router.beforeEach((loc) => {
  document.title = loc.meta.title as string;
});

// function preloadImage(to, from, next) {
//   // if (window.innerWidth < 1024) {
//   //   return next();
//   // }
//   const bgImages = [bg1, bg2, bg3, bg4];
//   const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
//   const img = new Image();
//   img.src = randomImage;
//   img.onload = () => {
//     to.meta.bgImage = randomImage;
//     next();
//   };
// }

export default router;
