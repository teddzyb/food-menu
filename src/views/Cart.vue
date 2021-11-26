<template>
  <div class="container py-5">
    <div class="card border-dark mx-5">
      <div class="card-header text-center fw-bold bg-dark text-light">
        My Cart
      </div>
      <ul class="list-group list-group-flush">
        <CartItem :key="item.id" v-for="item in items" :item="item" />
        <li
          class="list-group-item text-center my-5"
          v-if="cartItems.length == 0"
        >
          Your cart is empty!
        </li>
        <li class="list-group-item m-4" v-else>
          <h5 class="mb-4">Cart Total: P{{ total }}.00</h5>
          <p>Discounts:</p>
          <input
            v-model="coupon"
            @input="checkCoupon()"
            class="form-control mb-3"
            type="text"
            placeholder="Enter a coupon code"
          />
          <p>Checkout:</p>
          <input
            v-model="paid"
            @input="checkPaid()"
            class="form-control mb-3"
            type="number"
            placeholder="Enter amount to pay"
          />
          <button class="btn btn-dark mt-3">Proceed</button>
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
      total: 0,
      cartItems: [],
    };
  },
  computed: {
    items: function () {
      return this.cartItems.map((item) => {
        return JSON.parse(item);
      });
    },
  },
  created() {
    this.cartItems = this.$route.query.cart.split("|");
  },
};
</script>
