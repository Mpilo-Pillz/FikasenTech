<template>
  <div class="home">
    <Jumbotron />
    <AboutMe />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import AboutMe from "@/components/AboutMe.vue";
export default {
  name: "Home",
  components: {
    AboutMe,
    Jumbotron,
    Project,
  },
};
</script>
