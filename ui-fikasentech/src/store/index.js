import { createStore } from "vuex";
import auth from "./modules/auth";
import projects from "./modules/projects";
import training from "./modules/training";

export default createStore({
  modules: { auth, projects, training },
});
