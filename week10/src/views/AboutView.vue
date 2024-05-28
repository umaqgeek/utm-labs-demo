<template>
  <NavbarVue />
  <div class="about">
    <h1 @click="profileStore.updateName('hehe')">
      About page of {{ profileStore.name }}
    </h1>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>{{ profileStore.name }}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>:</td>
          <td>{{ profileStore.age }}</td>
        </tr>
        <tr>
          <td>Hobbies</td>
          <td>:</td>
          <td>{{ profileStore.hobbies.map((h) => h).join(", ") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";
import ProfileStore from "@/stores/profile";

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

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
table td {
  padding: 12px;
  border-bottom: 1px solid black;
}
</style>
