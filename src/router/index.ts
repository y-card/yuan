import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: {
        type: "default",
      },
    },
    {
      path: "/parents-wonseon",
      name: "parents-wonseon",
      component: HomeView,
      props: {
        type: "parents-wonseon",
      },
    },
    {
      path: "/parents-eunmi",
      name: "parents-eunmi",
      component: HomeView,
      props: {
        type: "parents-eunmi",
      },
    },
  ],
});

export default router;
