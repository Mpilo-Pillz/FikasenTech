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
      {
        id: 8,
        name: "Modern JavaScript From The Beginning",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627964671/jsbradtraversy_xp7p4b.jpg",
        provider: "Udemy",
        hours: 21.5,
        instructor: "Brad Traversy",
        instructorprofile: "https://www.udemy.com/user/brad-traversy/",
        courselink:
          "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
        published_at: "2021-08-03T04:25:01.834Z",
        created_at: "2021-08-03T04:22:28.511Z",
        updated_at: "2021-08-03T04:25:01.841Z",
      },
      {
        id: 9,
        name: "Build Responsive Real-World Websites with HTML and CSS",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627964858/cssjonas_bwhmy5.jpg",
        provider: "Udemy",
        hours: 12,
        instructor: "Jonas Schmedtmann",
        instructorprofile: "https://www.udemy.com/user/jonasschmedtmann/",
        courselink:
          "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
        published_at: "2021-08-03T04:27:53.778Z",
        created_at: "2021-08-03T04:27:51.908Z",
        updated_at: "2021-08-03T04:27:53.795Z",
      },
      {
        id: 10,
        name: " CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass)",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627964671/maxcss_diwvnl.jpg",
        provider: "Udemy",
        hours: 23,
        instructor: "Maximilian Schwarzmüller",
        instructorprofile:
          "https://www.udemy.com/user/maximilian-schwarzmuller/",
        courselink: "https://www.udemy.com/user/academind/",
        published_at: "2021-08-03T04:29:31.353Z",
        created_at: "2021-08-03T04:29:28.552Z",
        updated_at: "2021-08-03T04:29:31.361Z",
      },
      {
        id: 11,
        name: "ES6 Javascript: The Complete Developer's Guide",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627965032/essixstephen_e98kxc.jpg",
        provider: "Udemy",
        hours: 6,
        instructor: "Stephen Grider",
        instructorprofile: "https://www.udemy.com/user/sgslo/",
        courselink: "https://www.udemy.com/course/javascript-es6-tutorial/",
        published_at: "2021-08-03T04:32:09.149Z",
        created_at: "2021-08-03T04:32:00.665Z",
        updated_at: "2021-08-03T04:32:09.158Z",
      },
      {
        id: 12,
        name: "The Complete JavaScript Course 2021: From Zero to Expert!",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627965252/jsjonas_yuviwc.jpg",
        provider: "Udemy",
        hours: 28,
        instructor: "Jonas Schmedtmann",
        instructorprofile: "https://www.udemy.com/user/jonasschmedtmann/",
        courselink:
          "https://www.udemy.com/course/the-complete-javascript-course/",
        published_at: "2021-08-03T04:35:18.774Z",
        created_at: "2021-08-03T04:35:17.125Z",
        updated_at: "2021-08-03T04:35:18.784Z",
      },
      {
        id: 13,
        name: " The Complete 2021 Flutter Development Bootcamp with Dart ",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627965385/angeladart_zldji9.jpg",
        provider: "Udemy",
        hours: 23.5,
        instructor: " Dr. Angela",
        instructorprofile:
          "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
        courselink: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
        published_at: "2021-08-03T04:39:01.207Z",
        created_at: "2021-08-03T04:38:09.490Z",
        updated_at: "2021-08-03T04:39:01.224Z",
      },
      {
        id: 14,
        name: " Automate the Boring Stuff with Python Programming",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627965671/alpythonautomation_mpijnl.jpg",
        provider: "Udemy",
        hours: 9.5,
        instructor: "Al Sweigart",
        instructorprofile: "https://www.udemy.com/user/al-sweigart/",
        courselink: "https://www.udemy.com/course/automate/",
        published_at: "2021-08-03T04:41:27.368Z",
        created_at: "2021-08-03T04:40:30.932Z",
        updated_at: "2021-08-03T04:41:27.378Z",
      },
      {
        id: 15,
        name: "Python Game Development - Create a Flappy Bird Clone",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627965900/gamepython_orcvhj.jpg",
        provider: "Udemy",
        hours: 3,
        instructor: "https://www.udemy.com/user/marktrego/",
        instructorprofile: "https://www.udemy.com/user/marktrego/",
        courselink:
          "https://www.udemy.com/course/python-game-development-create-a-flappy-bird-clone/",
        published_at: "2021-08-03T04:45:17.919Z",
        created_at: "2021-08-03T04:44:46.935Z",
        updated_at: "2021-08-03T04:45:17.928Z",
      },
      {
        id: 16,
        name: "Jenkins Introduction for Developer",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627966052/jenkinsintro_tsolqj.jpg",
        provider: "Udemy",
        hours: 1,
        instructor: "Tan Pham",
        instructorprofile: "https://www.udemy.com/user/phamvantan/",
        courselink: "https://www.udemy.com/course/jenkins-intro/",
        published_at: "2021-08-03T04:47:45.958Z",
        created_at: "2021-08-03T04:46:57.629Z",
        updated_at: "2021-08-03T04:47:45.967Z",
      },
      {
        id: 17,
        name: " HTML & CSS: Build a Dashboard",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627966131/builddashboard_iqkmhh.jpg",
        provider: "Udemy",
        hours: 3,
        instructor: " Joe Santos Garcia",
        instructorprofile: "https://www.udemy.com/user/codingphase/",
        courselink: "https://www.udemy.com/course/html-css-build-a-dashboard/",
        published_at: "2021-08-03T04:51:03.269Z",
        created_at: "2021-08-03T04:50:01.455Z",
        updated_at: "2021-08-03T04:51:03.279Z",
      },
      {
        id: 18,
        name: "Creating End to End Tests With Cucumber & Selenium WebDriver",
        img: "https://res.cloudinary.com/mpilopillz/image/upload/v1627966285/cucumberintro_u4axvt.jpg",
        provider: "Udemy",
        hours: 1,
        instructor: "Matthew Casperson",
        instructorprofile: "https://www.udemy.com/user/matthewcasperson/",
        courselink:
          "https://www.udemy.com/course/creating-end-to-end-tests-with-cucumber-and-webdriver/",
        published_at: "2021-08-03T04:53:09.291Z",
        created_at: "2021-08-03T04:53:07.685Z",
        updated_at: "2021-08-03T04:53:09.299Z",
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
