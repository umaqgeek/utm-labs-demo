<template>
  <NavbarVue />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    NavbarVue,
  },
};
</script>
