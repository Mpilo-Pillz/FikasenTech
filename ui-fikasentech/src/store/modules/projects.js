const state = {
  projects: [],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {
  fetchProjects() {},
};

const mutations = {
  setProjects: (state, projects) => {
    state.projects = projects;
  },
};
