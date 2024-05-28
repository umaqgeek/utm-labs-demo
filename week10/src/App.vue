<template>
  <NavbarVue />
  <router-view />
</template>

<script>
import NavbarVue from "@/components/Navbar.vue";

export default {
  name: "AppVue",
  components: {
    NavbarVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  padding-top: 100px;
}
</style>
