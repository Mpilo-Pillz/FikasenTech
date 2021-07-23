const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state: any) => !!state.token,
};

const actions = {};

const mutations = {
  setToken: (state: any, token: any) => {
    state.token = token;
  },
};
