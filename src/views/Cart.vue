<template>
  <div class="container py-5">
    <div class="card border-dark mx-5">
      <div class="card-header text-center fw-bold bg-dark text-light">
        My Cart
      </div>
      <ul class="list-group list-group-flush">
        <CartItem :key="item.id" v-for="item in cartItems" :item="item" />
        <li
          class="list-group-item text-center my-5"
          v-if="cartItems.length == 0"
        >
          Your cart is empty!
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [],
    };
  },
};
</script>
