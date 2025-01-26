import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginPage from '@/views/auth/LoginPage.vue';
import GuestLayout from '@/views/layouts/GuestLayout.vue';
import NotFound from "@/views/NotFound.vue";
import AppLayout from "@/views/layouts/AppLayout.vue";
import DashboardPage from "@/views/DashboardPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: GuestLayout,
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginPage,
      },
    ],
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'DashboardPage',
        component: DashboardPage,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;