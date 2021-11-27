<template>
  <li v-if="item != ''" class="list-group-item">
    <div class="container-fluid">
      <div class="row flex-row-reverse m-3">
        <div class="col-md-3">
          <img class="img-fluid rounded-3" :src="item.i" />
        </div>
        <div class="col-sm d-flex flex-column justify-content-between">
          <div class="row">
            <h5>{{ item.n }}</h5>
            <p>P{{ item.p }}.00</p>
          </div>
          <div class="row">
            <div class="col-auto">
              <div class="col-auto row">
                <div class="col-auto px-0">
                  <h3>
                    <i
                      @click="decrement"
                      class="bi bi-file-minus-fill text-dark"
                      style="cursor: pointer"
                    ></i>
                  </h3>
                </div>
                <div class="col-4">
                  <input
                    v-model="count"
                    @input="check()"
                    class="form-control text-center"
                    type="number"
                  />
                </div>
                <div class="col-auto px-0 me-3">
                  <h3>
                    <i
                      @click="increment"
                      class="bi bi-file-plus-fill text-dark"
                      style="cursor: pointer"
                    ></i>
                  </h3>
                </div>
                <div class="col-auto">
                  <button
                    @click="$emit('delete-item', item.id)"
                    class="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item text-center my-5" v-else>Your cart is empty!</li>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  emits: ["subtract-price", "add-price", "delete-item"],
  data() {
    return {
      count: this.item.o,
      countErr: "",
    };
  },
  methods: {
    check() {
      this.countErr = "";
      if (this.count > this.item.q) {
        this.count = this.item.q;
      } else if (this.count < 1) {
        this.count = 1;
      }
    },
    decrement() {
      this.countErr = "";
      this.count > 1
        ? this.count--
        : (this.countErr = "Quantity cannot be less than 1!");
      this.$emit("subtract-price", -(this.item.p * (this.count - this.item.o)));
    },
    increment() {
      this.countErr = "";
      this.count < this.item.q
        ? this.count++
        : (this.countErr = "Quantity has exceeded stock!");
      this.$emit("add-price", this.item.p * (this.count - this.item.o));
    },
  },
};
</script>
