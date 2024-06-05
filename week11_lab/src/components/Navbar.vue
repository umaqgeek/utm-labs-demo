<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">W.Tech.</h2>
    </div>
    <div class="menu">
      <ul>
        <li v-for="menu in menus" v-bind:key="menu.label">
          <router-link v-bind:to="menu.link">{{ menu.label }}</router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <input
        class="srch"
        type="search"
        name="search"
        placeholder="Type To Find"
        v-model="search"
      />
      <a href="#"> <button class="btn" v-on:click="searchData">Find</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      search: "",
      menus: [
        {
          link: "/",
          label: "HOME",
        },
        {
          link: "/about",
          label: "ABOUT",
        },
        {
          link: "/profile",
          label: "PROFILE",
        },
        {
          link: "/photos",
          label: "PHOTOS",
        },
      ],
    };
  },
  methods: {
    searchData: function () {
      console.log(this.search);
    },
  },
};
</script>
