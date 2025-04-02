
<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar }
};
</script>

<style>
#app {
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
}

body {
  background-color: #fff;
  color: #fff;
  font-family: Arial, sans-serif;
  width: 100%;
  overflow-x: hidden;
}
</style>
