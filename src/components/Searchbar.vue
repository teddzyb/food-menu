<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-9">
        <div class="input-group">
          <input
            v-model="value"
            @input="searchFilter"
            class="form-control border-warning"
            type="search"
            placeholder="Search a product name or category"
          />
          <button @click="searchFilter" class="btn btn-warning">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  emits: ["search-filter"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    searchFilter() {
      this.$emit("search-filter", this.value);
    },
  },
};
</script>
