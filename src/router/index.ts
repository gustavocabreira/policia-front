import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginPage from '@/views/auth/LoginPage.vue';
import GuestLayout from '@/views/layouts/GuestLayout.vue';
import NotFound from "@/views/NotFound.vue";
import AppLayout from "@/views/layouts/AppLayout.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import PrisaoPage from "@/views/PrisaoPage.vue";
import IndexCategoryPage from "@/views/category/IndexCategoryPage.vue";
import CreateCategoryPage from "@/views/category/CreateCategoryPage.vue";

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
      {
        path: 'prisao',
        name: 'PrisaoPage',
        component: PrisaoPage,
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            name: 'CategoriesIndexPage',
            component: IndexCategoryPage,
          },
          {
            path: 'create',
            name: 'CreateCategoryPage',
            component: CreateCategoryPage,
          },
          {
            path: ':id/edit',
            name: 'EditCategoryPage',
            component: CreateCategoryPage,
          }
        ],
      }
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