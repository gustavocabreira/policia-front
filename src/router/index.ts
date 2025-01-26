import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginPage from '@/views/auth/LoginPage.vue';
import GuestLayout from '@/views/layouts/GuestLayout.vue';
import NotFound from "@/views/NotFound.vue";

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