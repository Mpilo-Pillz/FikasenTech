import { makeRequest } from "../../services/api.service";

const state = {
  workHistory: [],
};

const getters = {
  allWorkHistorys: (state) => state.workHistory,
};

const actions = {
  async fetchWorkHistory({ commit }) {
    const response = await makeRequest.get("/works");
    commit("setWorkHistory", response);
  },
};

const mutations = {
  setWorkHistory: (state, workHistory) => {
    state.workHistory = workHistory;
  },
};

export default { state, getters, actions, mutations };
