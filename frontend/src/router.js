import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Video2Genie from "./components/Video2Genie.vue";

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage },
      { path: "/new", component: NewGenie },
      { path: "/new2", component: Video2Genie },
    ],
  });
}
