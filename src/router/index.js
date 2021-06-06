import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import OurStory from "../views/OurStory.vue"
import WeddingDetails from "../views/WeddingDetails.vue"
import Registry from "../views/Registry.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: OurStory,
  },
  {
    path: "/wedding-details",
    name: "WeddingDetails",
    component: WeddingDetails,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
 ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router;