<template>
  <div class="content">
    <h1>Update Profile</h1>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="Enter name here..."
            />
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td>:</td>
          <td>
            <input
              type="text"
              name="age"
              v-model="age"
              placeholder="Enter age here..."
            />
          </td>
        </tr>
        <tr>
          <td>Hobbies</td>
          <td>:</td>
          <td>{{ hobbies.map((h) => h).join(", ") }}</td>
        </tr>
        <tr>
          <td colspan="3">
            <button type="button" v-on:click="saveForm">Save</button>
            &nbsp;&nbsp;
            <button type="button" v-on:click="clearForm">Clear</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProfileStore from "@/stores/profile";

export default {
  name: "ProfileView",
  data() {
    return {
      name: "",
      age: "",
      hobbies: [],
    };
  },
  methods: {
    saveForm: function () {
      ProfileStore.name = this.name;
      ProfileStore.age = this.age;
      alert("Profile Saved!");
    },
    clearForm: function () {
      this.name = "";
      this.age = "";
    },
  },
  mounted() {
    this.name = ProfileStore.name;
    this.age = ProfileStore.age;
    this.hobbies = ProfileStore.hobbies;
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
input {
  width: 100%;
  border: 1px solid grey;
  border-radius: 4px;
  height: 100%;
  padding: 8px;
}
button {
  cursor: pointer;
  padding: 8px 40px;
  border-radius: 4px;
  background-color: green;
  color: white;
  border-color: green;
  font-weight: bold;
}
</style>
