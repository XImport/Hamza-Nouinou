import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define your routes here, for example:
    {
      path: "/",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/about",
      component: () => import("../pages/AboutPage.vue"),
    },
    {
      path: "/explore",
      component: () => import("../pages/ExplorerPage.vue"),
    },
  ],
});

export default router;
