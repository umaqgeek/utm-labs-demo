<template>
  <div class="content">
    <h3>To Do List</h3>
    <div v-if="loading === true">Fetching data ...</div>
    <div v-else>
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
          <strong v-if="todo.completed == true">{{ todo.title }}</strong>
          <span v-else>{{ todo.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoView",
  data() {
    return {
      todos: [],
      loading: false,
    };
  },
  mounted() {
    console.log("mounted");
    var self = this;
    self.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        console.log(response.data);
        self.todos = response.data;
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      })
      .then(function () {
        // always executed
        self.loading = false;
      });
  },
};
</script>
