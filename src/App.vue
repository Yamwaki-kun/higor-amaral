
<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
      </div>
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

.content {
  flex-grow: 1;
  padding-left: 60px; /* Largura da sidebar */
  transition: padding-left 0.3s ease-in-out;
}

body {
  background-color: #fff;
  color: #fff;
  width: 100%;
  margin: 0px;
  overflow-x: hidden;
  
}

</style>
