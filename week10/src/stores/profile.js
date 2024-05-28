import { reactive } from "vue";

const ProfileStore = reactive({
  name: "Umar Mukhtar",
  age: 33,
  hobbies: [],
  updateName(value) {
    this.name = value;
  },
});

export default ProfileStore;
