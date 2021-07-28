import { makeRequest } from "../../services/api.service";

const state = {
  projects: [],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {
  fetchProjects() {
    makeRequest.get("/projects");
  },
};

const mutations = {
  setProjects: (state, projects) => {
    state.projects = projects;
  },
};

export default { state, getters, actions, mutations };
