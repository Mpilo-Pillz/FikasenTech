import { makeRequest } from "../../services/api.service";

const state = {
  training: [],
};

const getters = {
  allTrainings: (state) => state.training,
};

const actions = {
  async fetchTraining({ commit }) {
    const response = await makeRequest.get("/trainings");
    commit("setTraining", response);
  },
};

const mutations = {
  setTraining: (state, training) => {
    state.training = training;
  },
};

export default { state, getters, actions, mutations };
