import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import TechnologiesPage from "../views/TechnologiesPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/technologies", name: "Technologies", component: TechnologiesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
