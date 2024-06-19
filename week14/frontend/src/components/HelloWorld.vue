<template>
  <div class="hello">
    <h2>Users</h2>
    <div v-if="loading">Loading ...</div>
    <div v-else>
      <div v-for="user in users" v-bind:key="user.id">{{ user.name }}</div>
    </div>
    <div v-if="error != ''">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      loading: false,
      users: [],
      error: "",
    };
  },
  methods: {
    loadUsers: function () {
      var self = this;
      self.loading = true;
      axios
        .get("http://localhost:8081/users")
        .then(function (response) {
          // handle success
          self.users = response.data;
        })
        .catch(function (error) {
          // handle error
          console.error(error);
          self.error = `Error fetching users! Error: ${error} Please try again.`;
        })
        .then(function () {
          // always executed
          self.loading = false;
        });
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
