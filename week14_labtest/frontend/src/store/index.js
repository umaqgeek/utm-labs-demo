import { createStore } from "vuex";
import axios from "axios";

const API_URL = "http://localhost:8081";

export default createStore({
  state: {
    loading: false,
    errorMessage: "",
    users: [],
  },
  getters: {
    getLoading: (state) => state.loading,
    getUsers: (state) => state.users,
    getErrorMessage: (state) => state.errorMessage,
  },
  mutations: {
    loadUsers: (state) => {
      state.loading = true;
      axios
        .get(`${API_URL}/users`)
        .then((response) => {
          state.errorMessage = "";
          state.users = response.data;
        })
        .catch((error) => {
          state.errorMessage = error.response?.data?.message || error;
        })
        .finally(() => {
          state.loading = false;
        });
    },
    saveUser: (state, payload) => {
      state.loading = true;
      axios
        .post(`${API_URL}/user`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          state.loading = true;
          axios
            .get(`${API_URL}/users`)
            .then((responseInner) => {
              state.errorMessage = "";
              state.users = responseInner.data;
            })
            .catch((error) => {
              state.errorMessage = error.response?.data?.message || error;
            })
            .finally(() => {
              state.loading = false;
            });
        })
        .catch((error) => {
          state.errorMessage = error.response?.data?.message || error;
        })
        .finally(() => {
          state.loading = false;
        });
    },
    removeUser: (state, id) => {
      axios
        .delete(
          `${API_URL}/user/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          state.loading = true;
          axios
            .get(`${API_URL}/users`)
            .then((responseInner) => {
              state.errorMessage = "";
              state.users = responseInner.data;
            })
            .catch((error) => {
              state.errorMessage = error.response?.data?.message || error;
            })
            .finally(() => {
              state.loading = false;
            });
        })
        .catch((error) => {
          state.errorMessage = error.response?.data?.message || error;
        })
        .finally(() => {
          state.loading = false;
        });
    },
    updateUser: (state, { id, payload }) => {
      state.loading = true;
      axios
        .put(`${API_URL}/user/${id}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          state.loading = true;
          axios
            .get(`${API_URL}/users`)
            .then((responseInner) => {
              state.errorMessage = "";
              state.users = responseInner.data;
            })
            .catch((error) => {
              state.errorMessage = error.response?.data?.message || error;
            })
            .finally(() => {
              state.loading = false;
            });
        })
        .catch((error) => {
          state.errorMessage = error.response?.data?.message || error;
        })
        .finally(() => {
          state.loading = false;
        });
    },
  },
  actions: {
    fetchUsers: ({ commit }) => {
      commit("loadUsers");
    },
    saveUser: ({ commit }, payload) => {
      commit("saveUser", payload);
    },
    removeUser: ({ commit }, id) => {
      commit("removeUser", id);
    },
    updateUser: ({ commit }, data) => {
      commit("updateUser", data);
    },
  },
  modules: {},
});
