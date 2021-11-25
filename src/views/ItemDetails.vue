<template>
  <div class="container my-5">
    <div class="card mx-5">
      <h4 class="card-header">{{ $route.query.n }}</h4>
      <div class="container-fluid">
        <div class="card-body row flex-row-reverse">
          <div class="col-md-4">
            <img :src="$route.query.i" class="img-fluid rounded-3" />
          </div>
          <div class="col-sm d-flex flex-column justify-content-between">
            <div class="row">
              <h6>Category: {{ $route.query.c }}</h6>
              <p class="card-text">
                {{ $route.query.d }}
              </p>
              <h5 class="card-title">P{{ $route.query.p }}.00</h5>
            </div>
            <div class="row">
              <div class="col-auto">
                <div class="col-auto row">
                  <div class="col-auto px-0">
                    <h3>
                      <i
                        @click="decrement"
                        class="bi bi-file-minus-fill text-warning"
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
                        class="bi bi-file-plus-fill text-warning"
                      ></i>
                    </h3>
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-outline-success">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="countErr != ''" class="text-danger mt-2">
            {{ countErr }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemDetails",
  data() {
    return {
      count: 1,
      countErr: "",
    };
  },
  methods: {
    check() {
      this.countErr = "";
      if (this.count > this.$route.query.q) {
        this.count = this.$route.query.q;
      } else if (this.count < 1) {
        this.count = 1;
      }
    },
    decrement() {
      this.countErr = "";
      this.count > 1
        ? this.count--
        : (this.countErr = "Quantity cannot be less than 1...");
    },
    increment() {
      this.countErr = "";
      this.count < this.$route.query.q
        ? this.count++
        : (this.countErr = "Quantity has exceeded stock...");
    },
  },
};
</script>
