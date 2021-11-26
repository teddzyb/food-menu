<template>
  <li class="list-group-item">
    <div class="container-fluid">
      <div class="row m-3">
        <div class="col">
          <h5>{{ item.name }}</h5>
          <p>P{{ item.price }}.00</p>
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
