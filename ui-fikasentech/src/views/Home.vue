<template>
  <div class="home">
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";

export default {
  name: "Home",
  components: {
    Project,
  },
};
</script>
