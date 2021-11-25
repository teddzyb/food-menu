import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import ItemDetails from "../views/ItemDetails.vue";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/item/:pathname",
    name: "ItemDetails",
    component: ItemDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
