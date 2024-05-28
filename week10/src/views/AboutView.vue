<template>
  <NavbarVue />
  <div class="about">
    <h1 @click="profileStore.updateName('hehe')">
      This is an about page {{ profileStore.name }}
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";
import ProfileStore from "../stores/profile";

export default {
  name: "HomeView",
  components: {
    NavbarVue,
  },
  data() {
    return {
      profileStore: ProfileStore,
    };
  },
};
</script>
