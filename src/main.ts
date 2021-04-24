import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faExternalLinkAlt,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackExchange,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faEnvelope,
  faExternalLinkAlt,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMapMarked,
  faMedium,
  faStackExchange,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
