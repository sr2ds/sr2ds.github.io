<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
h1,
h2,
h3 {
  font-family: "Imprima", sans-serif;
  font-weight: 400;
  color: white;
}
button,
p,
span,
li,
ul {
  font-family: "Jaldi", sans-serif;
  font-size: 18px;
  color: white;
  margin: 0rem;
}
body {
  height: 98vh;
  background-image: linear-gradient(to bottom, #009cd6, #006bb9);
}
</style>
