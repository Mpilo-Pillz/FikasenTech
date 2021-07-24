<template>
  <Card :items="projects" />
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  name: "Project",
  components: {
    Card,
  },
  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    console.log("MEEE");
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
};
</script>
