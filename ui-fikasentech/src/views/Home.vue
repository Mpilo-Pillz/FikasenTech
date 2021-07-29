<template>
  <div class="home">
    <Jumbotron />
    <AboutMe />
    <Tools />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Tools from "@/components/Tools.vue";
import AboutMe from "@/components/AboutMe.vue";
export default {
  name: "Home",
  components: {
    Jumbotron,
    AboutMe,
    Tools,
    Project,
  },
};
</script>
