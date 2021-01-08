// import { FontAwesomeIcon } from '@fortawesome / vue-fontawesome';
import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";


// Vue . componente ( 'font-awesome-icon' ,  FontAwesomeIcon )

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
