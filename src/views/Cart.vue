<template>
  <div class="container py-5">
    <div class="card border-dark mx-5">
      <div class="card-header text-center fw-bold bg-dark text-light">
        My Cart
      </div>
      <ul class="list-group list-group-flush">
        <CartItem
          @delete-item="deleteItem"
          @add-price="alterPrice"
          @subtract-price="alterPrice"
          :key="item.id"
          v-for="item in items"
          :item="item"
        />
        <li
          class="list-group-item m-4"
          v-if="items != '' || this.checkout != ''"
        >
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
            class="form-control mb-3"
            type="number"
            placeholder="Enter amount to pay"
          />
          <button @click="checkPaid(total)" class="btn btn-dark mt-3">
            Proceed
          </button>
          <p v-if="checkout == 'success'" class="text-success mt-4">
            Successfully ordered!
          </p>
          <p v-if="checkout == 'failure'" class="text-danger mt-4">
            Insufficient balance!
          </p>
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
      subtotal: 0,
      discount: 0,
      cupoun: "",
      paid: "",
      checkout: "",
      alter: 0,
    };
  },
  computed: {
    total: function () {
      let subtotal = 0;
      this.items.forEach((item) => {
        subtotal += item.p * item.o;
      });
      if (this.alter != 0) {
        subtotal += this.alter;
      }
      return subtotal - subtotal * this.discount;
    },
    items: function () {
      return this.cartItems.map((item) => {
        return item ? JSON.parse(item) : "";
      });
    },
  },
  created() {
    this.cartItems = this.$route.query.cart.split("|");
  },
  methods: {
    // Buggy
    alterPrice(amount) {
      this.alter += amount;
    },
    deleteItem(id) {
      console.log(id);
    },
    checkCoupon() {
      if (this.coupon == "menu50") {
        this.discount = 0.5;
      } else if (this.coupon == "menu20") {
        this.discount = 0.2;
      } else if (this.coupon == "menu10") {
        this.discount = 0.1;
      } else {
        this.discount = 0;
      }
      // Add 'menu200flat' discount
    },
    checkPaid(total) {
      if (this.paid >= total) {
        this.checkout = "success";
        this.$router.replace({ query: { cart: "" } });
        this.cartItems = [];
      } else {
        this.checkout = "failure";
      }
    },
  },
};
</script>
