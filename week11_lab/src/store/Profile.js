import { reactive } from "vue";

const Profile = reactive({
  name: "Umar Mukhtar",
  courseYear: "3 SECJH",
  matrixNo: "A21MJ5213",
  address: "Salak South, Kuala Lumpur, Malaysia.",
  updateData({ name, courseYear, matrixNo, address }) {
    this.name = name;
    this.courseYear = courseYear;
    this.matrixNo = matrixNo;
    this.address = address;
    console.log(this.name);
  },
});

export default Profile;
