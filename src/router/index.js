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
      name: "About",
      path: "/about",
      component: () => import("../pages/AboutPage.vue"),
    },
    {
      name: "Explorer",
      path: "/explore",
      component: () => import("../pages/ExplorerPage.vue"),
    },
    {
      name: "Services",
      path: "/services",
      component: () => import("../pages/ServicesPage.vue"),
    },
    {
      name: "Blogs",
      path: "/blogs",
      component: () => import("../pages/BlogsPage.vue"),
    },
    {
      name: "Contact",
      path: "/contact",
      component: () => import("../pages/ContactPage.vue"),
    },
    {
      name: "BlogPage",
      path: "/blog/:title",
      component: () => import("../components/GlobalComponents/Blog.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page on navigation
    window.scrollTo(0, 0); // Explicitly reset scroll
    return { x: 0, y: 0 };
  },
});

export default router;
