import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Acerca from "./components/Acerca.vue"

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage, },
      { path: "/new", component: NewGenie, },
      { path: "/acerca", component: Acerca,},
    ],
  });
}
