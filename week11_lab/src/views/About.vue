<template>
  <div class="main">
    <NavbarComponent />
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>
            <strong>{{ this.profileStore.name }}</strong>
          </td>
        </tr>
        <tr>
          <td>Course Year</td>
          <td>:</td>
          <td>
            <strong>{{ this.profileStore.courseYear }}</strong>
          </td>
        </tr>
        <tr>
          <td>Matrix No.</td>
          <td>:</td>
          <td>
            <strong>{{ this.profileStore.matrixNo }}</strong>
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>:</td>
          <td>
            <strong>{{ this.profileStore.address }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavbarComponent from "@/components/Navbar";
import ProfileStore from "@/store/Profile";

export default {
  name: "AboutView",
  components: {
    NavbarComponent,
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
  margin-top: 50px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 8px;
}
td {
  border-style: solid;
  border-width: 1px;
  padding: 20px;
  font-size: 1.3em;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}
strong {
  color: #ff7200;
  font-size: 34px;
}
</style>
