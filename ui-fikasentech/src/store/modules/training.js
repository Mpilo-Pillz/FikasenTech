// import { makeRequest } from "../../services/api.service";

const state = {
  training: [],
};

const getters = {
  allTrainings: (state) => state.training,
};

const actions = {
  async fetchTraining({ commit }) {
    // const response = await makeRequest.get("/trainings");
    const response = [
      {
        id: 1,
        name: "Typescript: The Complete Developer's Guide",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689719/TypeScriptStepenGrider_h8ykcu.jpg",
        provider: "Udemy",
        hours: 24.5,
        instructor: "Stephen Grider",
        instructorprofile: "https://www.udemy.com/user/sgslo/",
        courselink:
          "https://www.udemy.com/course/typescript-the-complete-developers-guide/",
        published_at: "2021-07-31T00:13:17.517Z",
        created_at: "2021-07-31T00:13:13.777Z",
        updated_at: "2021-07-31T01:10:56.961Z",
      },
      {
        id: 2,
        name: "The Modern JavaScript Bootcamp",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689735/MpiloJSBootcampWithAndrewMead_vorcrv.jpg",
        provider: "Udemy",
        hours: 29.5,
        instructor: "Andrew Mead",
        instructorprofile: "https://www.udemy.com/user/andrewmead/",
        courselink: "https://www.udemy.com/course/modern-javascript/",
        published_at: "2021-07-31T00:15:17.773Z",
        created_at: "2021-07-31T00:15:11.967Z",
        updated_at: "2021-07-31T00:29:02.143Z",
      },
      {
        id: 3,
        name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689729/MpiloAdvancedCSSSASSWithJonas_v4vxdi.jpg",
        provider: "Udemy",
        hours: 28,
        instructor: "Jonas Schmedtmann",
        instructorprofile: "https://www.udemy.com/user/jonasschmedtmann/",
        courselink: "https://www.udemy.com/course/advanced-css-and-sass/",
        published_at: "2021-07-31T00:16:54.537Z",
        created_at: "2021-07-31T00:16:44.902Z",
        updated_at: "2021-07-31T00:22:39.811Z",
      },
      {
        id: 4,
        name: "The Complete 2021 Web Development Bootcamp ",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689711/MpiloWebDevelopmentAngelaYu_wxoppm.jpg",
        provider: "Udemy",
        hours: 55,
        instructor: " Dr. Angela",
        instructorprofile:
          "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
        courselink:
          "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        published_at: "2021-07-31T00:26:24.804Z",
        created_at: "2021-07-31T00:26:19.830Z",
        updated_at: "2021-07-31T00:26:24.814Z",
      },
      {
        id: 5,
        name: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689710/NestArielWeinberger_eiyth6.jpg",
        provider: "Udemy",
        hours: 15.5,
        instructor: "Ariel Weinberger",
        instructorprofile: "https://www.udemy.com/user/ariel-weinberger/",
        courselink: "https://www.udemy.com/course/nestjs-zero-to-hero/",
        published_at: "2021-07-31T00:32:22.885Z",
        created_at: "2021-07-31T00:32:20.441Z",
        updated_at: "2021-07-31T00:32:22.895Z",
      },
      {
        id: 6,
        name: " Angular & NodeJS - The MEAN Stack Guide ",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627691836/MEANStackGideMax_cjnaav.jpg",
        provider: "Udemy",
        hours: 13,
        instructor: "Maximilian Schwarzmüller",
        instructorprofile:
          "https://www.udemy.com/user/maximilian-schwarzmuller/",
        courselink:
          "https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/",
        published_at: "2021-07-31T00:37:39.987Z",
        created_at: "2021-07-31T00:37:36.688Z",
        updated_at: "2021-07-31T00:37:40.005Z",
      },
      {
        id: 7,
        name: " Vue JS Essentials with Vuex and Vue Router",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627689723/VueEssentialsStephenGrider_nne1tg.jpg",
        provider: "Udemy",
        hours: 10.5,
        instructor: "Stephen Grider",
        instructorprofile: "https://www.udemy.com/user/sgslo/",
        courselink: "https://www.udemy.com/course/vue-js-course/",
        published_at: "2021-07-31T00:42:56.879Z",
        created_at: "2021-07-31T00:42:53.743Z",
        updated_at: "2021-07-31T00:42:56.889Z",
      },
    ];
    commit("setTraining", response);
  },
};

const mutations = {
  setTraining: (state, training) => {
    state.training = training;
  },
};

export default { state, getters, actions, mutations };
