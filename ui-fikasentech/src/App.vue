<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Project />
  <Reference />
  <Projects />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Project from "./components/Project.vue";
import Projects from "./components/Projects.vue";
import Reference from "./components/Reference.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Project,
    Projects,
    Reference,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
