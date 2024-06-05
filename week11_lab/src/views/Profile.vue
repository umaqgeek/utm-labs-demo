<template>
  <div class="main">
    <NavbarComponent />
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>
            <input
              type="text"
              name="name"
              placeholder="Enter name here..."
              v-model="name"
            />
          </td>
        </tr>
        <tr>
          <td>Course Year</td>
          <td>:</td>
          <td>
            <input
              type="text"
              name="courseYear"
              placeholder="Enter course year here..."
              v-model="courseYear"
            />
          </td>
        </tr>
        <tr>
          <td>Matrix No.</td>
          <td>:</td>
          <td>
            <input
              type="text"
              name="matrixNo"
              placeholder="Enter matrix no. here..."
              v-model="matrixNo"
            />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>:</td>
          <td>
            <textarea
              name="address"
              placeholder="Enter address here..."
              v-model="address"
            >
            </textarea>
          </td>
        </tr>
        <tr>
          <td colspan="3" align="center">
            <button v-on:click="saveProfile">Save</button>
            &nbsp;&nbsp;
            <button v-on:click="resetProfile">Reset</button>
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
  name: "ProfileView",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      name: "",
      courseYear: "",
      matrixNo: "",
      address: "",
    };
  },
  mounted() {
    this.name = ProfileStore.name;
    this.courseYear = ProfileStore.courseYear;
    this.matrixNo = ProfileStore.matrixNo;
    this.address = ProfileStore.address;
  },
  methods: {
    resetProfile: function () {
      this.name = ProfileStore.name;
      this.courseYear = ProfileStore.courseYear;
      this.matrixNo = ProfileStore.matrixNo;
      this.address = ProfileStore.address;
    },
    saveProfile: function () {
      ProfileStore.updateData({
        name: this.name,
        courseYear: this.courseYear,
        matrixNo: this.matrixNo,
        address: this.address,
      });
      alert("Profile saved!");
    },
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
  padding: 12px;
  font-size: 1.3em;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}
strong {
  color: #ff7200;
  font-size: 34px;
}
input,
textarea {
  width: 100%;
  border: 0px solid grey;
  border-radius: 4px;
  height: 100%;
  padding: 16px;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
button {
  cursor: pointer;
  padding: 8px 40px;
  border-radius: 4px;
  background-color: green;
  color: white;
  border-color: green;
  font-weight: bold;
  font-size: 1.1em;
}
</style>
