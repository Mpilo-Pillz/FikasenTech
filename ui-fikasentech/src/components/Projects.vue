<template><Card :items="projects" /></template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
export default defineComponent({
  name: "Projects",
  components: {
    Card,
  },
  props: {
    items: {
      type: Array,
      required: true,
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

<!-- <script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
export default defineComponent({
  components: {
    Card,
  },

  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    console.log("PROJECT PRINTING");
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
});
</script> -->
