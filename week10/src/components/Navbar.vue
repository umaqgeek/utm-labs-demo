<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Update Profile</router-link> |
    <router-link to="/todos">To Do List</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavbarVue",
};
</script>

<style scoped>
nav {
  padding: 30px;
  position: fixed;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
