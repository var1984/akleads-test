import axios from "axios";

const state = {
  zipCode: null,
  errorZip: false,
};

const getters = {
  zipCodeInfo(state) {
    return state.zipCode;
  },
  errorZip(){
    return state.errorZip
  }
};

const mutations = {
  setZipCode(state, payload) {
    state.zipCode = payload;
  },
  ErrorZipCode(state, payload){
    state.errorZip = payload;
  }
};

const actions = {
  async getZipCode({ commit }, zip) {
    if(!zip) return
    try {
      const response = await axios.get(
        `https://api.zippopotam.us/us/${zip}`
      );
      const data = await response.data;
      commit("setZipCode", data);
    } catch (e) {
      console.log(e.message);
      commit('ErrorZipCode', true)
      
    }
  },
};

export default { state, getters, actions, mutations };
