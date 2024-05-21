<template>
  <NavbarVue />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavbarVue from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    NavbarVue,
  },
};
</script>
