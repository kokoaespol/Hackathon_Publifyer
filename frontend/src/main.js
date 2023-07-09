import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router.js";
import GenieService from "./services/genieService.js";
import VideoService from "./services/videoService.js";

createApp(App)
  .provide("services.genies", new GenieService())
  .provide("services.video", new VideoService())
  .use(router())
  .mount("#app");
