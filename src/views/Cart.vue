<template>
  <div class="container py-5">
    <div class="card border-dark mx-5">
      <div class="card-header text-center fw-bold bg-dark text-light">
        My Cart
      </div>
      <ul class="list-group list-group-flush">
        <CartItem
          @delete-item="deleteItem"
          :key="item.id"
          v-for="item in items"
          :item="item"
        />
        <li class="list-group-item m-4" v-if="items != ''">
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
      subtotal: 0,
      cartItems: [],
      discount: 0,
      cupoun: "",
      paid: "",
      checkout: "",
    };
  },
  computed: {
    total: function () {
      let subtotal = 0;
      this.items.forEach((item) => {
        subtotal += item.p * item.o;
      });
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
    deleteItem(id) {
      this.cartItems.forEach((item) => {
        if (item.indexOf('{"id":"' + id) > -1) {
          this.$emit("remove-item", item.indexOf('{"id":"' + id));
        }
      });
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
      } else {
        this.checkout = "failure";
      }
    },
  },
};
</script>
