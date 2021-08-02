// import { makeRequest } from "../../services/api.service";

const state = {
  workHistory: [],
};

const getters = {
  allWorkHistorys: (state) => state.workHistory,
};

const actions = {
  async fetchWorkHistory({ commit }) {
    // const response = await makeRequest.get("/works");
    const response = [
      {
        id: 1,
        employer: "Standard Bank Group",
        start: "May 2013",
        end: "November 2018",
        position: "QA/Test Engineer",
        summary:
          "This is where I was introduced to NodeJS and this is where my love for the JavaScript ecosystem (NodeJS, NPM, JavaScript) was formed. I worked primarily with Grunt, Jasmine, ProtractorJS and Cucumber. I wrote automated end-to-end tests for internet banking which was written in AngularJS (aka Angular 1).\n\nMy career started in 2013 as a manual tester. I got to test various applications and application integrations through Point of Sale devices, Automated Teller Machines, web and desktop applications. My career objective was to someday become a developer. In 2014 I took my first step into realising my dream of becoming a developer by becoming a Test Automation Engineer, beginning my journey and career as a person who WRITES CODE for a living. I automated tests using QTP writing my tests in VB Script. 2015 I was tasked with finding open-source automated tools, this is when I got introduced to Java with Selenium.\n\nI went on to join the internet banking team that was piloting the Agile Methodology. I learnt NodeJS, JavaScript and Cucumber. I got a step closer into realising my dream of becoming a software developer as the developers trusted me with their code giving me access to their codebase allowing me to make UI bug fixes, teaching me how to use git commands thus introducing me to version control.\n\nOur automated test suite would perform various transactions on the internet banking web app such as beneficiary payments, account management and more.\n\nI introduced Cumber to my fellow automation testers who went on to apply it in their respective agile teams. I won the Mark of Excellence (Standard bank's most prestigious award) in 2017 for my work in Research and Development (RND) for test automation frameworks.\n\nI was also trusted with mentoring and training Juniors and Graduates, teaching them Software Quality Assurance from a manual perspective and a test automation perspective.",
        published_at: "2021-08-01T12:36:34.755Z",
        created_at: "2021-08-01T12:36:31.446Z",
        updated_at: "2021-08-01T12:36:34.765Z",
        applications: [],
      },
      {
        id: 2,
        employer: " Osiris Trading & Raging River",
        start: "November 2018",
        end: "April 2021",
        position: "JS Frontend Engineer at",
        summary:
          "This is where JavaScript got dethroned as the programming language of my heart. Writing applications in Angular 2+ (Angular 7 - 11 to be exact) made me fall in love with TypeScript. I quickly realised the benefits of having types of guards and interfaces. (I like to think of them as writing letters to my future self (or fellow pull request/code reviewer)) about the logic, I am implementing and the type of data I am dealing with. I got to sharpen my CSS learning SCSS/SASS and the benefits of having a component library. I got introduced to the beauty of functional programming and reactive programming. This is where I started living my dream of becoming a developer.\n\nMy day-to-day task is to take UI/UX designs/wireframes and convert them into beautiful web apps. My duty is to connect the users of our web applications to our complex business logic through the use of beautiful colourful buttons, and padded input fields. This in turn leads to large numbers of users signing up to use our web apps every time there is a sporting event. In short, I am part of a team that is responsible for building web applications that allow users to place bets on sporting events play online casino games. Our teams provide solutions to various user events that can be performed on the sports betting web app, integrating with various APIs some built in-house some built by third parties. We get to integrate our web app with various iFrames creating a seamless experience for our users.\n\nI have also been trusted with the task of mentoring and training a junior developer in our team and that means a lot to me as it displays the confidence my manager and the seniors have in my ability as a developer and also this helps me improve my ability to explain complex programming topics and break them them into concepts that are easier to explain and understand.",
        published_at: "2021-08-01T12:38:32.610Z",
        created_at: "2021-08-01T12:38:22.330Z",
        updated_at: "2021-08-01T12:38:32.620Z",
        applications: [],
      },
    ];

    commit("setWorkHistory", response);
    // console.log("work api request");
  },
};

const mutations = {
  setWorkHistory: (state, workHistory) => {
    state.workHistory = workHistory.reverse();
  },
};

export default { state, getters, actions, mutations };
