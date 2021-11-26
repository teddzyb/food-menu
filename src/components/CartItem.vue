<template>
  <li class="list-group-item">
    <div class="container-fluid">
      <div class="row m-3">
        <div class="col row flex-column justify-content-between">
          <div class="row">
            <h5>{{ item.name }}</h5>
            <p>P{{ item.price }}.00</p>
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
                <div class="col-3">
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
                  <button class="btn btn-dark">Add to Cart</button>
                </div>
                <div class="col-auto">
                  <button class="btn btn-danger">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <img class="img-fluid rounded-3" :src="item.img" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
};
</script>
