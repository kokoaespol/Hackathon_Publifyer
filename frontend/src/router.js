import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Acerca from "./components/Acerca.vue";
import ContentGuide from "./components/ContentGuide.vue";
import ContentVideo from "./components/Video2Genie.vue";
import InicioSesion from "./components/InicioSesion.vue"
import Registro from "./components/Registro.vue"
import Genies from "./components/Genies.vue"


export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage },
      { path: "/new", component: NewGenie },
      { path: "/acerca", component: Acerca },
      { path: "/guide", component: ContentGuide },
      { path: "/video", component: ContentVideo },
      { path: "/sesion", component: InicioSesion},      
      { path: "/sign-up", component: Registro },
      { path: "/genies", component: Genies },
      { path: "/:pathMatch(.*)*", redirect: "/"}    
    ],
  });
}
