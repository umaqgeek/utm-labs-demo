<template>
  <div class="main">
    <NavbarComponent />
    <ContentComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/Navbar";
import ContentComponent from "@/components/Content";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    ContentComponent,
  },
};
</script>
