import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
