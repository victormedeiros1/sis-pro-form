import { createWebHashHistory, createRouter } from "vue-router"

import Home from "@/pages/Home/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})