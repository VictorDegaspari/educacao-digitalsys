import { createRouter, createWebHistory } from "vue-router";
import listaAtividades from "../views/listaAtividades.vue";

const routes = [
  {
    path: "/",
    name: "listaAtividades",
    component: listaAtividades,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
