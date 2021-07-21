<template>
  <hr />
  <h1>Mpi</h1>
  <ul id="render-projects" v-for="project in projects" :key="project.id">
    <li>{{ project.title }}</li>
    <p>{{ project.description }}</p>
  </ul>
  <hr />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Card",

  props: {
    // eslint-disable-next-line vue/require-default-prop
    msg: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    this.fetchProjects();
  },

  methods: {
    async fetchProjects() {
      const response = await fetch("http://localhost:1337/projects");
      const myProjects = await response.json();
      console.log(myProjects);
      this.projects = myProjects;
    },
  },

  //   setup: () => {
  //     console.log("Mounted");
  //     let projects = ref([
  //       { id: 2, title: "mpilo", deswcription: "pillzv topia" },
  //     ]);

  //     console.log("resso -->", projects);

  //     // return { projects }; 3
  //   },
});
</script>
