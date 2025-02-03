import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginPage from '@/views/auth/LoginPage.vue';
import GuestLayout from '@/views/layouts/GuestLayout.vue';
import NotFound from "@/views/NotFound.vue";
import AppLayout from "@/views/layouts/AppLayout.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import PrisaoPage from "@/views/PrisaoPage.vue";
import IndexCategoryPage from "@/views/category/IndexCategoryPage.vue";
import CreateCategoryPage from "@/views/category/CreateCategoryPage.vue";
import CreateCrimePage from "@/views/category/crime/CreateCrimePage.vue";
import { useStore } from "@/store";
import hasRoles from "@/helpers/hasRoles";

interface CustomRouteMeta {
  requiresAuth?: boolean;
  roles?: string[];
}

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
        meta: {
          requiresAuth: true,
          roles: ['administrator'],
        },
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
          },
          {
            path: ':id/crimes',
            children: [
              {
                path: 'create',
                name: 'CreateCrimePage',
                component: CreateCrimePage,
              },
              {
                path: ':crimeId/edit',
                name: 'EditCrimePage',
                component: CreateCrimePage,
              },
            ],
          },
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
  history: createWebHashHistory('/'),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore()
  const user = store.state.user;

  const meta = to.meta as CustomRouteMeta;

  if (meta.roles) {
    if (meta.roles && !meta.roles.some((role: string) => hasRoles(user, role))) {
      return next({ name: "DashboardPage" });
    }
  }

  next();
});

export default router;