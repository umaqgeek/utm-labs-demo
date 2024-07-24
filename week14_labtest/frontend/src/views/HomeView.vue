<template>
  <div class="row">
    <div class="col-5 offset-1">
      <div class="card mt-5">
        <div class="card-body">
          <div class="row input-container mb-2">
            <div class="col-3">Name :</div>
            <div class="col-9">
              <input
                type="text"
                class="form-control"
                placeholder="Umar Mukhtar"
                v-model="name"
              />
            </div>
          </div>
          <div class="row input-container mb-2">
            <div class="col-3">Email :</div>
            <div class="col-9">
              <input
                type="text"
                class="form-control"
                placeholder="umar@gmail.com"
                v-model="email"
              />
            </div>
          </div>
          <div class="row input-container mb-2">
            <div class="col-9 offset-3">
              <button
                type="button"
                class="btn btn-success"
                v-on:click="saveUser"
              >
                Save
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="updateUser"
              >
                Update
              </button>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-12">
              <div v-if="errorMessage !== ''" class="alert alert-danger">
                {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="card mt-5">
        <div class="card-body">
          <h3>List of Users</h3>
          <hr />
          <div v-if="loading">Loading ...</div>
          <div v-else-if="users.length <= 0">- No user yet -</div>
          <div v-else>
            <div
              class="user-list-container"
              v-for="user in users"
              v-bind:key="user.id"
            >
              <div class="user-list-left-container">
                <div>{{ user.name }}</div>
                <div>({{ user.email }})</div>
              </div>
              <div>
                <button
                  class="btn btn-primary mb-2"
                  v-on:click="() => chooseUser(user.id)"
                >
                  Choose
                </button>
                <button
                  class="btn btn-danger"
                  v-on:click="() => removeUser(user.id)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      id: "0",
      name: "",
      email: "",
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
    users() {
      return this.$store.getters.getUsers;
    },
    errorMessage() {
      return this.$store.getters.getErrorMessage;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    saveUser() {
      this.$store.dispatch("saveUser", {
        name: this.name,
        email: this.email,
      });
      this.id = "0";
      this.name = "";
      this.email = "";
    },
    removeUser(id) {
      var confirm = window.confirm(
        "Are you sure you want to remove this user?"
      );
      if (confirm) {
        this.$store.dispatch("removeUser", id);
        this.id = "0";
        this.name = "";
        this.email = "";
      }
    },
    chooseUser(id) {
      const user = this.$store.getters.getUsers.find((user) => user.id === id);
      this.id = user?.id;
      this.name = user?.name;
      this.email = user?.email;
    },
    updateUser() {
      this.$store.dispatch("updateUser", {
        id: this.id,
        payload: {
          name: this.name,
          email: this.email,
        },
      });
      this.id = "0";
      this.name = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.user-list-container {
  background-color: aliceblue;
  margin: 10px;
  padding: 12px;
  border-style: solid;
  border-width: 1px;
  border-color: darkblue;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.user-list-left-container {
  width: 90%;
}
</style>
