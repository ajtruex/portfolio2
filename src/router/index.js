import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Projects from "../views/Projects.vue"
import Contact from "../views/Contact.vue"
import Project from "../views/Project.vue"
import Uses from "../views/Uses.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/uses",
    name: "uses",
    component: Uses
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/project/:slug",
    name: "project",
    component: Project
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
