<template>
  <div class="home">
    <Project />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Project from "@/components/Project.vue";
export default defineComponent({
  name: "Home",
  components: {
    Project,
  },
});
</script>
