import Vue from "vue";
import Vuex from "vuex";
import zipCode from "./modules/zipCode";

import geoLocation from "./modules/geoLocation";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { zipCode, geoLocation },
});
