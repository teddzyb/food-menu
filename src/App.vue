<template>
  <!-- Nav Bar -->
  <div class="container-fluid text-light px-5 py-4">
    <div class="row">
      <div class="col">
        <h5 class="col-auto">
          Food Menu<span class="text-secondary fs-6 fw-normal">
            by Edwin Bartlett</span
          >
        </h5>
      </div>
      <div class="col-auto">
        <router-link
          to="/"
          class="col-auto btn btn-light border-dark text-decoration-none"
          >Menu</router-link
        >
      </div>
      <div class="col-auto">
        <router-link
          :to="{
            name: 'Cart',
            query: {
              cart: opCartDetails,
            },
          }"
          class="col-auto btn btn-light border-dark text-decoration-none"
          >Cart</router-link
        >
      </div>
    </div>
  </div>

  <!-- Menu -->
  <router-view @add-cart="addCart" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cartDetails: [],
    };
  },
  computed: {
    opCartDetails: function () {
      return this.cartDetails
        .map((details) => {
          return JSON.stringify(details);
        })
        .join("|");
    },
  },
  methods: {
    addCart(details) {
      this.cartDetails.push(details);
      console.log(this.cartDetails);
    },
  },
};
</script>

<style>
/* div {
  border: 1px solid black;
} */
html {
  height: 100%;
}
body {
  background-image: url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(5px);

  min-height: 100%;
  overflow: overlay;
}
.form-control:focus {
  border-color: #212529;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #212529;
  border-radius: 100px;
}
</style>
