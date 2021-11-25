<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
/* div {
  border: 1px solid black;
} */
html {
  height: 100%;
}
body {
  background-image: url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(5px);

  min-height: 100%;
  overflow: overlay;
}
.form-control:focus {
  border-color: #212529;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #212529;
  border-radius: 100px;
}
</style>
