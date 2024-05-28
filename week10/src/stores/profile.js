import { reactive } from "vue";

const ProfileStore = reactive({
  name: "Umar Mukhtar",
  age: 33,
  hobbies: ["Archery", "Play games", "Badminton"],
  updateName(value) {
    this.name = value;
  },
  updateAge(value) {
    this.age = value;
  },
});

export default ProfileStore;
