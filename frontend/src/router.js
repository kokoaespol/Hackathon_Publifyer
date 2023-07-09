import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Acerca from "./components/Acerca.vue";
import ContentGuide from "./components/ContentGuide.vue";
import ContentVideo from "./components/Video2Genie.vue";
<<<<<<< HEAD
import InicioSesion from "./components/InicioSesion.vue"
import Registro from "./components/Registro.vue"
=======
import Registro from "./components/Registro.vue";
>>>>>>> 1d41138148c41862537b649d7965b369c67a5783

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage },
      { path: "/new", component: NewGenie },
      { path: "/acerca", component: Acerca },
      { path: "/guide", component: ContentGuide },
      { path: "/video", component: ContentVideo },
<<<<<<< HEAD
      { path: "/sesion", component: InicioSesion},
      { path: "/registro", component: Registro},
      
=======
      { path: "/sign-up", component: Registro },
      { path: "/:pathMatch(.*)*", redirect: "/"}    
>>>>>>> 1d41138148c41862537b649d7965b369c67a5783
    ],
  });
}
