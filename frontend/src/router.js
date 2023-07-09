import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Acerca from "./components/Acerca.vue";
import ContentGuide from "./components/ContentGuide.vue";
import ContentVideo from "./components/Video2Genie.vue";
import Registro from "./components/Registro.vue";

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage },
      { path: "/new", component: NewGenie },
      { path: "/acerca", component: Acerca },
      { path: "/guide", component: ContentGuide },
      { path: "/video", component: ContentVideo },
      { path: "/sign-up", component: Registro },
      { path: "/:pathMatch(.*)*", redirect: "/"}    
    ],
  });
}
