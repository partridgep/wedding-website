import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import OurStory from "../views/OurStory.vue"
import WeddingDetails from "../views/WeddingDetails.vue"
import RSVP from "../views/RSVP.vue"
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
    name: "Our Story",
    component: OurStory,
  },
  {
    path: "/wedding-details",
    name: "Wedding Details",
    component: WeddingDetails,
  },
  {
    path: "/rsvp",
    name: "RSVP",
    component: RSVP,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
  {
    path: '/*',
  }
 ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router;