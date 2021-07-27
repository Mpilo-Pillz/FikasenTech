<template>
  <div class="home">
    <Jumbotron />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
import Jumbotron from "@/components/Jumbotron.vue";
export default {
  name: "Home",
  components: {
    Jumbotron,
    Project,
  },
};
</script>
