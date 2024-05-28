<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Update Profile</router-link>
  </nav>
</template>

<script>
import ProfileStore from "../stores/profile";

export default {
  name: "NavbarVue",
  data() {
    return {
      profileName: ProfileStore.name,
    };
  },
};
</script>
