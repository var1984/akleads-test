import axios from "axios";

const state = {
  geoLoc: null,
};

const getters = {
  geoLoc(state) {
    return state.geoLoc;
  },
};

const mutations = {
  setGeoLoc(state, payload) {
    state.geoLoc = payload;
  },
};

const actions = {
  async getGeoLoc({ commit }) {
    try {
     const location = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=6db943e08c174c308eee77a9ec487363`)
      commit("setGeoLoc", location.data);
    } catch (e) {
      console.log(e.message);
    }
  },
};

export default { state, getters, actions, mutations };
