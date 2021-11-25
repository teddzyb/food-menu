<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-9">
        <div class="input-group">
          <input
            v-model="value"
            @input="searchFilter"
            class="form-control border-dark"
            type="search"
            placeholder="Search an item name"
          />
          <button @click="searchFilter" class="btn btn-dark">Search</button>
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
