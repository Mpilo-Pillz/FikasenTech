const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: (credentials) => console.log("LOGGIN IN -->", credentials),

  logout: ({ commit }) => {
    commit("setToken", null);
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default { state, getters, actions, mutations };
