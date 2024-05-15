<template>
  <h2>This is Vue App</h2>
  <NavbarVue />
  <ContentVue />
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import ContentVue from './components/Content.vue';

export default {
  name: 'App',
  components: {
    NavbarVue,
    ContentVue,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
