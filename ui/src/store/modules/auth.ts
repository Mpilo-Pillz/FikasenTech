interface StateAction {
  commit: (mutationKey: string, mutationValue: any) => void;
}

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state: any) => !!state.token,
};

const actions = {
  logout: ({ commit }: StateAction) => {
    commit("setToken", null);
  },
};

const mutations = {
  setToken: (state: any, token: any) => {
    state.token = token;
  },
};
