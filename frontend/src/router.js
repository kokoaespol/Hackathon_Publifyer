import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import NewGenie from "./components/NewGenie.vue";
import Acerca from "./components/Acerca.vue"
import InicioSesion from './components/InicioSesion.vue'
import Registro from './components/Registro.vue'

export default function router() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: LandingPage, },
      { path: "/new", component: NewGenie, },
      { path: "/acerca", component: Acerca,},
      { path: "/registro", component: Registro,},
      { path: "/sesion", component: InicioSesion,},
    ],
  });
}
