<template>
  <div class="home">
    <Jumbotron />
    <AboutMe />
    <Crafts />
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
import Crafts from "@/components/Crafts.vue";
export default {
  name: "Home",
  components: {
    Jumbotron,
    AboutMe,
    Crafts,
    Tools,
    Project,
  },
};
</script>
