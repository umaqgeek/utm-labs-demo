import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/Home.vue";
import AboutView from "@/views/About.vue";
import ProfileView from "@/views/Profile.vue";
import PhotosView from "@/views/Photos.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/photos",
    name: "photos",
    component: PhotosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
