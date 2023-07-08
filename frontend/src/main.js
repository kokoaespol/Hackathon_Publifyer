import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router.js'
import GenieService from "./services/genieService.js"


createApp(App)
  .provide("services.genie", new GenieService())
  .use(router())
  .mount('#app')
