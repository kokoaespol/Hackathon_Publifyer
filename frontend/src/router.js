import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import ContentGuide from "./components/ContentGuide.vue";

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage, },
      { path: "/new", component: NewGenie, },
      { path: "/guide", component: ContentGuide, }
    ],
  });
}
