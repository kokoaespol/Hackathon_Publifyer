import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage, },
    ],
  });
}
