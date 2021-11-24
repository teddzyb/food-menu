<template>
  <div class="card col-sm-3 text-center mb-4">
    <img :src="item.img" class="card-img-top" :alt="item.name" />
    <div class="container-fluid">
      <div class="card-body row px-5">
        <h5 class="card-title">{{ item.name }}</h5>
        <h6 class="card-text">P {{ item.price }}.00</h6>
        <a href="#" class="btn btn-success mt-3">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object,
  },
};
</script>
