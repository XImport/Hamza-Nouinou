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
    {
      path: "/services",
      component: () => import("../pages/ServicesPage.vue"),
    },
    {
      path: "/blogs",
      component: () => import("../pages/BlogsPage.vue"),
    },
    {
      path: "/contact",
      component: () => import("../pages/ContactPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page on navigation
    window.scrollTo(0, 0); // Explicitly reset scroll
    return { x: 0, y: 0 };
  },
});

export default router;
