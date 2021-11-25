<template>
  <div class="card col-sm-3 text-center mx-4 px-0">
    <img :src="item.img" class="card-img-top" :alt="item.name" />
    <div class="container-fluid">
      <div class="card-body row mx-3">
        <h5 class="card-title">{{ item.name }}</h5>
        <h6 class="card-text">P {{ item.price }}.00</h6>
        <router-link
          class="btn btn-warning text-decoration-none mt-3"
          :to="{
            name: 'ItemDetails',
            params: { pathname: item.id },
            query: { name: item.name },
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
