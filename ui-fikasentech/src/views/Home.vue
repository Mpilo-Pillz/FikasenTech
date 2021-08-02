<style lang="scss" scoped>
@media only screen and (max-width: 1100px) {
  .home {
    padding: 1rem;
  }
}
</style>
<template>
  <div class="home">
    <Jumbotron />
    <AboutMe />
    <Crafts />
    <Tools />
    <WorkHistory />
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
import WorkHistory from "@/components/WorkHistory.vue";
export default {
  name: "Home",
  components: {
    Jumbotron,
    AboutMe,
    Crafts,
    WorkHistory,
    Project,
    Tools,
  },
};
</script>
