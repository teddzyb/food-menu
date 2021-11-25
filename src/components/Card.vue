<template>
  <div class="card border-dark col-sm-3 text-center mx-4 px-0">
    <img
      :src="item.img"
      class="card-img-top"
      :alt="item.name"
      style="height: 15rem; object-fit: cover"
    />
    <div class="container-fluid">
      <div class="card-body row mx-3">
        <h5 class="card-title">{{ item.name }}</h5>
        <h6 class="card-text">P{{ item.price }}.00</h6>
        <router-link
          class="btn btn-dark text-decoration-none mt-3"
          :to="{
            name: 'ItemDetails',
            params: { pathname: item.id },
            query: {
              n: item.name,
              p: item.price,
              c: item.category.join(', '),
              i: item.img,
              d: item.description,
              q: item.quantity,
            },
          }"
        >
          Details
        </router-link>
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
