<template>
  <h3>{{ $route.query.name }}</h3>
</template>

<script>
export default {
  name: "ItemDetails",
  props: {
    item: Object,
  },
};
</script>
