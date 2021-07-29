import { makeRequest } from "../../services/api.service";

const state = {
  projects: [],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await makeRequest.get("/projects");
    commit("setProjects", response);
  },
};

const mutations = {
  setProjects: (state, projects) => {
    state.projects = projects;
  },
};

export default { state, getters, actions, mutations };
