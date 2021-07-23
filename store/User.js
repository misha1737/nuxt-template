import axios from "axios";
export const state = () => ({
  counter: 0,
  user: {
    name: "Misha",
    age: "28",
  },
  data: null,
});

export const mutations = {
  saveData(state, payload) {
    state.data = payload;
  },
  saveCounter(state, payload) {
    console.log("state.counter");
    state.counter = ++state.counter;
  },
};
export const actions = {
  async getData({ commit }) {
    commit("clearError", null, { root: true });
    commit("setLoading", true, { root: true });
    await axios({
      method: "get",
      url: "https://httpbin.org/delay/1",
    })
      .then((response) => {
        commit("saveData", response.data.origin);
      })
      .catch((error) => {
        console.log(error);
        context.commit("setError", error.response.data);
      });
    commit("setLoading", false, { root: true });
  },
};
export const getters = {
  getCounter: (state) => {
    return state.counter;
  },
  getUser: (state) => {
    return state.user;
  },
  getData: (state) => {
    return state.data;
  },
};
