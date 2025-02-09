import "./assets/main.css";
import "./assets/font.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App);

app.use(router);
app.use(VueLazyLoad, {});
app.component("Flicking-Items", Flicking);

app.mount("#app");
