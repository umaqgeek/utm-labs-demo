<template>
  <div class="main">
    <NavbarComponent />
    <div class="content">
      <h3>List of Photos</h3>
      <hr />
      <div v-if="loading === true">Fetching photos ...</div>
      <div v-else>
        <div v-for="photo in photos" v-bind:key="photo.id">
          {{ photo.id }}. {{ photo.title }}<br />
          <img v-bind:src="photo.thumbnailUrl" alt="photo thumbnail" />
        </div>
      </div>
      <div v-if="loading === false && error !== ''">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavbarComponent from "@/components/Navbar";
import PhotosStore from "@/store/Photos";

export default {
  name: "PhotosView",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      photos: [],
      loading: false,
      error: "",
    };
  },
  mounted() {
    var self = this;
    self.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        // handle success
        self.photos = response.data.slice(0, 10);
        PhotosStore.photos = self.photos;
        PhotosStore.photosOri = self.photos;
      })
      .catch(function (error) {
        // handle error
        console.error(error);
        self.error = "Error fetching photos! Please try again.";
      })
      .then(function () {
        // always executed
        self.loading = false;
      });
  },
};
</script>

<style scoped>
div {
  padding: 10px 0px;
}
img {
  max-height: 50px;
}
</style>
