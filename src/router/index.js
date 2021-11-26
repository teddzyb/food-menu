import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import ItemDetails from "../views/ItemDetails.vue";
import Cart from "../views/Cart.vue";

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
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
